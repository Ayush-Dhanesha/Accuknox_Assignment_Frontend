import React from 'react';
import { useDispatch } from 'react-redux';
import { X } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { removeWidget } from '../store/dashboardSlice';
import './Widget.css';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  // Get the icon component from Lucide React
  const getIconComponent = (iconName) => {
    if (!iconName || !LucideIcons[iconName]) {
      return null;
    }
    const IconComponent = LucideIcons[iconName];
    return <IconComponent size={16} className="widget-icon" />;
  };

  const renderChart = () => {
    if (!widget.chartData || widget.chartData.length === 0) {
      return (
        <div className="no-data-chart">
          <div className="no-data-icon">📊</div>
          <span>No Graph data available</span>
        </div>
      );
    }

    const chartProps = {
      width: 280,
      height: 120,
      margin: { top: 5, bottom: 5, left: 5, right: 5 }
    };

    switch (widget.chartType) {
      case 'pie':
        return (
          <PieChart
            series={[{
              data: widget.chartData,
              innerRadius: 15,
              outerRadius: 45,
              paddingAngle: 1,
              cornerRadius: 3,
            }]}
            {...chartProps}
            slotProps={{
              legend: { hidden: true }
            }}
          />
        );
      
      case 'donut':
        return (
          <PieChart
            series={[{
              data: widget.chartData,
              innerRadius: 25,
              outerRadius: 45,
              paddingAngle: 1,
              cornerRadius: 3,
            }]}
            {...chartProps}
            slotProps={{
              legend: { hidden: true }
            }}
          />
        );
      
      case 'bar':
        return (
          <BarChart
            dataset={widget.chartData}
            xAxis={[{ scaleType: 'band', dataKey: 'category' }]}
            series={[{ dataKey: 'value', color: '#4299e1' }]}
            {...chartProps}
            margin={{ top: 10, bottom: 20, left: 20, right: 10 }}
          />
        );
      
      case 'line':
        return (
          <LineChart
            dataset={widget.chartData}
            xAxis={[{ scaleType: 'point', dataKey: 'time' }]}
            series={[{ dataKey: 'value', color: '#4299e1', curve: 'linear' }]}
            {...chartProps}
            margin={{ top: 10, bottom: 20, left: 20, right: 10 }}
          />
        );
      
      default:
        return (
          <div className="default-chart">
            <div className="chart-placeholder">📈</div>
            <span>Chart Visualization</span>
          </div>
        );
    }
  };

  return (
    <div className="widget">
      <div className="widget-header">
        <div className="widget-title-container">
          {widget.icon && getIconComponent(widget.icon)}
          <h4 className="widget-title">{widget.name}</h4>
        </div>
        <button 
          className="widget-remove-btn"
          onClick={handleRemove}
          title="Remove widget"
        >
          <X size={14} />
        </button>
      </div>
      <div className="widget-content">
        <div className="widget-chart-container">
          {renderChart()}
        </div>
        <div className="widget-text-content">
          <p className="widget-text">{widget.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
