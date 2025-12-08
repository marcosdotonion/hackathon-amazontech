import admin from "firebase-admin";
import serviceAccount from "./firebase-key.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: "ecotrade-1e80a.appspot.com"
});

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage().bucket();

