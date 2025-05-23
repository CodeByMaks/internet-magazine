import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { login, register } from '../../store/slices/authSlice';
import client from '../../api/client';
import Notification from '../../components/Notification';

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4f46e5;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #6366f1;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        const response = await client.post('/auth/login', {
          email: formData.email,
          password: formData.password,
        });
        dispatch(login(response.data));
        
        // Перенаправление после входа
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      } else {
        const response = await client.post('/auth/register', {
          ...formData,
          role: 'user' // По умолчанию все новые пользователи получают роль user
        });
        dispatch(register(response.data));
        navigate('/');
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Произошла ошибка при авторизации'
      );
    }
  };

  return (
    <Container>
      <Title>{isLogin ? 'Вход' : 'Регистрация'}</Title>
      <Form onSubmit={handleSubmit}>
        {!isLogin && (
          <Input
            type="text"
            name="username"
            placeholder="Имя пользователя"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">
          {isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </Form>
      <ToggleButton
        type="button"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? 'Нет аккаунта? Зарегистрируйтесь'
          : 'Уже есть аккаунт? Войдите'}
      </ToggleButton>
      {error && <Notification message={error} type="error" />}
    </Container>
  );
};

export default Auth; 