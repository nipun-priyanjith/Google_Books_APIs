

# Google Books Search Application

A simple application for searching books using the Google Books API. It has both frontend (React) and backend (Node.js/Express) components. The app allows users to search for books and view detailed information about them.

<img src="https://github.com/nipun-priyanjith/Google_Books_API/blob/main/Screenshot%202025-01-01%20085246.png"/>
<img src="https://github.com/nipun-priyanjith/Google_Books_API/blob/main/Screenshot%202025-01-01%20085325.png"/>
## Backend Setup (Node.js and Express)

### 1. Initialize the Project:

Navigate to your `backend` directory and initialize a new Node.js project by running the following command:

```bash
npm init -y
```

### 2. Install Dependencies:

Install the required dependencies:

```bash
npm install express mongoose axios dotenv cors
```

Install `nodemon` as a development dependency for automatically restarting the server during development:

```bash
npm install --save-dev nodemon
```

### 3. Configure Environment Variables:

Create a `.env` file inside your backend folder. Replace the placeholder with your own API key:

```env
GOOGLE_API_KEY=your_google_books_api_key
MONGODB_URI=your_mongodb_connection_string
```

### 4. Start the Server:

Add a script in your `package.json` to run the server in development mode with `nodemon`:

```json
"scripts": {
    "dev": "nodemon server.js"
}
```

Then, start the server with:

```bash
npm run dev
```

Your backend server should now be running and ready to handle API requests.

---

## Frontend Setup (React)

### 1. Create the React Application:

Navigate to your root directory and create a new React application using `create-react-app`:

```bash
npx create-react-app client
```

### 2. Install Dependencies:

Install the required dependencies for your frontend application:

```bash
cd client
npm install axios react-router-dom
```

### 3. Start the React Development Server:

You can now start the React development server:

```bash
npm start
```

The React app should be running on `http://localhost:3000`.

---

## Folder Structure

```plaintext
├── backend/
│   ├── server.js
│   ├── .env
│   ├── models/
│   ├── routes/
│   └── controllers/
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
├── package.json
└── README.md
```

---

## Features

- **Search Books:** Users can search for books by title or author using the Google Books API.
- **Book Details:** Clicking on a book opens a modal with detailed information, including the title, authors, description, and a link to more info.
- **Responsive UI:** The application is responsive and works well on both desktop and mobile devices.

---

## Future Improvements

- **Connect MongoDB and Save User Activity Logs:** Implement MongoDB for saving user search queries and activity logs to provide insights and enhance the user experience.
- **User Authentication and Authorization:** Add user authentication (e.g., JWT) for personalized experiences, such as saving favorite books or search history.
- **User Rating and Review System:** Allow users to rate and review books they've read, and display these ratings on the book detail page.
- **Infinite Scrolling:** Implement infinite scrolling for displaying search results instead of paginated results.
- **Dark Mode:** Add a dark mode theme to improve accessibility and provide users with a choice of UI preferences.

---


## Troubleshooting

If you encounter any issues during setup or while running the application, consider checking the following:

- Make sure your `.env` file contains valid API keys and MongoDB connection strings.
- If the backend API is not responding, check if your server is running and the API endpoint is correctly configured.
- If you face issues with dependencies, try deleting `node_modules` and running `npm install` again.
  
