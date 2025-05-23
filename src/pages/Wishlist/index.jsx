import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
import { removeFromWishlist } from '../../store/slices/wishlistSlice';
import { addToCart } from '../../store/slices/cartSlice';

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
`;

const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const WishlistItem = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ItemContent = styled.div`
  padding: 1rem;
`;

const ItemTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: #333;
`;

const ItemPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
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

  &.danger {
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

const EmptyWishlist = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const Wishlist = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    dispatch(removeFromWishlist(product.id));
  };

  if (!items.length) {
    return (
      <Container>
        <EmptyWishlist>
          <h2>Избранное пусто</h2>
          <p>Добавьте товары в избранное, чтобы вернуться к ним позже</p>
        </EmptyWishlist>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Избранное</h1>
      <WishlistGrid>
        {items.map((item) => (
          <WishlistItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemContent>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemPrice>{item.price.toLocaleString('ru-RU')} ₽</ItemPrice>
              <ItemActions>
                <ActionButton
                  className="primary"
                  onClick={() => handleAddToCart(item)}
                  disabled={!item.stock}
                >
                  <FaShoppingCart />
                  {item.stock ? 'В корзину' : 'Нет в наличии'}
                </ActionButton>
                <ActionButton
                  className="danger"
                  onClick={() => handleRemove(item.id)}
                >
                  <FaTrash />
                  Удалить
                </ActionButton>
              </ItemActions>
            </ItemContent>
          </WishlistItem>
        ))}
      </WishlistGrid>
    </Container>
  );
};

export default Wishlist; 