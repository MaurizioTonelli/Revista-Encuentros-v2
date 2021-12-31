import { getReadableMonth } from "../lib/utils";
import { deleteDoc, doc } from "firebase/firestore";
import styles from "../styles/Administrar.module.css";
import { firestore } from "../lib/firebase";
import toast from "react-hot-toast";

export default function MagazineList({ magazines }) {
  return (
    <>
      {magazines &&
        magazines.map((magazine, i) => (
          <Magazine key={i} data={magazine} admin={true} />
        ))}
    </>
  );
}

function Magazine({ data, admin = false }) {
  const handleDeleteMagazine = async () => {
    if (
      confirm(
        "¿Desea continuar con el eliminado? Esta acción no se puede deshacer"
      )
    ) {
      const docRef = doc(firestore, "magazines", data.uid);
      await deleteDoc(docRef);
      toast.success("La revista se eliminó");
    }
  };

  return (
    <div className={styles.magazineEntry}>
      <p>{getReadableMonth(data.month)}</p>
      <p>{data.title}</p>
      <div className={styles.actions}>
        <a
          href={data.downloadURL}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Ver revista
        </a>
        <button className="button" onClick={handleDeleteMagazine}>
          Borrar
        </button>
      </div>
    </div>
  );
}
