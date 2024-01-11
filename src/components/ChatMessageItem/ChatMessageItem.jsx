import { ChatMessageItemStyled } from './ChatMessageItemStyled';

const ChatMessageItem = ({ id, message }) => {
  return (
    <ChatMessageItemStyled>
      {id} {message}
    </ChatMessageItemStyled>
  );
};

export default ChatMessageItem;
