# Accuknox Assignment - Security Dashboard Application

A dynamic, responsive dashboard application built with React and Redux that allows users to manage security widgets across different categories. Users can add, remove, and search widgets dynamically with real-time charts and visual icons.

## 🌐 Live Demo

**🚀 [View Live Application](https://dashboard-dlify0jt6-ad0804s-projects.vercel.app)**

The application is deployed on Vercel and fully functional. You can:
- ✅ Add and remove widgets dynamically
- ✅ Search across all widgets and categories  
- ✅ View interactive charts and data visualizations
- ✅ Experience responsive design on any device

## 🚀 Features

- **Dynamic Widget Management**: Add and remove widgets from different categories
- **Search Functionality**: Search across all widgets by name or content  
- **Interactive Charts**: Real pie charts, bar charts, line charts, and donut charts using MUI X-Charts
- **Visual Icons**: Lucide React icons for enhanced user experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Pre-built Widget Templates**: Quick add functionality with preset widget templates
- **Real-time Updates**: State management with Redux for instant UI updates
- **Modern UI**: Clean, professional interface with smooth animations

## 📋 Categories Included

1. **CSPM Executive Dashboard** - Cloud Security Posture Management
2. **CWPP Dashboard** - Cloud Workload Protection Platform  
3. **Registry Scan** - Container Registry Security

## 🛠️ Technologies Used

- **React** (v18+) - Frontend framework
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux
- **MUI X-Charts** - Professional chart components
- **Lucide React** - Modern icon library
- **CSS3** - Styling and animations

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher) 
- npm package manager

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayush-Dhanesha/Accuknox_Assignment_Frontend.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Accuknox_Assignment_Frontend/dashboard-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - React and React DOM
   - Redux Toolkit and React Redux
   - MUI X-Charts for chart components
   - Lucide React for icons
   - All other dependencies

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to `http://localhost:3000`

## 🎯 How to Use the Dashboard

### Adding Widgets

1. **Click "Add Widget" button** on any category header or click the dashed placeholder box
2. **Browse categories** using the navigation tabs in the modal
3. **Choose from preset widgets** or create custom ones:
   - **Preset Widgets**: Select from available widgets (Compliance Score, Threat Detection, Network Security, etc.)
   - **Custom Widgets**: Click "Create Custom Widget" and enter name and description
4. **Click "Add Widget"** to save to the selected category

### Removing Widgets

1. **Click the X icon** on any widget's top-right corner
2. Widget will be immediately removed from the category
3. Removed widgets become available again in the preset list

### Searching Widgets

1. **Use the search bar** at the top of the dashboard
2. **Type widget names, content, or category names** to filter results
3. **Search works across all categories** and shows only matching widgets
4. **Clear search** by deleting the search term

### Widget Features

- **Interactive Charts**: Each widget displays real charts with data visualization
- **Icons**: Visual icons help identify widget types quickly
- **Responsive Content**: Widget content adapts to different screen sizes
- **Real Data**: Charts show meaningful security metrics and statistics

## 🏗️ Project Structure

```
dashboard-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard.js          # Main dashboard component
│   │   ├── Dashboard.css         # Dashboard styles
│   │   ├── Widget.js             # Individual widget component
│   │   ├── Widget.css            # Widget styles
│   │   ├── AddWidgetModal.js     # Modal for adding widgets
│   │   ├── AddWidgetModal.css    # Modal styles
│   │   ├── SearchBar.js          # Search functionality
│   │   └── SearchBar.css         # Search bar styles
│   ├── store/
│   │   ├── store.js              # Redux store configuration
│   │   └── dashboardSlice.js     # Redux slice for dashboard state
│   ├── data/
│   │   └── initialData.js        # Initial dashboard data and presets
│   ├── App.js                    # Main App component
│   ├── App.css                   # Global styles
│   └── index.js                  # React entry point
├── package.json                  # Dependencies and scripts
├── package-lock.json            # Locked dependency versions
└── README.md                    # This file
```

## 🎨 Key Features Demonstration

### Dynamic JSON Structure

The application uses a flexible JSON structure for categories and widgets:

```javascript
{
  categories: [
    {
      id: "cspm-executive",
      name: "CSPM Executive Dashboard",
      icon: "Shield", 
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          text: "Connected cloud accounts: 2 of 2",
          icon: "Cloud",
          chartType: "donut",
          chartData: [/* chart data */]
        }
      ]
    }
  ]
}
```

### Chart Types Available

- **Pie Charts**: For percentage distributions
- **Donut Charts**: For status indicators with center space
- **Bar Charts**: For comparing categories
- **Line Charts**: For trends over time

### State Management

- **Redux Toolkit** for efficient state management
- **Persistent state** during the session
- **Real-time updates** across all components
- **Undo/Redo capabilities** through Redux

## 🚀 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization Guide

### Adding New Categories

1. Open `src/data/initialData.js`
2. Add new category object to the `categories` array:
   ```javascript
   {
     id: "new-category",
     name: "New Category Name",
     icon: "IconName", // Lucide React icon name
     widgets: []
   }
   ```

### Adding New Preset Widgets

1. Update `availableWidgets` array in `src/data/initialData.js`
2. Include chart data and icon:
   ```javascript
   {
     id: "new-widget",
     name: "Widget Name",
     text: "Widget description",
     icon: "IconName",
     chartType: "pie", // pie, donut, bar, line
     chartData: [/* your data */]
   }
   ```

### Styling Customization

- **Component styles**: Located in respective `.css` files
- **Global styles**: `src/App.css`
- **Color scheme**: Modify CSS custom properties
- **Responsive breakpoints**: Update media queries in CSS files

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process or use a different port
   npm start -- --port 3001
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Application not loading**
   - Check browser console for errors
   - Ensure all dependencies are installed
   - Verify Node.js version (16+)

## � Deployment

### Live Application
The application is successfully deployed on **Vercel** and accessible at:
**https://dashboard-dlify0jt6-ad0804s-projects.vercel.app**

### Deployment Details
- **Platform**: Vercel
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Node.js Version**: 18.x
- **Deployment Type**: Static Site Generation (SSG)
- **Auto-deployment**: Enabled via GitHub integration

### Deploying Your Own Copy

1. **Fork this repository** on GitHub

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your forked repository
   - Vercel will auto-detect it as a React app

3. **Configure settings** (auto-detected):
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

4. **Deploy**: Click "Deploy" and your app will be live!

### Alternative Deployment Platforms

The application can also be deployed on:
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `npm run build` and deploy the build folder
- **Firebase Hosting**: `firebase deploy` after building
- **AWS S3 + CloudFront**: Upload build folder to S3 bucket

## �📄 Assignment Requirements Met

✅ **Dashboard Page Creation**: Complete dashboard with categories and widgets  
✅ **Dynamic JSON Structure**: Flexible data structure for categories and widgets  
✅ **Add/Remove Widgets**: Full CRUD functionality for widget management  
✅ **Search Functionality**: Global search across all widgets and categories  
✅ **React Implementation**: Modern React with hooks and functional components  
✅ **State Management**: Redux Toolkit for predictable state updates  
✅ **Responsive Design**: Mobile-first responsive implementation  
✅ **Real Charts**: Interactive charts using MUI X-Charts library  
✅ **Visual Enhancement**: Icons and professional UI design  

## 🤝 Contributing

This project was created for the Accuknox assignment. For any questions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Developer**: Ayush Dhanesha  
**GitHub**: [https://github.com/Ayush-Dhanesha](https://github.com/Ayush-Dhanesha)  
**Repository**: [Accuknox_Assignment_Frontend](https://github.com/Ayush-Dhanesha/Accuknox_Assignment_Frontend)  
**Live Demo**: [https://dashboard-dlify0jt6-ad0804s-projects.vercel.app](https://dashboard-dlify0jt6-ad0804s-projects.vercel.app)

## 🔗 Quick Links

- 🌐 **[Live Application](https://dashboard-dlify0jt6-ad0804s-projects.vercel.app)** - Try the dashboard now!
- 📱 **[GitHub Repository](https://github.com/Ayush-Dhanesha/Accuknox_Assignment_Frontend)** - View source code
- ⚡ **[Vercel Dashboard](https://vercel.com/ad0804s-projects/dashboard-app)** - Deployment management

---

**Happy Coding! 🎉**

*This dashboard application demonstrates modern React development practices with Redux state management, interactive charts, and responsive design principles. The live demo showcases all features including dynamic widget management, search functionality, and real-time data visualization.*
