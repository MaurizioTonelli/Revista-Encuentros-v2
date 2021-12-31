import formStyles from "../styles/Forms.module.css";
import styles from "../styles/Administrar.module.css";
import { useState } from "react";
import { storage, firestore, auth } from "../lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  query,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useCollectionData } from "react-firebase-hooks/firestore";
import toast from "react-hot-toast";

import MagazineList from "../components/MagazineList";

function getFileMetadata(e) {
  const file = Array.from(e.target.files)[0];
  const extension = file.type.split("/")[1];
  const size = file.size;
  return { file, extension, size };
}

export default function Administrar() {
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");

  const magazinesRef = collection(firestore, "magazines");
  const magazinesQuery = query(magazinesRef);

  const [magazines] = useCollectionData(magazinesQuery);

  const clearForm = () => {
    setYear(2000);
    setMonth(1);
    setTitle("");
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file === null) {
      toast.error("Elige un archivo");
      return;
    }
    const sRef = ref(
      storage,
      `uploads/${Date.now()}.${file.type.split("/")[1]}`
    );

    const task = uploadBytesResumable(sRef, file);
    task.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(task.snapshot.ref).then(async (downloadURL) => {
          const collectionRef = collection(firestore, "magazines");

          const docRef = await addDoc(collectionRef, {
            year,
            month,
            title,
            downloadURL,
          });
          await updateDoc(docRef, { uid: docRef.id });

          clearForm();
          toast.success("Se agregó la revista");
        });
      }
    );
  };

  const handleReceiveFile = (e) => {
    setFile(Array.from(e.target.files)[0]);
  };

  return (
    <article>
      <div className="main transparent magazine-canvas">
        <h3>Sube una nueva revista</h3>
        <form className={formStyles.form} onSubmit={handleSubmit}>
          <label>
            Nombre de la revista
            <input
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Mes
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            >
              <option value={1}>Enero</option>
              <option value={2}>Febrero</option>
              <option value={3}>Marzo</option>
              <option value={4}>Abril</option>
              <option value={5}>Mayo</option>
              <option value={6}>Junio</option>
              <option value={7}>Julio</option>
              <option value={8}>Agosto</option>
              <option value={9}>Septiembre</option>
              <option value={10}>Octubre</option>
              <option value={11}>Noviembre</option>
              <option value={12}>Diciembre</option>
            </select>
          </label>
          <label>
            Año
            <input
              required
              type="number"
              min={1900}
              max={3000}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>
          <label>
            PDF de la revista
            <input type="file" required onChange={handleReceiveFile} />
          </label>
          <input type="submit" className="button" />
        </form>
        <h3>Todas las revistas</h3>
        <MagazineList magazines={magazines} />
      </div>
    </article>
  );
}
