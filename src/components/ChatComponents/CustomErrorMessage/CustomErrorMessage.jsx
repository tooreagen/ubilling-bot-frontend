import { useState } from 'react';
import { CustomErrorMessageStyled } from './CustomErrorMessageStyled';

const CustomErrorMessage = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <CustomErrorMessageStyled
      onClick={() => {
        setIsVisible(false);
      }}
      hidden={!isVisible}
    >
      {children}
    </CustomErrorMessageStyled>
  );
};

export default CustomErrorMessage;
