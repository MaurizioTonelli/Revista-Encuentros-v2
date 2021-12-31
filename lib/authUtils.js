import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../lib/firebase";
import { signOut } from "firebase/auth";

export const logOut = async () => {
  await signOut(auth);
};

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleAuthProvider).catch((error) => {});
};
