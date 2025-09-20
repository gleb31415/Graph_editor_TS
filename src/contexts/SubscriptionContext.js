import React, { createContext, useContext, useState, useEffect } from 'react';

// Default to false (no subscription) unless found in localStorage
const defaultSubscriptionState = false;

const SubscriptionContext = createContext({
  hasSubscription: defaultSubscriptionState,
  setSubscription: () => {},
  restrictedNodes: [] // List of node numbers that require subscription
});

export const SubscriptionProvider = ({ children, restrictedNodeNumbers = [] }) => {
  const [hasSubscription, setHasSubscription] = useState(defaultSubscriptionState);
  const [restrictedNodes, setRestrictedNodes] = useState(restrictedNodeNumbers);

  // Load subscription state from localStorage on initial render
  useEffect(() => {
    try {
      const storedSubscription = localStorage.getItem('user_subscription');
      if (storedSubscription !== null) {
        setHasSubscription(JSON.parse(storedSubscription));
      }
    } catch (error) {
      console.error('Failed to load subscription state:', error);
    }
  }, []);

  // Save subscription state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('user_subscription', JSON.stringify(hasSubscription));
  }, [hasSubscription]);

  const setSubscription = (value) => {
    setHasSubscription(value);
  };

  return (
    <SubscriptionContext.Provider 
      value={{ 
        hasSubscription, 
        setSubscription, 
        restrictedNodes 
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};