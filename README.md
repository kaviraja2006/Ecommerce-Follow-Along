# E-commerce Follow-Along Project

A backend-focused e-commerce application built to explore and demonstrate modern web development techniques, including RESTful APIs, database management, and authentication.

## 🚀 Features
- **User Authentication and Authorization (JWT-based)**: Secure login and token management.
- **Product Management (CRUD operations)**: Ability to add, update, delete, and view products.
- **Cart and Order Management**: Users can add products to their cart and place orders.
- **Payment Integration (Stripe/PayPal)**: Seamless payment options for processing transactions.
- **Secure and Scalable Architecture**: Designed for performance and growth.
- **Integrated Error Handling and Validation**: Ensures clean and reliable APIs.
- **Database Implementation**: Uses MongoDB/MySQL for efficient data storage.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Gateway**: Stripe / PayPal
- **Dev Tools**: Postman, Git, Docker (optional)

## Milestone 2: Frontend - Login Page

In this milestone, we focused on creating the frontend for the login page. We structured the application by setting up a components folder where we created the `Login.jsx` component. Additionally, we organized the layout by creating a `pages` folder, which includes `Home.jsx`, `Login.jsx`, and `Navbar.jsx` components. These components work together to provide a seamless user experience, with a functional and visually clean login page for the e-commerce platform.

### Setup and Installation
To get started with the project locally:

1. Clone the repository.

### Learning Goals
By the end of this milestone:
- Implemented project file organization, ensuring everything is structured properly.
- Set up a React frontend app to create the UI layout.
- Configured a Node.js server for our backend, prepared for API handling.
- Integrated Tailwind CSS and used utility classes to simplify styling.
- Developed a functional and styled login page, ensuring a smooth experience for the end user.

### Features Implemented
- **Project Folder Structure**:
  - `frontend`: Holds all files relating to React.
  - `backend`: Contains the Node.js server and API files.
- **React Frontend Setup**:
  - Activated React to create dynamic UIs.
  - Installed dependencies like React Router for routing.
- **Node.js Backend Setup**:
  - Activated a minimal Node.js server with Express to handle API requests.
- **Tailwind CSS Setup**:
  - Integrated Tailwind CSS for modern and clean UI styling.
  - Installed PostCSS for comfort with Tailwind CSS development.
- **Login Page**:
  - Designed the login page using Tailwind CSS, ensuring a clean and modern design.
  - The login page includes basic fields such as email, password, and a submit button, with potential for authentication functionality.

## Milestone 3: Backend Setup, MongoDB Integration & Error Handling

In Milestone 3, we took significant steps by setting up the backend, making it communicate with MongoDB, and handling potential errors. The focus was to ensure that the backend supports the frontend, providing proper API routes and data management.

### Learning Outcomes
- Organized backend code into dedicated folders for scalability.
- Set up a Node.js server using Express to handle API requests.
- Connected to MongoDB for efficient data management.
- Implemented basic error handling to smooth server operations.
- Updated the README for milestone achievement.

### Key Features Implemented
- **Backend Folder Structure**:
  - `routes`: Contains API routes.
  - `controllers`: Business logic for routes.
  - `models`: Defines MongoDB models.
  - `middleware`: Middleware for authentication and validation.
  - `utils`: Miscellaneous utility functions.
- **Server Configuration**:
  - Set up Node.js server with Express to handle different request types (GET, POST, PUT, DELETE).
- **MongoDB Connection**:
  - Connected the Node.js server to MongoDB via Mongoose for managing data (e.g., products, users, orders).
- **Error Handling**:
  - Implemented basic error handling to return meaningful messages for debugging.

## Milestone 4: User Model, Controller, and File Uploads

In this milestone, we created a User Model for ordered data, built out the User Controllers for CRUD operations, and added Multer for file uploads. The backend now supports user management and file uploads.

### Features Implemented
1. **User Model**:
   - Schema fields: `username`, `email`, `password`, `profileImage`, `createdAt`, `updatedAt`.
   - Used Mongoose for schema validation and indexing.
   
2. **User Controller**:
   - `createUser`: Creates a new user with error checking.
   - `getAllUsers`: Fetches all users.
   - `getUserById`: Fetches a single user by ID.
   - `updateUser`: Updates user details and profile image.
   
3. **Multer File Uploads**:
   - Configured Multer for file uploads (profile pictures).
   - Allowed only image formats (`image/jpeg`, `image/png`) and limited the file size to 5MB.
   - Route: `POST /users/:id/upload` for profile picture upload.

### Technical Details
- **Database**: MongoDB for dynamic user data.
- **Mongoose**: Used for schema modeling, query building, and data management.
- **Multer Setup**:
  ```javascript
  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
  });

  const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith('image/')) cb(null, true);
      else cb(new Error('Only images are allowed!'), false);
    }
  });
