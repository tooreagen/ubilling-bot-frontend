import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import * as React from 'react';
import data from 'db/data';
import ChatMessageItem from 'components/ChatComponents/ChatMessageItem/ChatMessageItem';
import ChatPanel from 'components/ChatComponents/ChatPanel/ChatPanel';
import { ChatMessageListStyled } from 'components/ChatComponents/ChatMessageList/ChatMessageListStyled';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Chat = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: '#D2D2D7',
        color: 'rgb(255, 0, 255)',
        display: 'flex',
        height: 550,
      }}
    >
      {/* Chat list */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        // aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {data.map(item => {
          return <Tab label={item.login} {...a11yProps(item.id)} />;
        })}
      </Tabs>

      {/* Chat box */}
      {data.map(item => {
        return (
          <ChatPanel value={value} index={item.id - 1}>
            <p>Чат з абонентом: {item.login}</p>

            {/* Відображення чату (переписки) */}
            <ChatMessageListStyled>
              {item.chat.map(chat_item => {
                return (
                  <ChatMessageItem
                    id={chat_item.id}
                    message={chat_item.message}
                  />
                );
              })}
            </ChatMessageListStyled>
          </ChatPanel>
        );
      })}
    </Box>
  );
};

export default Chat;
