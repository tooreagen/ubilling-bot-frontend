import FormMessageSend from 'components/FormMessageSend/FormMessageSend';
import { useState } from 'react';
import { ChatMessagingBoxStyled } from './ChatMessagingBoxStyled';

const ChatMessagingBox = () => {
  const [heightFormMessageSend, setHeightFormMessageSend] = useState(71);

  const handleHeightChange = newHeight => {
    setHeightFormMessageSend(newHeight);
  };

  return (
    <ChatMessagingBoxStyled style={{ height: heightFormMessageSend }}>
      <FormMessageSend onHeightChange={handleHeightChange} />
    </ChatMessagingBoxStyled>
  );
};

export default ChatMessagingBox;
