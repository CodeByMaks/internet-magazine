import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../../store/slices/cartSlice';
import client from '../../api/client';
import Notification from '../../components/Notification';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #6366f1;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #4f46e5;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #1f2937;
  margin: 0 0 1rem 0;
`;

const Price = styled.p`
  color: #6366f1;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
`;

const Description = styled.p`
  color: #4b5563;
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Stars = styled.div`
  display: flex;
  color: #fbbf24;
`;

const RatingCount = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

const Features = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #4b5563;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const AddToCartButton = styled.button`
  flex: 1;
  padding: 1rem;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #4f46e5;
  }
`;

const WishlistButton = styled(AddToCartButton)`
  background-color: #f3f4f6;
  color: #4b5563;

  &:hover {
    background-color: #e5e7eb;
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6b7280;
`;

const Error = styled.div`
  text-align: center;
  padding: 2rem;
  color: #ef4444;
  background: #fee2e2;
  border-radius: 0.5rem;
`;

const SizeSelector = styled.div`
  margin: 1rem 0;
`;

const SizeButton = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: 1px solid ${props => props.selected ? '#6366f1' : '#e5e7eb'};
  background-color: ${props => props.selected ? '#6366f1' : 'white'};
  color: ${props => props.selected ? 'white' : '#4b5563'};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #6366f1;
  }
`;

const ColorSelector = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 0.5rem;
`;

const ColorButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: 2px solid ${props => props.selected ? '#6366f1' : 'transparent'};
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('success');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await client.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Товар не найден');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if ((product.category === 'Одежда' && !selectedSize) || 
        (product.category === 'Обувь' && !selectedSize)) {
      setNotificationMessage('Пожалуйста, выберите размер');
      setNotificationType('error');
      setShowNotification(true);
      return;
    }
    dispatch(addToCart({ 
      ...product, 
      quantity: 1,
      selectedSize,
      selectedColor
    }));
    setNotificationMessage('Товар добавлен в корзину');
    setNotificationType('success');
    setShowNotification(true);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    setNotificationMessage(isWishlisted ? 'Товар удален из избранного' : 'Товар добавлен в избранное');
    setNotificationType('success');
    setShowNotification(true);
  };

  const renderSizeSelector = () => {
    if (product.category !== 'Одежда' && product.category !== 'Обувь') return null;

    const sizes = product.category === 'Обувь' 
      ? ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
      : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return (
      <SizeSelector>
        <h4>Размер:</h4>
        <div>
          {sizes.map(size => (
            <SizeButton
              key={size}
              selected={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeButton>
          ))}
        </div>
      </SizeSelector>
    );
  };

  const renderDetails = () => {
    if (!product.details) return null;

    return (
      <Features>
        <h3>Характеристики:</h3>
        {Object.entries(product.details).map(([key, value]) => (
          <FeatureItem key={key}>
            <FaStar color="#6366f1" size={14} />
            <strong>{key}:</strong>{' '}
            {Array.isArray(value) ? value.join(', ') : value}
          </FeatureItem>
        ))}
      </Features>
    );
  };

  const renderStockInfo = () => {
    return (
      <div style={{ margin: '1rem 0', color: product.stock > 0 ? '#10B981' : '#EF4444' }}>
        {product.stock > 0 
          ? `В наличии: ${product.stock} шт.`
          : 'Нет в наличии'}
      </div>
    );
  };

  if (loading) {
    return (
      <Container>
        <Loading>Загрузка товара...</Loading>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Error>{error}</Error>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Назад</BackButton>
      <Content>
        <Image src={product.image} alt={product.name} />
        <Info>
          <Title>{product.name}</Title>
          <Rating>
            <Stars>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < Math.round(product.rating) ? '#fbbf24' : '#e5e7eb'}
                />
              ))}
            </Stars>
            <RatingCount>({product.rating})</RatingCount>
          </Rating>
          <Price>{product.price.toLocaleString('ru-RU')} ₽</Price>
          {renderStockInfo()}
          <Description>{product.description}</Description>

          {renderSizeSelector()}
          {renderDetails()}

          <ButtonsContainer>
            <AddToCartButton 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <FaShoppingCart />
              {product.stock > 0 ? 'Добавить в корзину' : 'Нет в наличии'}
            </AddToCartButton>
            <WishlistButton onClick={handleWishlist}>
              <FaHeart color={isWishlisted ? '#ef4444' : '#6b7280'} />
              {isWishlisted ? 'В избранном' : 'В избранное'}
            </WishlistButton>
          </ButtonsContainer>
        </Info>
      </Content>
      {showNotification && (
        <Notification 
          message={notificationMessage} 
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}
    </Container>
  );
};

export default ProductDetails; 