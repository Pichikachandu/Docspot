# DocSpot - Patient Portal

Welcome to the DocSpot patient portal, a modern healthcare platform built with React and Vite. This application allows patients to book appointments, manage their health records, and communicate with healthcare providers seamlessly.

## ✨ Features

- **User Authentication**: Secure signup and login
- **Doctor Search**: Find and filter healthcare providers by specialty
- **Appointment Booking**: Schedule and manage medical appointments
- **Profile Management**: Update personal and medical information
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/docspot.git
   cd docspot/frontend
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the frontend directory with the following variables:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── components/      # Reusable UI components
│   ├── context/         # React context providers
│   ├── pages/           # Page components
│   │   ├── About/       # About page
│   │   ├── Contact/     # Contact page
│   │   └── ...          # Other pages
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables
└── package.json         # Project dependencies and scripts
```

## 🔧 Technologies Used

- React 19
- Vite
- React Router
- Axios for API calls
- Tailwind CSS for styling
- React Toastify for notifications
- React Icons

## 🌐 Environment Variables

Create a `.env` file in the frontend directory with the following variables:

```env
VITE_BACKEND_URL=http://localhost:5000  # Your backend API URL
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 📧 Contact

For any inquiries, please contact [Your Name] at [your.email@example.com].
