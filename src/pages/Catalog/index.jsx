import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { fetchProducts, setFilters } from '../../store/slices/productsSlice';
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
  const { items: products, pagination, filters } = useSelector((state) => state.products);
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
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oVAn8NKESosYKEGyahh3fQHaEo%26pid%3DApi&f=1&ipt=ca550041cf9b4f7d8698d7092c52a8e62a8f9e6f1be83305c2eecb742746832f&ipo=images" alt="" />
    </Container>
  );
};

export default Catalog; 