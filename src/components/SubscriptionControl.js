import React from 'react';
import styled from 'styled-components';
import { useSubscription } from '../contexts/SubscriptionContext';

const SubscriptionButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  padding: 10px 20px;
  background: ${props => props.$hasSubscription ? '#28a745' : '#f8f9fa'};
  color: ${props => props.$hasSubscription ? 'white' : '#212529'};
  border: 1px solid ${props => props.$hasSubscription ? '#28a745' : '#ced4da'};
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${props => props.$hasSubscription ? '#218838' : '#e2e6ea'};
    border-color: ${props => props.$hasSubscription ? '#1e7e34' : '#dae0e5'};
  }
`;

const Icon = styled.span`
  font-size: 18px;
`;

const SubscriptionControl = () => {
  const { hasSubscription, setSubscription } = useSubscription();

  const toggleSubscription = () => {
    setSubscription(!hasSubscription);
  };

  return (
    <SubscriptionButton 
      onClick={toggleSubscription}
      $hasSubscription={hasSubscription}
    >
      <Icon>{hasSubscription ? '✓' : '○'}</Icon>
      {hasSubscription ? 'Подписка активна' : 'Активировать подписку'}
    </SubscriptionButton>
  );
};

export default SubscriptionControl;