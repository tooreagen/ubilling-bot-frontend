import AdminInfo from 'components/AdminInfo/AdminInfo';
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
      <AdminInfo />
    </HeaderStyle>
  );
};

export default Header;
