function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	const RADIUS_EARTH_KM = 6371; // Rayon moyen de la Terre en kilomètres
	// console.log("1:" + lat1 + " " + lon1 + " " + " " + lat2 + " " + lon2);
	const degToRad = (deg) => deg * (Math.PI / 180);

	const dLat = degToRad(lat2 - lat1);
	const dLon = degToRad(lon2 - lon1);

	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(degToRad(lat1)) *
			Math.cos(degToRad(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	const distance = RADIUS_EARTH_KM * c;

	// console.log(distance);

	return distance;
}
function formatNotifDate(dateObj) {
	const now = new Date();
	const days = [
		"Dim", // Dimanche
		"Lun", // Lundi
		"Mar", // Mardi
		"Mer", // Mercredi
		"Jeu", // Jeudi
		"Ven", // Vendredi
		"Sam", // Samedi
	];

	// Différence en millisecondes
	const difference = now - dateObj;
	const oneDay = 1000 * 60 * 60 * 24;
	const oneWeek = oneDay * 7;
	const oneMonth = oneDay * 30; // Approximatif
	const oneYear = oneDay * 365; // Approximatif

	// Formatage des heures et minutes
	const hours = String(dateObj.getHours()).padStart(2, "0");
	const minutes = String(dateObj.getMinutes()).padStart(2, "0");
	const formattedTime = `${hours}:${minutes}`;

	if (difference <= oneDay) {
		return `${formattedTime}`;
	} else if (difference <= 2 * oneDay) {
		return `Hier. ${formattedTime}`;
	} else if (difference <= oneWeek) {
		return `${days[dateObj.getDay()]}. ${dateObj.getDate()}`;
	} else if (difference <= oneYear) {
		return `${String(dateObj.getDate()).padStart(2, "0")}/${String(
			dateObj.getMonth() + 1,
		).padStart(2, "0")}`;
	} else {
		return `${String(dateObj.getDate()).padStart(2, "0")}/${String(
			dateObj.getMonth() + 1,
		).padStart(2, "0")}/${dateObj.getFullYear()}`;
	}
}

function formatDateFull(dateObj) {
	const days = [
		"Dimanche",
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
	];

	const months = [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre",
	];

	return `${days[dateObj.getDay()]} ${dateObj.getDate()} ${
		months[dateObj.getMonth()]
	}`;
}

function formatDate(dateObj) {
	const months = [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre",
	];

	return `${dateObj.getDate()} ${months[dateObj.getMonth()]}`;
}

function formatTime(dateObj) {
	const hours = dateObj.getHours();
	const minutes = dateObj.getMinutes();
	return `${hours}h${String(minutes).padStart(2, "0")}`;
}

function minutesToDurationString(minutes) {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	let durationString = "";

	if (hours > 0) {
		durationString += `${hours}h`;
	}

	if (remainingMinutes > 0) {
		durationString += `${remainingMinutes}`;
	}

	return durationString;
}
const {
	format,
	addMinutes,
	differenceInDays,
	startOfDay,
} = require("date-fns");
const { fr } = require("date-fns/locale");

function formatReservationDate(timestamp) {
	const dateFromFirestore = timestamp.toDate(); // Convertir le timestamp de Firestore en objet Date de JavaScript
	return format(dateFromFirestore, "dd/MM/yyyy", { locale: fr });
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDateAndTimeStrings(timestamp, duration) {
	// Convertir le timestamp de Firestore en une Date JavaScript
	const dateFromFirestore = timestamp.toDate();

	// Obtenir la date actuelle
	const now = new Date();

	// Récupérer le début de la journée pour les deux dates
	const startOfDayFirestore = startOfDay(dateFromFirestore);
	const startOfDayNow = startOfDay(now);

	let dateString;

	// Calculer la différence en jours entre le début de la date actuelle et le début de la date donnée
	const daysDifference = differenceInDays(startOfDayFirestore, startOfDayNow);

	if (daysDifference === 0) {
		dateString = "Aujourd'hui";
	} else if (daysDifference === 1) {
		dateString = "Demain";
	} else if (daysDifference === 2) {
		dateString = "Après-demain";
	} else if (daysDifference === -1) {
		dateString = "Hier";
	} else if (daysDifference === -2) {
		dateString = "Avant-Hier";
	} else {
		const formattedDateString = format(dateFromFirestore, "EEEE d MMMM", {
			locale: fr,
		});
		const dayWithFirstLetterCapitalized = capitalizeFirstLetter(
			formattedDateString.split(" ")[0],
		);
		const monthWithFirstLetterCapitalized = capitalizeFirstLetter(
			formattedDateString.split(" ")[2],
		);
		const dayOfMonth = formattedDateString.split(" ")[1];
		dateString = `${dayWithFirstLetterCapitalized} ${dayOfMonth} ${monthWithFirstLetterCapitalized}`;
	}

	// Formater l'heure de début et de fin
	const startTimeString =
		format(dateFromFirestore, "HH") + "h" + format(dateFromFirestore, "mm");
	const endTime = addMinutes(dateFromFirestore, duration);
	const endTimeString = format(endTime, "HH") + "h" + format(endTime, "mm");

	const heureString = `${startTimeString} à ${endTimeString}`;

	return [dateString, heureString];
}

function formatSessionDate(timestamp) {
	// Convertir le timestamp Firestore en objet Date
	// Convertir le timestamp de Firestore en une Date JavaScript
	const dateFromFirestore = timestamp.toDate();

	// Obtenir la date actuelle
	const now = new Date();

	// Récupérer le début de la journée pour les deux dates
	const startOfDayFirestore = startOfDay(dateFromFirestore);
	const startOfDayNow = startOfDay(now);

	let dateSessionFormatted;
	// Calculer la différence en jours entre le début de la date actuelle et le début de la date donnée
	const daysDifference = differenceInDays(startOfDayFirestore, startOfDayNow);

	if (daysDifference === 0) {
		dateSessionFormatted = "Aujourd'hui ";
	} else if (daysDifference === 1) {
		dateSessionFormatted = "Demain ";
	} else if (daysDifference === 2) {
		dateSessionFormatted = "Après-Demain ";
	} else if (daysDifference === -1) {
		dateSessionFormatted = "Hier ";
	} else if (daysDifference === -2) {
		dateSessionFormatted = "Avant-Hier ";
	} else {
		// Utiliser le format "d MMMM yyyy" pour afficher le jour, le mois en lettres et l'année
		dateSessionFormatted = format(dateFromFirestore, "d MMMM yyyy", {
			locale: fr,
		});
		// Mettre la première lettre en majuscule si nécessaire
		dateSessionFormatted =
			dateSessionFormatted[0].toUpperCase() + dateSessionFormatted.slice(1);
	}

	const heureSessionFormatted = format(dateFromFirestore, "H:mm", {
		locale: fr,
	}).replace(":", "h");
	let dateSession = dateSessionFormatted;
	let heureSession = heureSessionFormatted;

	return { dateSession, heureSession };
}

const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
const duration = require("dayjs/plugin/duration");

dayjs.extend(relativeTime);
dayjs.extend(duration);

/**
 * Calcule la différence de temps entre maintenant et la date de la prestation,
 * et retourne un string représentant cette différence en heures ou en minutes.
 *
 * @param {object} firestoreTimestamp - L'objet Timestamp de Firestore.
 * @returns {string} La différence de temps formatée en heures ou minutes.
 */

function getTimeDifferenceFormatted(firestoreTimestamp) {
	// Convertir le Timestamp de Firestore en un objet dayjs.
	const datePrestationDayjs = dayjs(
		new Date(firestoreTimestamp.seconds * 1000),
	);
	// Obtenir le moment actuel.
	const now = dayjs();
	// Calculer la différence en minutes.
	const differenceInMinutes = datePrestationDayjs.diff(now, "minute");
	// Formatter la différence.
	let formattedDifference;
	console.log("diffrence debog:", differenceInMinutes);
	if (differenceInMinutes > 60) {
		// Plus d'une heure restante, calculer les heures et les minutes.
		const hours = Math.floor(differenceInMinutes / 60);
		const minutes = differenceInMinutes % 60; // minutes restantes
		const isHour = hours < 2 ? "heure" : "heures";
		// Ajouter les minutes à la chaîne formatée si elles sont supérieures à 0.
		formattedDifference =
			`Rappel de la séance dans ${hours} ${isHour}` +
			(minutes > 0 ? ` et ${minutes} minutes` : "");
	} else if (differenceInMinutes > 0) {
		// Moins d'une heure restante, retourner le nombre exact de minutes.
		formattedDifference = `Rappel de la séance dans ${differenceInMinutes} minutes`;
	} else {
		// Si la différence est négative, la date de la prestation est passée.
		formattedDifference =
			"La séance est en attente de validation par la plateforme";
	}
	return formattedDifference;
}

module.exports = {
	getDistanceFromLatLonInKm,
	formatNotifDate,
	formatDateFull,
	formatTime,
	minutesToDurationString,
	getDateAndTimeStrings,
	formatReservationDate,
	formatSessionDate,
	formatDate,
	getTimeDifferenceFormatted,
};
