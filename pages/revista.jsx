import MagazineList from "../components/MagazineList";
import { firestore } from "../lib/firebase";
import { query, collection } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

export default function Revista({}) {
  const magazinesRef = collection(firestore, "magazines");
  const magazinesQuery = query(magazinesRef);

  const [magazines] = useCollectionDataOnce(magazinesQuery);
  return (
    <article>
      <div className="main transparent home-canvas">
        <div className="title-container">
          <h1 className="page-title first-letter">E</h1>
          <h1 className="page-title">ncuentros</h1>
        </div>
        <h3>Ediciones de la revista</h3>
        <MagazineList magazines={magazines} admin={false} />
      </div>
    </article>
  );
}
