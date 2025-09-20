import styled from "styled-components";

const SubscriptionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  z-index: 10;
  color: white;
  padding: 20px;
  text-align: center;
`;

const LockIcon = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Message = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`;

const SubscriptionButton = styled.button`
  background-color: #0066ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
    background-color: #0052cc;
  }
`;

const SubscriptionLock = ({ onSubscribe }) => {
  return (
    <SubscriptionOverlay>
      <LockIcon>🔒</LockIcon>
      <Message>Доступно только для пользователей с подпиской</Message>
      <SubscriptionButton onClick={onSubscribe}>
        Получить подписку
      </SubscriptionButton>
    </SubscriptionOverlay>
  );
};

export default SubscriptionLock;