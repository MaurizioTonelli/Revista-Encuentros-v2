import Link from "next/link";
import AdminGuard from "./AdminGuard";
import { logOut } from "../lib/authUtils";

export default function Navbar({}) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"> INICIO</Link>{" "}
        </li>
        <li>
          <Link href="/revista">REVISTA</Link>
        </li>
        <li>
          <Link href="/acercade">ACERCA DE</Link>{" "}
        </li>
        <AdminGuard>
          <li>
            <Link href="/administrar">ADMINISTRAR</Link>
          </li>
          <li onClick={logOut}>
            <Link href="/">CERRAR SESIÓN</Link>
          </li>
        </AdminGuard>
      </ul>
    </nav>
  );
}
