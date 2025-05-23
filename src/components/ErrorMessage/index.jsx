import React from 'react';
import styled from 'styled-components';
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorContainer = styled.div`
  background-color: #fee2e2;
  border: 1px solid #ef4444;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ErrorIcon = styled(FaExclamationCircle)`
  color: #ef4444;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ErrorText = styled.p`
  color: #991b1b;
  margin: 0;
  font-size: 1rem;
`;

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorText>{message}</ErrorText>
    </ErrorContainer>
  );
};

export default ErrorMessage; 