import logo from '../../assets/images/logo.png';
import '../../components/Header/header.css';

function TopNav() {
  return (
    <header>
      <img src={logo} className="logo" alt="SportSee, coaching sportif" />

      <nav className="top_nav">
        {/* <span>Accueil</span>
        <span>Profil</span>
        <span>Réglages</span>
        <span>Communauté</span> */}

        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}

export default TopNav;
