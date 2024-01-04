import Link from "next/link";
import { FaYoutube, FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
              Jeremy Klassen
            </h1>
          </Link>
          <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
            <Link
              className="text-white/90 hover:text-white"
              href="https://www.youtube.com/channel/UC9leMKuSNQ8Mamom8E9FP4Q"
            >
              <FaYoutube />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href="https://www.linkedin.com/in/jeremy-klassen/"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href="https://github.com/JeremyKlassen"
            >
              <FaGithub />
            </Link>
            <Link
              className="text-white/90 hover:text-white"
              href="https://jeremyklassen.ca/"
            >
              <FaLaptop />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
