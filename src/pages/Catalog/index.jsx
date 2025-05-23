import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { fetchProducts, setFilters } from '../../store/slices/productsSlice';
import ProductCard from '../../components/ProductCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import debounce from 'lodash/debounce';

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SearchInput = styled.div`
  flex: 1;
  min-width: 300px;
  position: relative;

  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #6366f1;
    }
  }

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #718096;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  background: white;
  border-radius: 8px;
  margin-top: 2rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background: ${props => props.active ? '#6366f1' : 'white'};
  color: ${props => props.active ? 'white' : '#1f2937'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${props => props.active ? '#6366f1' : '#f3f4f6'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const categories = [
  { value: "", label: "Все категории" },
  { value: "Электроника", label: "Электроника" },
  { value: "Одежда", label: "Одежда" },
  { value: "Книги", label: "Книги" },
  { value: "Обувь", label: "Обувь" },
  { value: "Аксессуары", label: "Аксессуары" },
  { value: "Игрушки", label: "Игрушки" }
];

const Catalog = () => {
  const dispatch = useDispatch();
  const { items: products, status, error, pagination, filters } = useSelector((state) => state.products);
  const [sortBy, setSortBy] = useState('name');
  const [category, setCategory] = useState(filters.category || 'all');
  const searchInputRef = useRef(null);
  const searchValueRef = useRef(filters.search || '');

  const debouncedSearch = useCallback(
    debounce((value) => {
      dispatch(setFilters({ search: value }));
      dispatch(fetchProducts({
        page: 1,
        limit: pagination.itemsPerPage,
        category: category !== 'all' ? category : null,
        search: value || null
      }));
    }, 500),
    [dispatch, category, pagination.itemsPerPage]
  );

  useEffect(() => {
    dispatch(fetchProducts({
      page: pagination.currentPage,
      limit: pagination.itemsPerPage,
      category: category !== 'all' ? category : null,
      search: searchValueRef.current || null
    }));
  }, [dispatch, pagination.currentPage, category]);

  const handleSearch = (e) => {
    const value = e.target.value;
    searchValueRef.current = value;
    if (searchInputRef.current) {
      searchInputRef.current.value = value;
    }
    debouncedSearch(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    dispatch(setFilters({ category: value }));
  };

  const handlePageChange = (page) => {
    dispatch(fetchProducts({
      page,
      limit: pagination.itemsPerPage,
      category: category !== 'all' ? category : null,
      search: searchValueRef.current || null
    }));
  };

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [products, sortBy]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'failed') {
    return <ErrorMessage message={error || 'Произошла ошибка при загрузке товаров'} />;
  }

  return (
    <Container>
      <h1>Каталог товаров</h1>
      <Filters>
        <SearchInput>
          <FaSearch />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Поиск товаров..."
            defaultValue={filters.search || ''}
            onChange={handleSearch}
          />
        </SearchInput>
        <Select value={category} onChange={handleCategoryChange}>
          {categories.map(cat => (
            <option key={cat.value} value={cat.value}>{cat.label}</option>
          ))}
        </Select>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">По названию</option>
          <option value="price-asc">По возрастанию цены</option>
          <option value="price-desc">По убыванию цены</option>
        </Select>
      </Filters>

      {sortedProducts.length === 0 ? (
        <NoProducts>
          <h3>Товары не найдены</h3>
          <p>Попробуйте изменить параметры поиска</p>
        </NoProducts>
      ) : (
        <>
          <ProductsGrid>
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductsGrid>

          <Pagination>
            <PageButton
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
            >
              Назад
            </PageButton>
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
              <PageButton
                key={page}
                active={page === pagination.currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PageButton>
            ))}
            <PageButton
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages}
            >
              Вперед
            </PageButton>
          </Pagination>
        </>
      )}
    </Container>
  );
};

export default Catalog; 