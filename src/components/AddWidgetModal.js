import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, Trash2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { addWidget, removeWidget } from '../store/dashboardSlice';
import './AddWidgetModal.css';

const AddWidgetModal = ({ isOpen, onClose, categoryId }) => {
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryId || 'cspm-executive');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customWidgetName, setCustomWidgetName] = useState('');
  const [customWidgetText, setCustomWidgetText] = useState('');
  
  const dispatch = useDispatch();
  const { categories, availableWidgets } = useSelector(state => state.dashboard);

  // Update activeCategory when categoryId prop changes
  useEffect(() => {
    if (categoryId && isOpen) {
      setActiveCategory(categoryId);
      setSelectedWidgets([]);
      setShowCustomForm(false);
      setCustomWidgetName('');
      setCustomWidgetText('');
    }
  }, [categoryId, isOpen]);

  // Get the icon component from Lucide React
  const getIconComponent = (iconName, size = 16) => {
    if (!iconName || !LucideIcons[iconName]) {
      return null;
    }
    const IconComponent = LucideIcons[iconName];
    return <IconComponent size={size} className="widget-list-icon" />;
  };

  const handleWidgetToggle = (widget) => {
    setSelectedWidgets(prev => {
      const isSelected = prev.some(w => w.id === widget.id);
      if (isSelected) {
        return prev.filter(w => w.id !== widget.id);
      } else {
        return [...prev, widget];
      }
    });
  };

  const handleRemoveFromCategory = (widgetId) => {
    dispatch(removeWidget({ categoryId: activeCategory, widgetId }));
  };

  const handleConfirm = () => {
    // Add selected preset widgets (only if not already in category)
    const currentCategory = categories.find(cat => cat.id === activeCategory);
    const existingWidgetNames = currentCategory ? currentCategory.widgets.map(w => w.name.toLowerCase()) : [];

    selectedWidgets.forEach(widget => {
      // Check if widget with same name already exists in category
      if (!existingWidgetNames.includes(widget.name.toLowerCase())) {
        dispatch(addWidget({ 
          categoryId: activeCategory, 
          widget: {
            name: widget.name,
            text: widget.text,
            chartType: widget.chartType || 'default',
            chartData: widget.chartData || []
          }
        }));
      }
    });

    // Add custom widget if form is filled (only if name doesn't exist)
    if (showCustomForm && customWidgetName.trim() && customWidgetText.trim()) {
      if (!existingWidgetNames.includes(customWidgetName.trim().toLowerCase())) {
        dispatch(addWidget({
          categoryId: activeCategory,
          widget: {
            name: customWidgetName.trim(),
            text: customWidgetText.trim(),
            chartType: 'default',
            chartData: []
          }
        }));
      }
    }
    
    handleCancel();
  };

  const handleCancel = () => {
    setSelectedWidgets([]);
    setShowCustomForm(false);
    setCustomWidgetName('');
    setCustomWidgetText('');
    onClose();
  };

  if (!isOpen) return null;

  const currentCategory = categories.find(cat => cat.id === activeCategory);
  const currentWidgets = currentCategory ? currentCategory.widgets : [];

  // Filter available widgets to show only those not already in current category
  const availableWidgetsFiltered = availableWidgets.filter(widget => {
    const existingNames = currentWidgets.map(w => w.name.toLowerCase());
    return !existingNames.includes(widget.name.toLowerCase());
  });

  const hasValidCustomWidget = customWidgetName.trim() && 
    customWidgetText.trim() && 
    !currentWidgets.some(w => w.name.toLowerCase() === customWidgetName.trim().toLowerCase());
  
  const canConfirm = selectedWidgets.length > 0 || hasValidCustomWidget;

  return (
    <div className="modal-overlay-fullscreen">
      <div className="modal-content-fullscreen">
        <div className="modal-header-fullscreen">
          <h2>Add Widget</h2>
          <button className="close-btn-fullscreen" onClick={handleCancel}>
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-body-fullscreen">
          <div className="sidebar">
            <nav className="category-nav">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-nav-item ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="main-content">
            <div className="content-header">
              <h3>Personalise your dashboard by adding the following widget</h3>
            </div>

            {/* Current Widgets in Category */}
            {currentWidgets.length > 0 && (
              <div className="current-widgets-section">
                <h4>Current Widgets in {currentCategory?.name}:</h4>
                <div className="current-widgets-list">
                  {currentWidgets.map(widget => (
                    <div key={widget.id} className="current-widget-item">
                      <div className="current-widget-content">
                        {widget.icon && getIconComponent(widget.icon)}
                        <span className="current-widget-name">{widget.name}</span>
                      </div>
                      <button 
                        className="remove-widget-btn"
                        onClick={() => handleRemoveFromCategory(widget.id)}
                        title="Remove from category"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preset Widgets Section */}
            <div className="preset-widgets-section">
              <h4>Select from Available Widgets:</h4>
              {availableWidgetsFiltered.length > 0 ? (
                <div className="widget-selection-list">
                  {availableWidgetsFiltered.map(widget => {
                    const isSelected = selectedWidgets.some(w => w.id === widget.id);
                    return (
                      <label key={widget.id} className="widget-checkbox-item">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleWidgetToggle(widget)}
                          className="widget-checkbox"
                        />
                        <div className="widget-checkbox-content">
                          {widget.icon && getIconComponent(widget.icon)}
                          <span className="widget-checkbox-label">{widget.name}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              ) : (
                <div className="no-available-widgets">
                  <p>All available widgets are already added to this category.</p>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="section-divider">
              <span>OR</span>
            </div>

            {/* Custom Widget Section */}
            <div className="custom-widget-section">
              <div className="section-header">
                <h4>Create Custom Widget:</h4>
                <button 
                  className={`toggle-custom-btn ${showCustomForm ? 'active' : ''}`}
                  onClick={() => setShowCustomForm(!showCustomForm)}
                >
                  {showCustomForm ? 'Hide Form' : 'Create Custom'}
                </button>
              </div>
              
              {showCustomForm && (
                <div className="custom-widget-form">
                  <div className="form-group">
                    <label htmlFor="customWidgetName">Widget Name:</label>
                    <input
                      id="customWidgetName"
                      type="text"
                      value={customWidgetName}
                      onChange={(e) => setCustomWidgetName(e.target.value)}
                      placeholder="Enter widget name"
                      className="form-input"
                    />
                    {customWidgetName.trim() && currentWidgets.some(w => w.name.toLowerCase() === customWidgetName.trim().toLowerCase()) && (
                      <span className="validation-error">Widget with this name already exists in this category</span>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="customWidgetText">Widget Text:</label>
                    <textarea
                      id="customWidgetText"
                      value={customWidgetText}
                      onChange={(e) => setCustomWidgetText(e.target.value)}
                      placeholder="Enter widget content"
                      rows={3}
                      className="form-textarea"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="modal-footer-fullscreen">
          <button className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button 
            className="btn-confirm" 
            onClick={handleConfirm}
            disabled={!canConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
