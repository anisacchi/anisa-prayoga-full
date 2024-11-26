import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: process.env.SECRET_FIREBASE_API_KEY,
	authDomain: process.env.SECRET_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.SECRET_FIREBASE_DATABASE_URL,
	projectId: process.env.SECRET_FIREBASE_PROJECT_ID,
	storageBucket: process.env.SECRET_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.SECRET_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.SECRET_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }