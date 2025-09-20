import { createSlice } from '@reduxjs/toolkit';
import { initialDashboardData, availableWidgets } from '../data/initialData';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    categories: initialDashboardData.categories,
    availableWidgets: availableWidgets,
    searchQuery: ''
  },
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        const newWidget = {
          ...widget,
          id: `widget-${Date.now()}`,
          category: categoryId
        };
        category.widgets.push(newWidget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addCategory: (state, action) => {
      const newCategory = {
        id: `category-${Date.now()}`,
        name: action.payload.name,
        widgets: []
      };
      state.categories.push(newCategory);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(cat => cat.id !== action.payload);
    }
  }
});

export const { 
  addWidget, 
  removeWidget, 
  updateSearchQuery, 
  addCategory, 
  removeCategory 
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
