import dateConverter from 'helpers/dateConverter';
import {
  ChatMessageItemTime,
  ChatMessageItemStyled,
  ChatMessageItemWrapper,
  ChatMessageItemBox,
} from './ChatMessageItemStyled';

const ChatMessageItem = ({ id, message, sender, time }) => {
  return (
    <ChatMessageItemWrapper sender={sender}>
      <ChatMessageItemBox>
        <ChatMessageItemStyled sender={sender}>
          <div>Відпрвник: {sender}</div>
          <div>
            {id} {message}
          </div>
        </ChatMessageItemStyled>
        <ChatMessageItemTime sender={sender}>
          <div>{dateConverter(time)}</div>
        </ChatMessageItemTime>
      </ChatMessageItemBox>
    </ChatMessageItemWrapper>
  );
};

export default ChatMessageItem;
