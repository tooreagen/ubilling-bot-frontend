import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import data from 'db/data';
import ChatMessageItem from 'components/ChatComponents/ChatMessageItem/ChatMessageItem';
import ChatPanel from 'components/ChatComponents/ChatPanel/ChatPanel';
import { ChatMessageListStyled } from 'components/ChatComponents/ChatMessageList/ChatMessageListStyled';
import ChatMessagingBox from '../ChatMessagingBox/ChatMessagingBox';
import { ChatStyled } from './ChatStyled';
import ChatInfo from '../ChatInfo/ChatInfo';

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
    <>
      <ChatStyled>
        {/* Chat list */}
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{
            borderRight: 2,
            borderColor: 'var(--secondary-text-color)',
            height: '100%',
            width: '20%',
            position: 'fixed',
            backgroundColor: 'var(--main-background-color)',
          }}
        >
          {data.map(tab_item => {
            return (
              <Tab
                label={tab_item.login}
                {...a11yProps(tab_item.id)}
                sx={{
                  color: 'var(--main-text-color)',
                  textTransform: 'none',
                }}
              />
            );
          })}
        </Tabs>

        {/* Chat box */}
        <>
          {data.map(chat_item => {
            return (
              <ChatPanel value={value} index={chat_item.id - 1}>
                <ChatInfo login={chat_item.login}></ChatInfo>

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
                <ChatMessagingBox></ChatMessagingBox>
              </ChatPanel>
            );
          })}
        </>
      </ChatStyled>
    </>
  );
};

export default Chat;
