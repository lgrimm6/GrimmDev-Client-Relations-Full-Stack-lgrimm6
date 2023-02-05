import HeaderStyled from "./style";

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img src="./src/assets/LogoGrimmDev.svg" className="logo" />
        <h1 className="teste">Client Relations</h1>
      </div>
      <button>Logout</button>
    </HeaderStyled>
  );
};

export default Header;
