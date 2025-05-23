import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: linear-gradient(90deg, #1f2937, #4b5563);
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #f3f4f6;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  &:hover {
    color: #f3f4f6;
  }

  &.active {
    color: #f3f4f6;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background: #e53e3e;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
`;

const Main = styled.main`
  flex: 1;
  background-color: #f3f4f6;
`;

const Footer = styled.footer`
  background-color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  color: #6b7280;
`;

const Layout = () => {
  const location = useLocation();
  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemsCount = wishlistItems.length;

  return (
    <Container>
      <Header>
        <Nav>
          <Logo to="/">Интернет-магазин</Logo>
          <NavLinks>
            <NavLink to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
              <FaShoppingCart />
              {cartItemsCount > 0 && <Badge>{cartItemsCount}</Badge>}
            </NavLink>
            <NavLink to="/wishlist" className={location.pathname === '/wishlist' ? 'active' : ''}>
              <FaHeart />
              {wishlistItemsCount > 0 && <Badge>{wishlistItemsCount}</Badge>}
            </NavLink>
            <NavLink to={isAuthenticated ? '/profile' : '/auth'} className={location.pathname === '/profile' || location.pathname === '/auth' ? 'active' : ''}>
              <FaUser />
            </NavLink>
          </NavLinks>
        </Nav>
      </Header>

      <Main>
        <Outlet />
      </Main>

      <Footer>
        <FooterContent>
          <p>© 2024 Интернет-магазин. Все права защищены.</p>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Layout; 