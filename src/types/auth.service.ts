import { auth } from "../config/firebase";
import { saveUser } from "../repositories/user.repo";

export async function registerMerchant(data: any) {
  const user = await auth.createUser({
    email: data.email,
    password: data.password,
    displayName: data.name
  });

  await saveUser(user.uid, {
    ...data,
    uid: user.uid,
    role: "merchant",
    created_at: new Date()
  });

  return user;
}

