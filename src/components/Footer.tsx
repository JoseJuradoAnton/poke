import {Link} from "react-router-dom";
import style from "./footer.module.css";
//assets
import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link className={style.footerLink} to="/pokemons">
        <img className={style.footerIcon} src={PokemonPic} alt="" />
        Pokemons
      </Link>
      <Link className={style.footerLink} to="/location">
        <img className={style.footerIcon} src={LocationPic} alt="" />
        Locations
      </Link>
      <Link className={style.footerLink} to="/items">
        <img className={style.footerIcon} src={ItemsPic} alt="" />
        Items
      </Link>
    </footer>
  );
};

export default Footer;
