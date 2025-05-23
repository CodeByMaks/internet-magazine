import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: #fee2e2;
  border: 1px solid #ef4444;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  color: #991b1b;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ErrorMessage = ({ message }) => {
  return (
    <ErrorContainer>
      {message || 'Произошла ошибка. Пожалуйста, попробуйте позже.'}
    </ErrorContainer>
  );
};

export default ErrorMessage; 