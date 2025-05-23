import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Notification = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [onClose]);

  return (
    <Container style={{ backgroundColor: type === 'error' ? '#f44336' : '#4CAF50' }}>
      {message}
    </Container>
  );
};

export default Notification; 