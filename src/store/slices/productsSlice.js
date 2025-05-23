import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../api/client';

const ITEMS_PER_PAGE = 10;

// Моковые данные для использования при ошибке загрузки
const mockProducts = [
  {
    id: 1,
    name: "Смартфон iPhone 13",
    description: "Новейший смартфон от Apple с отличной камерой и производительностью",
    price: 79990,
    category: "Электроника",
    image: "https://via.placeholder.com/300",
    stock: 10,
    rating: 4.8
  },
  {
    id: 2,
    name: "Ноутбук MacBook Pro",
    description: "Мощный ноутбук для профессионалов",
    price: 129990,
    category: "Электроника",
    image: "https://via.placeholder.com/300",
    stock: 5,
    rating: 4.9
  },
  {
    id: 3,
    name: "Футболка хлопковая",
    description: "Комфортная хлопковая футболка",
    price: 1990,
    category: "Одежда",
    image: "https://via.placeholder.com/300",
    stock: 50,
    rating: 4.5
  }
];

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page = 1, limit = ITEMS_PER_PAGE, category = null, search = null }, { rejectWithValue }) => {
    try {
      console.log('Начинаем загрузку продуктов...', { page, limit, category, search });
      
      // Сначала получаем все продукты для подсчета общего количества
      const allProductsResponse = await client.get('/products');
      const allProducts = allProductsResponse.data;
      
      // Фильтруем продукты на клиенте
      let filteredProducts = allProducts;
      if (category && category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
      }
      if (search) {
        const searchLower = search.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
          p.name.toLowerCase().includes(searchLower) || 
          p.description.toLowerCase().includes(searchLower)
        );
      }
      
      // Применяем пагинацию
      const startIndex = (page - 1) * limit;
      const paginatedProducts = filteredProducts.slice(startIndex, startIndex + limit);
      
      console.log('Обработанные продукты:', {
        total: filteredProducts.length,
        page,
        limit,
        items: paginatedProducts
      });

      return {
        items: paginatedProducts,
        currentPage: page,
        totalPages: Math.ceil(filteredProducts.length / limit),
        totalItems: filteredProducts.length,
        itemsPerPage: limit
      };
    } catch (error) {
      console.error('Ошибка при загрузке продуктов:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { products } = getState();
      if (products.status === 'loading') {
        return false;
      }
      return true;
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await client.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    selectedProduct: null,
    status: 'idle',
    error: null,
    isUsingMockData: false,
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: ITEMS_PER_PAGE
    },
    filters: {
      category: null,
      search: null
    }
  },
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload
      };
      state.pagination.currentPage = 1; // Сбрасываем страницу при изменении фильтров
    },
    clearFilters: (state) => {
      state.filters = {
        category: null,
        search: null
      };
      state.pagination.currentPage = 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
          itemsPerPage: action.payload.itemsPerPage
        };
        state.isUsingMockData = false;
        console.log('Продукты успешно загружены:', action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isUsingMockData = true;
        state.items = mockProducts;
        state.pagination = {
          currentPage: 1,
          totalPages: 1,
          totalItems: mockProducts.length,
          itemsPerPage: ITEMS_PER_PAGE
        };
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.selectedProduct = mockProducts.find(p => p.id === parseInt(action.meta.arg)) || null;
      });
  }
});

export const { clearSelectedProduct, setFilters, clearFilters } = productsSlice.actions;

export default productsSlice.reducer; 