import Link from "next/link";

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
      </ul>
    </nav>
  );
}
