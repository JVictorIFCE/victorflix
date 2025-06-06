import "./Header.css";
import logo from "../../assets/imagem.svg";
import Button from "../button/Button";
import { CgProfile } from "react-icons/cg";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { TbDeviceDesktopShare } from "react-icons/tb";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <img width="180" src={logo} />
        <Button name="Em Alta" />
        <Button name="Séries de TV" />
        <Button name="Shows de TV" />
      </div>

      <div className="header-right">
        <TbDeviceDesktopShare />
        <FaMagnifyingGlassChart />
        <CgProfile />
      </div>
    </div>
  );
}

export default Header;
