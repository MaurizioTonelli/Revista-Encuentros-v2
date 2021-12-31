import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../lib/firebase";
import { useState, useEffect } from "react";

export default function AdminGuard(props) {
  const [userRef, setUserRef] = useState(
    auth.currentUser ? doc(firestore, "users", auth.currentUser.uid) : null
  );
  const [user] = useAuthState(auth);
  const [userData] = useDocumentData(userRef);

  useEffect(() => {
    if (user) {
      setUserRef(doc(firestore, "users", user.uid));
    }
  }, [user]);

  return userData &&
    userData.role === "administrator" &&
    auth.currentUser &&
    auth.currentUser.emailVerified
    ? props.children
    : props.fallback
    ? props.fallback
    : null;
}
