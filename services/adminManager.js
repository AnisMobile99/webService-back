const { db } = require("../firebase-config");

const getAdmin = async (uid) => {
	const docRef = db.collection("admins").doc(uid);
	const docSnap = await docRef.get();

	if (!docSnap.exists) return null;
	return docSnap;
};

const getUsers = async (type) => {
	const colRef = db.collection("users").where("userType", "==", type);
	const colSnap = await colRef.get();

	if (colSnap.empty) return null;

	let sportifs = [];

	colSnap.forEach((sportif) => {
		const sportifData = sportif.data();
		sportifs.push({
			id: sportif.id,
			email: sportifData.email,
			firstname: sportifData.firstname,
			lastname: sportifData.lastname,
			phoneNumber: sportifData.phoneNumber,
			createdAt: sportifData.createdAt,
		});
	});

	return sportifs;
};

const getUser = async (uid) => {
	const docRef = db.collection("users").doc(uid);
	const docSnap = await docRef.get();

	if (!docSnap.exists) return null;

	return docSnap.data();
};

const updateStatusDegree = async (uid, degreeId, status) => {
	const docRef = db.collection("users").doc(uid);
	const docSnap = await docRef.get();

	try {
		let degrees = docSnap.data().degrees;
		console.log(degrees);
		degrees.forEach((degree) => {
			if (degree.id === degreeId) {
				degree.status = status;
			}
		});
		console.log(degrees);
		await docRef.update({ degrees });
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

const updateStatusDocument = async (uid, documentId, status) => {
	const docRef = db.collection("users").doc(uid);
	const docSnap = await docRef.get();

	try {
		let legalDocuments = docSnap.data().legalDocuments;
		console.log(legalDocuments);
		legalDocuments.forEach((document) => {
			if (document.id === documentId) {
				document.status = status;
			}
		});
		console.log(legalDocuments);
		await docRef.update({ legalDocuments });
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

module.exports = {
	getAdmin,
	getUsers,
	getUser,
	updateStatusDegree,
	updateStatusDocument,
};
