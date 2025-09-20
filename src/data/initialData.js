// Initial dashboard data structure
export const initialDashboardData = {
  categories: [
    {
      id: "cspm-executive",
      name: "CSPM Executive Dashboard",
      icon: "Shield",
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          text: "2 Total\nConnected (2)\nNot Connected (2)",
          category: "cspm-executive",
          icon: "Cloud",
          chartType: "pie",
          chartData: [
            { id: 0, value: 2, label: 'Connected', color: '#0088FE' },
            { id: 1, value: 2, label: 'Not Connected', color: '#FF8042' }
          ]
        },
        {
          id: "cloud-risk",
          name: "Cloud Account Risk Assessment",
          text: "9659 Total\nPassed (7253)\nFailed (1689)\nWarning (717)",
          category: "cspm-executive",
          icon: "AlertTriangle",
          chartType: "donut",
          chartData: [
            { id: 0, value: 7253, label: 'Passed', color: '#00C49F' },
            { id: 1, value: 1689, label: 'Failed', color: '#FF8042' },
            { id: 2, value: 717, label: 'Warning', color: '#FFBB28' }
          ]
        }
      ]
    },
    {
      id: "cwpp-dashboard", 
      name: "CWPP Dashboard",
      icon: "Server",
      widgets: [
        {
          id: "top-alerts",
          name: "Top 5 Namespace Specific Alerts",
          text: "No Graph data available",
          category: "cwpp-dashboard",
          icon: "Bell",
          chartType: "bar",
          chartData: []
        },
        {
          id: "workload-alerts",
          name: "Workload Alerts",
          text: "No Graph data available",
          category: "cwpp-dashboard",
          icon: "Activity",
          chartType: "line",
          chartData: []
        }
      ]
    },
    {
      id: "registry-scan",
      name: "Registry Scan",
      icon: "Database",
      widgets: [
        {
          id: "image-risk",
          name: "Image Risk Assessment",
          text: "1470 Total Vulnerabilities\nCritical (9)\nHigh (150)",
          category: "registry-scan",
          icon: "ImageIcon",
          chartType: "bar",
          chartData: [
            { category: 'Critical', value: 9, color: '#FF4444' },
            { category: 'High', value: 150, color: '#FF8042' },
            { category: 'Medium', value: 800, color: '#FFBB28' },
            { category: 'Low', value: 511, color: '#00C49F' }
          ]
        },
        {
          id: "image-security", 
          name: "Image Security Issues",
          text: "2 Total Images\nCritical (2)\nHigh (2)",
          category: "registry-scan",
          icon: "ShieldAlert",
          chartType: "pie",
          chartData: [
            { id: 0, value: 2, label: 'Critical', color: '#FF4444' },
            { id: 1, value: 2, label: 'High', color: '#FF8042' }
          ]
        }
      ]
    }
  ]
};

// Available widgets that can be added to categories
export const availableWidgets = [
  {
    id: "compliance-score",
    name: "Compliance Score",
    text: "Overall compliance score: 85%. Continue monitoring to maintain security standards.",
    category: null,
    icon: "CheckCircle",
    chartType: "pie",
    chartData: [
      { id: 0, value: 85, label: 'Compliant', color: '#00C49F' },
      { id: 1, value: 15, label: 'Non-Compliant', color: '#FF8042' }
    ]
  },
  {
    id: "threat-detection",
    name: "Threat Detection",
    text: "Advanced threat detection system active. 24/7 monitoring for suspicious activities.",
    category: null,
    icon: "Zap",
    chartType: "bar",
    chartData: [
      { category: 'Threats Blocked', value: 156, color: '#00C49F' },
      { category: 'Attempts', value: 45, color: '#FF8042' },
      { category: 'Resolved', value: 201, color: '#0088FE' }
    ]
  },
  {
    id: "network-security",
    name: "Network Security",
    text: "Network security metrics showing normal patterns. All systems operational.",
    category: null,
    icon: "Wifi",
    chartType: "line",
    chartData: [
      { time: '00:00', value: 65 },
      { time: '04:00', value: 59 },
      { time: '08:00', value: 80 },
      { time: '12:00', value: 81 },
      { time: '16:00', value: 56 },
      { time: '20:00', value: 55 }
    ]
  },
  {
    id: "data-protection",
    name: "Data Protection",
    text: "Data encryption and backup systems operational. All data properly protected.",
    category: null,
    icon: "Lock",
    chartType: "donut",
    chartData: [
      { id: 0, value: 95, label: 'Encrypted', color: '#0088FE' },
      { id: 1, value: 5, label: 'Processing', color: '#FFBB28' }
    ]
  },
  {
    id: "access-management",
    name: "Access Management",
    text: "User access controls reviewed. Multi-factor authentication enabled.",
    category: null,
    icon: "Users",
    chartType: "bar",
    chartData: [
      { category: 'Active Users', value: 245, color: '#0088FE' },
      { category: 'MFA Enabled', value: 223, color: '#00C49F' },
      { category: 'Pending', value: 22, color: '#FFBB28' }
    ]
  },
  {
    id: "incident-response",
    name: "Incident Response",
    text: "Incident response team ready. Average response time: 15 minutes.",
    category: null,
    icon: "AlertCircle",
    chartType: "pie",
    chartData: [
      { id: 0, value: 12, label: 'Resolved', color: '#00C49F' },
      { id: 1, value: 3, label: 'In Progress', color: '#FFBB28' },
      { id: 2, value: 1, label: 'Critical', color: '#FF8042' }
    ]
  }
];
