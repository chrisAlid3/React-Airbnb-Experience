import airbnbLogo from "../images/airbnb-logo.png";

function Header() {
  return (
    <div>
      <img
        src={airbnbLogo}
        className="header"
        alt="Airbnb Logo"
        width="100px"
      ></img>
    </div>
  );
}

export default Header;
