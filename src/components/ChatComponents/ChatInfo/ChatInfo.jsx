import { AbonInfo, ChatInfoStyled } from './ChatInfoStyled';

const ChatInfo = ({ login }) => {
  return (
    <ChatInfoStyled>
      <AbonInfo>Чат з абонентом: {login}</AbonInfo>
    </ChatInfoStyled>
  );
};

export default ChatInfo;
