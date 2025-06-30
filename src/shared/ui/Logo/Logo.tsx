import PictureTag from "../PictureTag/PictureTag";
import LogoIconDark from "@assets/LogoDark.svg";
import LogoIconLight from "@assets/LogoLight.svg";
import { Link } from "react-router-dom";
interface LogoProps {
  theme?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const logo = props.theme === "light" ? LogoIconLight : LogoIconDark;
  return (
    <>
      <Link to={"/"} className={props.className}>
        <PictureTag src={logo} alt="Logo" />
      </Link>
    </>
  );
};
export default Logo;
