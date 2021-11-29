import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <article>
      <div className="main transparent home-canvas">
        <div className="title-container">
          <h1 className="page-title first-letter">E</h1>
          <h1 className="page-title">ncuentros</h1>
        </div>
        <h2>Bienvenido</h2>
        <p>Encuentra San Miguel de Allende</p>
        <Link href="/revista">Ver revista</Link>
      </div>
    </article>
  );
}
