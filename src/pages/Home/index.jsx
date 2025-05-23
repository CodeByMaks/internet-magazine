import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 1rem;
  color: white;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: white;
  color: #6366f1;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Feature = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <Hero>
        <Title>Добро пожаловать в наш магазин</Title>
        <Subtitle>
          Откройте для себя широкий ассортимент качественных товаров
        </Subtitle>
        <Button to="/catalog">Перейти в каталог</Button>
      </Hero>

      <Features>
        <Feature>
          <h3>Быстрая доставка</h3>
          <p>Доставляем заказы в любую точку страны</p>
        </Feature>
        <Feature>
          <h3>Гарантия качества</h3>
          <p>Все товары проходят тщательную проверку</p>
        </Feature>
        <Feature>
          <h3>Поддержка 24/7</h3>
          <p>Наши специалисты всегда готовы помочь</p>
        </Feature>
      </Features>
    </Container>
  );
};

export default Home; 