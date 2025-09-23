# Database Setup Instructions

This project now includes MongoDB integration for storing contact form submissions and training registrations.

## Prerequisites

1. **MongoDB Installation**
   - Install MongoDB locally, or
   - Use MongoDB Atlas (cloud database)

2. **Environment Variables**
   - Create a `.env.local` file in the project root
   - Add your MongoDB connection string

## Setup Steps

### 1. Local MongoDB Setup

If using local MongoDB:

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Create `.env.local` file with:
   ```
   MONGODB_URI=mongodb://localhost:27017/hacfy-trainings
   ```

### 2. MongoDB Atlas Setup (Recommended for Production)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Create `.env.local` file with:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hacfy-trainings?retryWrites=true&w=majority
   ```

### 3. Environment Variables

Create `.env.local` in the project root:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/hacfy-trainings
# For MongoDB Atlas, use: mongodb+srv://username:password@cluster.mongodb.net/hacfy-trainings

# Turnstile Configuration (for contact form)
TURNSTILE_SECRET=your-turnstile-secret-key

# Email Configuration (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Database Collections

The application creates two collections:

1. **contacts** - Stores contact form submissions
2. **registrations** - Stores training program registrations

## Features

### Contact Form (`/api/contact`)
- Stores contact form submissions
- Includes rate limiting
- Supports Turnstile verification (optional)

### Registration Form (`/api/register`)
- Stores training program registrations
- Generates unique registration IDs
- Validates all required fields

### Admin Dashboard (`/admin`)
- View all contact submissions
- View all registrations
- Filter by status
- Real-time data refresh

## API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/register` - Submit registration
- `GET /api/admin/contacts` - Get all contacts (admin)
- `GET /api/admin/registrations` - Get all registrations (admin)

## Data Models

### ContactSubmission
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  mobile: string,
  program: string,
  message?: string,
  createdAt: Date,
  status: 'new' | 'contacted' | 'resolved',
  source: 'contact-form'
}
```

### Registration
```typescript
{
  _id: ObjectId,
  fullName: string,
  email: string,
  phone: string,
  program: string,
  experience: string,
  goals: string,
  agreeTerms: boolean,
  createdAt: Date,
  status: 'pending' | 'confirmed' | 'rejected',
  registrationId: string,
  source: 'registration-form'
}
```

## Running the Application

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment variables (create `.env.local`)

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Access the admin dashboard at: `http://localhost:3000/admin`

## Security Notes

- The admin dashboard is currently unprotected (add authentication in production)
- Rate limiting is implemented for contact forms
- Input validation is performed on all endpoints
- Database errors are handled gracefully

## Troubleshooting

1. **Connection Issues**: Check your MongoDB URI in `.env.local`
2. **Database Not Found**: The database and collections will be created automatically
3. **Permission Errors**: Ensure your MongoDB user has read/write permissions
4. **Network Issues**: For Atlas, check your IP whitelist settings
