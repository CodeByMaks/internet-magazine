import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../store/slices/authSlice';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  color: #1f2937;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #1f2937;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const Label = styled.span`
  color: #6b7280;
`;

const Value = styled.span`
  color: #1f2937;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }
`;

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Container>
      <Title>Профиль</Title>
      <Card>
        <Section>
          <SectionTitle>Личная информация</SectionTitle>
          <Info>
            <Label>Имя:</Label>
            <Value>{user?.name || 'Не указано'}</Value>
          </Info>
          <Info>
            <Label>Email:</Label>
            <Value>{user?.email || 'Не указан'}</Value>
          </Info>
        </Section>

        <Section>
          <SectionTitle>История заказов</SectionTitle>
          <p>У вас пока нет заказов</p>
        </Section>

        <Button onClick={handleLogout}>Выйти</Button>
      </Card>
    </Container>
  );
};

export default Profile; 