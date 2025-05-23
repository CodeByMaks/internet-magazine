import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #1f2937;
  margin-bottom: 2rem;
`;

const AdminPanel = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/auth" replace />;
  }

  return (
    <Container>
      <Title>Панель администратора</Title>
      {/* Здесь будет содержимое админ-панели */}
    </Container>
  );
};

export default AdminPanel; 