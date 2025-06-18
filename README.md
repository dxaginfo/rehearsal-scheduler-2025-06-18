# Rehearsal Scheduler

A comprehensive web application for bands and music groups to efficiently organize rehearsal schedules. This application helps bands automatically schedule rehearsals, send reminders, track attendance, and suggest optimal rehearsal times based on member availability.

## Features

- **User Authentication & Authorization**
  - Secure registration and login
  - Role-based access (admin, member)

- **Band Management**
  - Create and manage bands/groups
  - Invite members and assign roles
  - Track band membership

- **Rehearsal Scheduling**
  - Create, edit, and delete rehearsal events
  - Set recurring rehearsals
  - Specify location details and agenda

- **Availability Tracking**
  - Members can set regular availability
  - Handle exceptions to availability
  - Visual calendar of combined availability

- **Smart Scheduling**
  - Algorithm to suggest optimal rehearsal times
  - Detect and resolve scheduling conflicts
  - Prioritize based on member importance

- **Notifications & Reminders**
  - Email notifications for new rehearsals
  - Automated reminders before rehearsals
  - Change/cancellation alerts

- **Mobile Responsive Design**
  - Full functionality on all devices
  - Touch-friendly interface

## Technology Stack

### Frontend
- React.js with Redux for state management
- Material-UI component library
- FullCalendar.js for calendar visualization
- Formik with Yup for form validation
- Axios for HTTP requests

### Backend
- Node.js with Express
- JWT authentication
- Swagger for API documentation
- Nodemailer with SendGrid for email notifications

### Database
- PostgreSQL with Sequelize ORM
- Redis for caching and session storage

### DevOps
- Docker for containerization
- AWS for deployment
- GitHub Actions for CI/CD

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- npm or yarn
- PostgreSQL (v12+)
- Redis

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dxaginfo/rehearsal-scheduler-2025-06-18.git
   cd rehearsal-scheduler-2025-06-18
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the backend directory with the following variables:
   ```
   # Server
   PORT=5000
   NODE_ENV=development
   
   # Database
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=rehearsal_scheduler
   DB_USER=postgres
   DB_PASSWORD=your_password
   
   # JWT
   JWT_SECRET=your_secret_key
   JWT_EXPIRES_IN=7d
   
   # Email
   SENDGRID_API_KEY=your_sendgrid_api_key
   EMAIL_FROM=your_email@example.com
   
   # Redis
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

4. **Set up the database**
   ```bash
   cd backend
   npm run db:create
   npm run db:migrate
   ```

5. **Start the development servers**
   ```bash
   # Start backend server
   cd backend
   npm run dev
   
   # In a separate terminal, start frontend server
   cd frontend
   npm start
   ```

6. **Access the application**
   
   The application will be available at [http://localhost:3000](http://localhost:3000)

## Docker Deployment

1. **Build and run using Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the containerized application**
   
   The application will be available at [http://localhost:8080](http://localhost:8080)

## API Documentation

API documentation is available at [http://localhost:5000/api-docs](http://localhost:5000/api-docs) when running the backend server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request