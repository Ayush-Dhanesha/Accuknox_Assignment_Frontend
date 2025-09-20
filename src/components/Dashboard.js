import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Plus } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import SearchBar from './SearchBar';
import './Dashboard.css';

const Dashboard = () => {
  const [activeModal, setActiveModal] = useState(null);
  const { categories, searchQuery } = useSelector(state => state.dashboard);

  // Get the icon component from Lucide React
  const getIconComponent = (iconName) => {
    if (!iconName || !LucideIcons[iconName]) {
      return null;
    }
    const IconComponent = LucideIcons[iconName];
    return <IconComponent size={18} className="category-icon" />;
  };

  // Filter widgets based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categories;
    }

    const query = searchQuery.toLowerCase();
    return categories.map(category => ({
      ...category,
      widgets: category.widgets.filter(widget => 
        widget.name.toLowerCase().includes(query) ||
        widget.text.toLowerCase().includes(query) ||
        category.name.toLowerCase().includes(query)
      )
    })).filter(category => category.widgets.length > 0);
  }, [categories, searchQuery]);

  // Get all widgets for search results count
  const allWidgets = useMemo(() => {
    return categories.flatMap(category => category.widgets);
  }, [categories]);

  const totalSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    const query = searchQuery.toLowerCase();
    return allWidgets.filter(widget =>
      widget.name.toLowerCase().includes(query) ||
      widget.text.toLowerCase().includes(query) ||
      categories.find(cat => cat.id === widget.category)?.name.toLowerCase().includes(query)
    ).length;
  }, [allWidgets, searchQuery, categories]);

  const openAddModal = (categoryId) => {
    setActiveModal(categoryId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">CNAPP Dashboard</h1>
          <p className="dashboard-subtitle">
            Monitor your cloud native application security posture
          </p>
        </div>
        <SearchBar />
      </div>

      {searchQuery && (
        <div className="search-results-info">
          <p>
            {totalSearchResults} widget(s) found for "{searchQuery}"
            {totalSearchResults > 0 && (
              <span className="search-results-detail">
                {' '}across {filteredCategories.length} categor{filteredCategories.length === 1 ? 'y' : 'ies'}
              </span>
            )}
          </p>
        </div>
      )}

      <div className="dashboard-content">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <div key={category.id} className="category-section">
              <div className="category-header">
                <div className="category-title-container">
                  {category.icon && getIconComponent(category.icon)}
                  <h2 className="category-title">{category.name}</h2>
                </div>
                <button 
                  className="add-widget-btn"
                  onClick={() => openAddModal(category.id)}
                  title="Add widget to this category"
                >
                  <Plus size={16} />
                  Add Widget
                </button>
              </div>
              
              <div className="widgets-grid">
                {category.widgets.map(widget => (
                  <div key={widget.id} className="widget-container">
                    <Widget 
                      widget={widget} 
                      categoryId={category.id}
                    />
                  </div>
                ))}
                
                {/* Add Widget Placeholder */}
                <div className="widget-container">
                  <div 
                    className="add-widget-placeholder"
                    onClick={() => openAddModal(category.id)}
                  >
                    <Plus size={24} />
                    <span>Add Widget</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No widgets found matching your search criteria.</p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-secondary"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      <AddWidgetModal 
        isOpen={activeModal !== null}
        onClose={closeModal}
        categoryId={activeModal}
      />
    </div>
  );
};

export default Dashboard;
