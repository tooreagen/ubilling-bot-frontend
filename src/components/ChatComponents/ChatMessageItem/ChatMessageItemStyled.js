import styled from 'styled-components';

export const ChatMessageItemWrapper = styled.div`
  display: flex;
  justify-content: ${props =>
    props.sender === 'admin' ? 'flex-end' : 'flex-start'};
`;

export const ChatMessageItemBox = styled.div`
  max-width: 70%;
`;

export const ChatMessageItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${props =>
    props.sender === 'admin' ? '10px' : '0'};
  border-bottom-right-radius: ${props =>
    props.sender === 'admin' ? '0' : '10px'};

  background-color: ${props =>
    props.sender === 'admin'
      ? 'var(--message-out-background)'
      : 'var(--message-in-background)'};
`;

export const ChatMessageItemTime = styled.div`
  display: flex;
  justify-content: ${props =>
    props.sender === 'admin' ? 'flex-end' : 'flex-start'};
  margin-top: 3px;
  color: var(--time-text-color);
`;
