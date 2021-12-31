import AdminGuard from "../components/AdminGuard";
import { logOut, signInWithGoogle } from "../lib/authUtils";

export default function Entrar({}) {
  return (
    <article>
      <div className="main transparent home-canvas">
        <div className="title-container">
          <h1 className="page-title first-letter">E</h1>
          <h1 className="page-title">ncuentros</h1>
        </div>
        <AdminGuard
          fallback={
            <button className="button" onClick={signInWithGoogle}>
              <img src="/logos/google-logo.png" alt="Logo de Google" />
              Ingresar con Google
            </button>
          }
        >
          <button className="button" onClick={logOut}>
            Cerrar sesión
          </button>
        </AdminGuard>
      </div>
    </article>
  );
}
