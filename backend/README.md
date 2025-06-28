# DocSpot - Backend API

Backend API for the DocSpot healthcare platform, built with Node.js, Express, and MongoDB. This powers the patient portal, doctor dashboard, and admin panel.

## 🚀 Features

- **User Authentication**: JWT-based authentication for patients, doctors, and admins
- **Appointment Management**: Book, cancel, and manage medical appointments
- **Doctor Profiles**: Search and view doctor information
- **Admin Dashboard**: Manage users, doctors, and appointments
- **File Uploads**: Secure image uploads using Cloudinary
- **RESTful API**: Clean and consistent API design

## 🛠️ Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0 or yarn
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (for image uploads)
- Razorpay account (for payments)

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret

# Admin Credentials
ADMIN_EMAIL=admin@docspot.com
ADMIN_PASSWORD=secure_admin_password

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Razorpay (for payments)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hyndaviputti/docspot.git
   cd docspot/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Update the values with your configuration

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **API will be running at** `http://localhost:4000`

## 🏗️ Project Structure

```
backend/
├── config/           # Configuration files
├── controllers/      # Request handlers
├── middlewares/      # Custom middleware
├── models/           # MongoDB models
├── routes/           # API routes
├── uploads/          # Temporary file uploads
├── .env              # Environment variables
├── server.js         # Application entry point
└── package.json      # Dependencies and scripts
```

## 📚 API Documentation

### Authentication
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - User login
- `POST /api/doctor/login` - Doctor login
- `POST /api/admin/login` - Admin login

### User Endpoints
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `POST /api/user/upload-avatar` - Upload profile image
- `GET /api/user/appointments` - Get user appointments
- `POST /api/user/book-appointment` - Book an appointment

### Doctor Endpoints
- `GET /api/doctor/profile` - Get doctor profile
- `PUT /api/doctor/profile` - Update doctor profile
- `GET /api/doctor/appointments` - Get doctor's appointments
- `PUT /api/doctor/appointment/:id/status` - Update appointment status

### Admin Endpoints
- `POST /api/admin/doctors` - Add a new doctor
- `GET /api/admin/doctors` - Get all doctors
- `GET /api/admin/users` - Get all users
- `GET /api/admin/appointments` - Get all appointments
- `PUT /api/admin/appointment/:id` - Update appointment

## 🚀 Deployment

### Using Render
1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Create a new Web Service
4. Connect your GitHub repository
5. Configure the service:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables
7. Deploy

### Using Docker
```bash
docker build -t docspot-backend .
docker run -p 4000:4000 -d docspot-backend
```

## 🧪 Testing

Run tests using:
```bash
npm test
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
