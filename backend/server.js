// ============================================
// Project Nexus - Backend Server Entry Point
// ============================================

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Initialize Express app
const app = express();

// ============================================
// Configuration
// ============================================
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ============================================
// Middleware Configuration
// ============================================

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// ============================================
// Health Check Route
// ============================================
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
    uptime: process.uptime()
  });
});

// ============================================
// API Routes
// ============================================
app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Project Nexus API - Customer Service Dashboard',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api',
      // TODO: Add route endpoints as they are created
      // auth: '/api/auth',
      // customers: '/api/customers',
      // tickets: '/api/tickets',
      // notifications: '/api/notifications'
    }
  });
});

// ============================================
// Route Imports (To be added)
// ============================================
// const authRoutes = require('./src/routes/auth.routes');
// const customerRoutes = require('./src/routes/customer.routes');
// const ticketRoutes = require('./src/routes/ticket.routes');
// const notificationRoutes = require('./src/routes/notification.routes');

// ============================================
// Mount Routes (To be added)
// ============================================
// app.use('/api/auth', authRoutes);
// app.use('/api/customers', customerRoutes);
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/notifications', notificationRoutes);

// ============================================
// Error Handling Middleware
// ============================================

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    success: false,
    message: message,
    ...(NODE_ENV === 'development' && { stack: err.stack })
  });
});

// ============================================
// Database Connection (To be implemented)
// ============================================
// const db = require('./src/config/database');
// db.authenticate()
//   .then(() => console.log('Database connected successfully'))
//   .catch(err => console.error('Database connection error:', err));

// ============================================
// Start Server
// ============================================
const server = app.listen(PORT, () => {
  console.log('\n' + '='.repeat(50));
  console.log('  Project Nexus - Backend Server');
  console.log('='.repeat(50));
  console.log(`  Environment: ${NODE_ENV}`);
  console.log(`  Server running on port: ${PORT}`);
  console.log(`  Server URL: http://localhost:${PORT}`);
  console.log(`  Health Check: http://localhost:${PORT}/health`);
  console.log(`  API Info: http://localhost:${PORT}/api`);
  console.log('='.repeat(50) + '\n');
});

// ============================================
// Graceful Shutdown
// ============================================
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\nSIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

module.exports = app;
