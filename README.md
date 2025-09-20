# Security Dashboard Application

A dynamic, responsive dashboard application built with React and Redux that allows users to manage security widgets across different categories. Users can add, remove, and search widgets dynamically.

## 🚀 Features

- **Dynamic Widget Management**: Add and remove widgets from different categories
- **Search Functionality**: Search across all widgets by name or content
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
- **Lucide React** - Modern icon library
- **CSS3** - Styling and animations

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Step-by-Step Installation

1. **Clone or Download the project**
   ```bash
   # If you have git access
   git clone <repository-url>
   
   # Or extract the provided zip file
   ```

2. **Navigate to the project directory**
   ```bash
   cd Accuknox_Assignment_Frontend/dashboard-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to `http://localhost:3000`

## 🎯 How to Use

### Adding Widgets

1. **Click "Add Widget" button** on any category header or click the dashed placeholder box
2. **Choose from preset widgets** or create custom ones:
   - Select from available preset widgets (Compliance Score, Threat Detection, etc.)
   - OR manually enter widget name and content
3. **Click "Add Widget"** to save

### Removing Widgets

1. **Click the X icon** on any widget's top-right corner
2. Widget will be immediately removed from the category

### Searching Widgets

1. **Use the search bar** at the top of the dashboard
2. **Type widget names or content** to filter results
3. **Search works across all categories** and shows matching widgets only

### Widget Content

- Each widget displays random security-related text content
- Widget content includes metrics, alerts, and status information
- Content is designed to simulate real security dashboard data

## 🏗️ Project Structure

```
dashboard-app/
├── public/
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
├── package.json
└── README.md
```

## 🎨 Features Demonstration

### Dynamic JSON Structure

The application uses a flexible JSON structure for categories and widgets:

```javascript
{
  categories: [
    {
      id: "cspm-executive",
      name: "CSPM Executive Dashboard", 
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          text: "Widget content...",
          category: "cspm-executive"
        }
      ]
    }
  ]
}
```

### State Management

- **Redux Toolkit** for efficient state management
- **Persistent state** during the session
- **Real-time updates** across all components

### Responsive Design

- **Mobile-first approach** with responsive grid
- **Flexible layouts** that adapt to different screen sizes
- **Touch-friendly** interface for mobile devices

## 🚀 Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.

## 🧪 Running Tests

```bash
npm test
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Development Notes

- **Component-based architecture** for reusability
- **CSS modules approach** for style isolation
- **Semantic HTML** for accessibility
- **Modern JavaScript (ES6+)** features used throughout

## 🔧 Customization

### Adding New Categories

1. Modify `src/data/initialData.js`
2. Add new category object to the categories array
3. Include initial widgets if needed

### Adding New Preset Widgets

1. Update `availableWidgets` array in `src/data/initialData.js`
2. New presets will automatically appear in the Add Widget modal

### Styling Changes

- Component-specific styles are in their respective CSS files
- Global styles are in `src/App.css`
- Color scheme and typography can be easily modified

## 📄 License

This project is created for assignment purposes.

---

**Happy Coding! 🎉**

For any issues or questions, please refer to the component documentation or check the browser console for error messages.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
