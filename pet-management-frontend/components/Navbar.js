// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/people">Liste des personnes</Link>
        </li>
        <li>
          <Link href="/animals">Liste des animaux</Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background-color: #333;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        li {
          color: white;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;