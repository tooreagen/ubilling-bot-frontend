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
        color: 'var(--message-text-color)',
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
        {data.map(tab_item => {
          return <Tab label={tab_item.login} {...a11yProps(tab_item.id)} />;
        })}
      </Tabs>

      {/* Chat box */}
      {data.map(chat_item => {
        return (
          <ChatPanel value={value} index={chat_item.id - 1}>
            <p>Чат з абонентом: {chat_item.login}</p>

            {/* Відображення чату (переписки) */}
            <ChatMessageListStyled>
              {chat_item.chat.map(chat_msg_item => {
                return (
                  <ChatMessageItem
                    id={chat_msg_item.id}
                    message={chat_msg_item.message}
                    sender={chat_msg_item.sender}
                    time={chat_msg_item.time}
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
