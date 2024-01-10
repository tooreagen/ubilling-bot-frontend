import Avatar from '@mui/material/Avatar';
import { AdminInfoStyle, AdminName } from './AdminInfoStyled';

const AdminInfo = () => {
  return (
    <AdminInfoStyle>
      <AdminName>Admin name</AdminName>
      <Avatar src="/broken-image.jpg" />
    </AdminInfoStyle>
  );
};

export default AdminInfo;
