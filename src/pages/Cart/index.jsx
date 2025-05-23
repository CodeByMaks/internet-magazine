import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaTrash, FaUndo, FaShoppingCart } from 'react-icons/fa';
import { removeFromCart, updateQuantity, clearCart, undoLastAction } from '../../store/slices/cartSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import CartItem from '../../components/CartItem';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 2rem;
`;

const CartList = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  font-weight: 500;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

const QuantityButton = styled.button`
  background: #f3f4f6;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  &:hover {
    background: #e5e7eb;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 0.25rem;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  padding: 0.5rem;
  &:hover {
    color: #dc2626;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #4b5563;
`;

const TotalRow = styled(SummaryRow)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  border-top: 2px solid #e5e7eb;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CheckoutButton = styled(Button)`
  background: #10b981;
  color: white;
  border: none;
  &:hover:not(:disabled) {
    background: #059669;
  }
`;

const ClearButton = styled(Button)`
  background: #ef4444;
  color: white;
  border: none;
  &:hover:not(:disabled) {
    background: #dc2626;
  }
`;

const UndoButton = styled(Button)`
  background: #6b7280;
  color: white;
  border: none;
  &:hover:not(:disabled) {
    background: #4b5563;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total, lastAction } = useSelector(state => state.cart);
  const [isConfirmingClear, setIsConfirmingClear] = useState(false);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    if (!isConfirmingClear) {
      setIsConfirmingClear(true);
      return;
    }
    dispatch(clearCart());
    setIsConfirmingClear(false);
  };

  const handleUndo = () => {
    dispatch(undoLastAction());
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <Container>
        <EmptyCart>
          <FaShoppingCart size={48} />
          <h2>Ваша корзина пуста</h2>
          <p>Добавьте товары в корзину, чтобы продолжить покупки</p>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Корзина</Title>
      <CartList>
        {items.map(item => (
          <CartItemWrapper key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price.toLocaleString()} ₽</ItemPrice>
              <QuantityControl>
                <QuantityButton
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </QuantityButton>
                <QuantityInput
                  type="number"
                  min="1"
                  max={item.stock || 99}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                />
                <QuantityButton
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  disabled={item.quantity >= (item.stock || 99)}
                >
                  +
                </QuantityButton>
              </QuantityControl>
            </ItemDetails>
            <RemoveButton onClick={() => handleRemoveItem(item.id)}>
              <FaTrash />
            </RemoveButton>
          </CartItemWrapper>
        ))}
      </CartList>

      <CartSummary>
        <SummaryRow>
          <span>Товары ({items.length})</span>
          <span>{total.toLocaleString()} ₽</span>
        </SummaryRow>
        <TotalRow>
          <span>Итого</span>
          <span>{total.toLocaleString()} ₽</span>
        </TotalRow>

        <ActionButtons>
          <CheckoutButton onClick={handleCheckout}>
            Оформить заказ
          </CheckoutButton>
          <ClearButton onClick={handleClearCart}>
            {isConfirmingClear ? 'Подтвердить очистку' : 'Очистить корзину'}
          </ClearButton>
          {lastAction && (
            <UndoButton onClick={handleUndo}>
              <FaUndo /> Отменить последнее действие
            </UndoButton>
          )}
        </ActionButtons>
      </CartSummary>
    </Container>
  );
};

export default Cart; 