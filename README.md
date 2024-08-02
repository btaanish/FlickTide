# FlickTide

FlickTide is a robust web application inspired by TikTok, designed to replicate its core functionalities. It provides a smooth user experience with features such as continuous video scrolling, interactive buttons (likes, comments, shares), and metadata display (song titles and usernames). The application leverages modern web technologies to ensure high performance and scalability.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Continuous Video Scrolling**: Infinite scrolling mechanism for video content.
- **User Interactions**: Implemented like, comment, and share functionalities using React state management.
- **Metadata Display**: Dynamically displays song titles and usernames fetched from the backend.
- **Responsive Design**: Utilizes CSS Flexbox and Grid for responsive layouts compatible with various screen sizes.

## Technology Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **HTML & CSS**: Standard web technologies for structuring and styling the application.
- **Material-UI Icons**: Provides pre-built icons for user interaction buttons.

### Backend
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for handling HTTP requests and defining API endpoints.

### Database
- **MongoDB**: NoSQL database for storing user data, video metadata, and interactions.

### Hosting
- **Firebase**: Hosting platform for serving the frontend application.
- **Heroku**: Cloud platform for deploying the backend server and managing the database.

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or on a cloud service
- Firebase account for hosting the frontend
- Heroku account for hosting the backend

### Steps
1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/flicktide.git
    cd flicktide
    ```

2. **Install frontend dependencies**
    ```bash
    cd frontend
    npm install
    ```

3. **Install backend dependencies**
    ```bash
    cd ../backend
    npm install
    ```

4. **Set up environment variables**
    Create a `.env` file in the `backend` directory with the following content:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    ```

5. **Start the backend server**
    ```bash
    npm start
    ```

6. **Deploy the frontend**
    - Follow the Firebase hosting documentation to deploy the `frontend` directory.
    - Ensure your Firebase project is properly configured to serve the React application.

7. **Deploy the backend**
    - Follow the Heroku documentation to deploy the `backend` directory.
    - Ensure your Heroku project is properly configured to connect to your MongoDB instance.

## Usage

- Navigate to the deployed frontend URL.
- Scroll through the video feed to view content.
- Interact with videos using the like, comment, and share buttons.
- View song titles and usernames displayed with each video.

## Contributing

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
