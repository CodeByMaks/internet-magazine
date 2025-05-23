import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { addToCart } from '../../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../store/slices/wishlistSlice';

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #f3f4f6;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.1rem;
`;

const Price = styled.p`
  color: #6366f1;
  font-weight: 600;
  margin: 0 0 1rem 0;
`;

const Button = styled.button`
  width: 100%;
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

const WishlistButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  color: ${props => props.$active ? '#e53e3e' : '#718096'};

  &:hover {
    transform: scale(1.1);
    color: #e53e3e;
  }
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <Image
          src={imageError ? 'https://picsum.photos/300/300' : product.image}
          alt={product.name}
          onError={handleImageError}
        />
      </Link>
      <WishlistButton
        onClick={handleWishlist}
        $active={isInWishlist}
        aria-label={isInWishlist ? 'Удалить из избранного' : 'Добавить в избранное'}
      >
        <FaHeart />
      </WishlistButton>
      <Content>
        <Link to={`/product/${product.id}`}>
          <Title>{product.name}</Title>
        </Link>
        <Price>{product.price.toLocaleString('ru-RU')} ₽</Price>
        <Button onClick={handleAddToCart}>В корзину</Button>
      </Content>
    </Card>
  );
};

export default ProductCard; 