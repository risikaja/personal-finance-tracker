# Personal Finance Tracker

A full-stack personal finance management application built with the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The platform allows users to track income and expenses, manage financial transactions, and visualize financial data through an interactive dashboard and charts.

<img width="1899" height="794" alt="Screenshot 2026-06-04 113454" src="https://github.com/user-attachments/assets/3f0beec7-3b27-49d4-bf63-c9c6fa8760e3" />
---

## Overview

Personal Finance Tracker is designed to help users organize and monitor their personal finances in a secure and efficient way.

The application provides:

* Secure user authentication
* Income and expense tracking
* Transaction management
* Financial analytics dashboard
* Interactive charts and reports
* Search and filtering functionality
* Responsive user interface

The system ensures that each user can only access their own financial records through JWT-based authentication and data isolation mechanisms.

<img width="1897" height="859" alt="Screenshot 2026-06-04 113653" src="https://github.com/user-attachments/assets/82fe1c61-e0f8-45e2-afea-33d6a809a59c" />

---

## Features

### Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing with bcryptjs
* User Data Isolation

### Transaction Management

* Create Transactions
* Update Transactions
* Delete Transactions
* Transaction History
* Categorized Transactions
* Income & Expense Tracking

### Search & Filtering

* Search by Title
* Search by Category
* Filter by Transaction Type
* Date Range Filtering

### Financial Dashboard

* Current Balance Overview
* Total Income Statistics
* Total Expense Statistics
* Transaction Count
* Real-Time Financial Summary

### Analytics & Visualization

* Income vs Expense Charts
* Expense Category Analysis
* Financial Data Visualization using Recharts

<img width="1772" height="553" alt="Screenshot 2026-06-03 220154" src="https://github.com/user-attachments/assets/abd5dc07-598b-4506-a16f-14cd5e3e52d1" />


---

## System Architecture

The application follows a Client-Server Architecture:

```text
React Frontend
       ↓
Express REST API
       ↓
Controllers
       ↓
Models
       ↓
MongoDB Atlas
```

### Frontend

* React.js
* React Router
* Redux Toolkit
* RTK Query
* Bootstrap 5
* Recharts

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB Atlas
* Mongoose ODM

### Security

* JWT Authentication
* bcryptjs
* Authorization Middleware

---

## Database Design

### User Schema

```javascript
{
  name: String,
  email: String,
  password: String
}
```

### Transaction Schema

```javascript
{
  user: ObjectId,
  title: String,
  amount: Number,
  type: String,
  category: String,
  date: Date
}
```

### Relationship

```text
1 User → Many Transactions
```

---

## REST API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Transactions

```http
GET    /api/transactions
POST   /api/transactions
PUT    /api/transactions/:id
DELETE /api/transactions/:id
```
<img width="726" height="927" alt="Screenshot 2026-06-04 125144" src="https://github.com/user-attachments/assets/5d79654c-56bf-462e-8ef9-3a1d483c3df4" />
---

## Dashboard Metrics

The dashboard provides a complete financial overview through:

* Current Balance
* Total Income
* Total Expenses
* Total Transactions

Balance Calculation:

```text
Current Balance = Total Income - Total Expenses
```

---

## Data Visualization

Financial data is visualized using Recharts.

Available visualizations include:

* Income vs Expense Comparison
* Expense Distribution by Category
* Financial Summary Charts

---

## Security Features

* JWT Authentication
* Password Hashing with bcryptjs
* Protected API Routes
* Authorization Checks
* User-Specific Data Access
* Input Validation

Each user can only view and manage their own transactions.

---

## Validation

### Frontend Validation

* Required Fields Validation
* Amount Must Be Greater Than Zero

### Backend Validation

* Required Fields Validation
* Enum Validation
* Amount Validation
* Schema Validation with Mongoose

---

## Technologies Used

### Frontend

* React.js
* React Router
* Redux Toolkit
* RTK Query
* Bootstrap 5
* Recharts

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Security

* JWT
* bcryptjs

### Development Tools

* Git
* GitHub
* Postman
* MongoDB Atlas

---

## Testing

### Backend Testing

* Authentication Testing
* API Endpoint Testing
* Database Testing

### Frontend Testing

* Responsive Design Testing
* Transaction CRUD Testing
* Dashboard Testing

### Security Testing

* Unauthorized Access Testing
* User Data Isolation Testing

---

## Responsive Design

The application is fully responsive and optimized for:

* Desktop Devices
* Tablets
* Mobile Devices

---

## Future Improvements

* Budget Planning
* Savings Goals Tracking
* Monthly Reports
* PDF Export
* Email Notifications
* Dark Mode
* Multi-Currency Support

---

## Author

* Riza Kaja

Master of Science in Information Engineering

European University of Tirana
