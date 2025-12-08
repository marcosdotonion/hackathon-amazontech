import { db } from "../config/firebase";

export async function saveUser(uid: string, data: any) {
  await db.collection("users").doc(uid).set(data);
}

export async function getUser(uid: string) {
  const snap = await db.collection("users").doc(uid).get();
  return snap.exists ? snap.data() : null;
}

