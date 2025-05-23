import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #1f2937;
`;

const Price = styled.p`
  color: #6366f1;
  font-weight: 600;
  margin: 0;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 2rem;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #4b5563;

  &:hover {
    background: #f3f4f6;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  padding: 0.25rem;
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #dc2626;
  }
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <Container>
      <Image src={item.image} alt={item.title} />
      <Info>
        <Title>{item.title}</Title>
        <Price>{item.price} ₽</Price>
      </Info>
      <Quantity>
        <QuantityButton onClick={handleDecrement}>-</QuantityButton>
        <QuantityInput
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <QuantityButton onClick={handleIncrement}>+</QuantityButton>
      </Quantity>
      <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
        Удалить
      </RemoveButton>
    </Container>
  );
};

export default CartItem; 