import '../../components/Aside/aside.css';
import icon from '../../assets/images/icon.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';

function asideNav() {
  return (
    <>
      <ul>
        <li>
          <img src={icon} alt="icon 1" />
        </li>
        <li>
          <img src={icon2} alt="icon 2" />
        </li>
        <li>
          <img src={icon3} alt="icon 3" />
        </li>
        <li>
          <img src={icon4} alt="icon 4" />
        </li>
      </ul>
      <span className="copyright">Copiryght, SportSee 2020</span>
    </>
  );
}

export default asideNav;
