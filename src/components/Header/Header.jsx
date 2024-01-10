import { HeaderStyle } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img
          src="https://itlux.if.ua/assets/upload/template/itlux-logo.svg"
          alt="logo"
          width={150}
        />
      </div>
    </HeaderStyle>
  );
};

export default Header;
