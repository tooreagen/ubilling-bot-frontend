import Box from '@mui/material/Box';
import { ChatPanelStyled } from './ChatPanelStyled';

const ChatPanel = ({ children, value, index }) => {
  return (
    <ChatPanelStyled
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      )}
    </ChatPanelStyled>
  );
};

export default ChatPanel;
