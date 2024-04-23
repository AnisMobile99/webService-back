const {
	initializeApp,
	applicationDefault,
	cert,
} = require("firebase-admin/app");
const {
	getFirestore,
	Timestamp,
	FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require("./serviceAccount.json");
const { getMessaging } = require("firebase-admin/messaging");

initializeApp({
	credential: cert(serviceAccount),
	databaseURL: process.env.FIRESTORE_DATABASE_URL,
	storageBucket: process.env.FIRESTORE_STORAGE_BUCKET,
});

const db = getFirestore();
const messaging = getMessaging();

module.exports = {
	db,
	messaging,
	FieldValue,
	Timestamp,
};
