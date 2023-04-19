import airbnbLogo from "../images/airbnb-logo.png";

function Header() {
  return (
    <div className="header">
      <img src={airbnbLogo} alt="Airbnb Logo" width="100px"></img>
    </div>
  );
}

export default Header;
