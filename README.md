# DocSpot - Healthcare Appointment Platform

DocSpot is a comprehensive healthcare appointment platform that connects patients with doctors, enabling seamless appointment booking, management, and healthcare services.

## Features

### For Patients
- User registration and authentication
- Browse and search doctors by specialty
- Book, reschedule, and cancel appointments
- View appointment history
- User profile management
- Secure payment integration

### For Doctors
- Doctor profiles with specialties and availability
- Appointment management
- Patient history viewing
- Secure communication

### For Administrators
- Dashboard with analytics
- Doctor and user management
- Appointment monitoring
- System configuration

## Tech Stack

### Frontend
- React.js 19
- Vite
- Tailwind CSS
- React Router
- Axios for API calls
- React Toastify for notifications

### Admin Panel
- React.js 19
- Material-UI
- Ant Design
- Vite
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- Cloudinary (for image storage)
- Razorpay (for payments)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hyndaviputti/docspot.git
   cd docspot
   ```

2. Install dependencies for all services:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install admin panel dependencies
   cd ../admin
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Environment Setup
   - Create a `.env` file in each directory (frontend, admin, backend) based on the provided `.env.example` files
   - Configure your MongoDB connection string, JWT secret, and other environment variables

4. Start the development servers:
   ```bash
   # In separate terminals:
   
   # Start backend
   cd backend
   npm run dev
   
   # Start frontend
   cd ../frontend
   npm run dev
   
   # Start admin panel
   cd ../admin
   npm run dev
   ```

## Project Structure

```
docspot/
├── admin/                 # Admin panel React application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/               # Node.js + Express backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Main server file
│
└── frontend/             # Main frontend React application
    ├── src/
    │   ├── components/   # Reusable components
    │   ├── pages/       # Page components
    │   ├── assets/      # Static assets
    │   └── context/     # React context providers
    └── package.json
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
```

### Frontend (.env)
```
VITE_BACKEND_URL=http://localhost:5000
```

### Admin Panel (.env)
```
VITE_BACKEND_URL=http://localhost:5000
```

## Deployment

### Backend
1. Deploy the backend to a Node.js hosting provider (e.g., Render, Railway, or Heroku)
2. Set up environment variables in the hosting provider's dashboard

### Frontend
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy the `dist` folder to a static hosting provider (e.g., Vercel, Netlify, or GitHub Pages)

### Admin Panel
1. Build the admin panel:
   ```bash
   cd admin
   npm run build
   ```
2. Deploy the `dist` folder to a static hosting provider

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [Your Name] at [your.email@example.com].
