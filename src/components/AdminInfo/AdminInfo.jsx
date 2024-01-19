import Avatar from '@mui/material/Avatar';
import { AdminInfoStyle, AdminName } from './AdminInfoStyled';

const AdminInfo = () => {
  return (
    <AdminInfoStyle>
      <Avatar src="/broken-image.jpg" />
      <AdminName>Admin</AdminName>
    </AdminInfoStyle>
  );
};

export default AdminInfo;
