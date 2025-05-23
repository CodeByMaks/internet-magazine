import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #666;
  font-size: 0.9rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: #333;
  height: 2.4em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.8em;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #f1c40f;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &.primary {
    background: #3498db;
    color: white;

    &:hover {
      background: #2980b9;
    }
  }

  &.secondary {
    background: #e74c3c;
    color: white;

    &:hover {
      background: #c0392b;
    }
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ProductCard = ({ product, onAddToCart, onAddToWishlist, onImageError }) => {
  const { name, price, image, stock } = product;

  return (
    <Card>
      <ImageContainer>
        <Image
          src={image}
          alt={name}
          onError={onImageError}
        />
      </ImageContainer>
      <Content>
        <Title>{name}</Title>
        <Price>{price.toLocaleString('ru-RU')} ₽</Price>
        <Description>{product.description || 'Нет описания'}</Description>
        <Rating>
          {'★'.repeat(Math.floor(product.rating || 0))}
          {'☆'.repeat(5 - Math.floor(product.rating || 0))}
          <span style={{ marginLeft: '0.5rem', color: '#666' }}>
            ({product.rating || 0})
          </span>
        </Rating>
        <Actions>
          <Button
            className="primary"
            onClick={() => onAddToCart(product)}
            disabled={!stock}
          >
            <FaShoppingCart />
            {stock ? 'В корзину' : 'Нет в наличии'}
          </Button>
          <Button
            className="secondary"
            onClick={() => onAddToWishlist(product)}
          >
            <FaHeart />
            В избранное
          </Button>
        </Actions>
      </Content>
    </Card>
  );
};

export default ProductCard; 