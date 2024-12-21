# Todo Application with React and Redux Toolkit

This project is a simple **Todo application** built using **React** and **Redux Toolkit**, designed to streamline task management while incorporating employee data fetched from an external API. The application demonstrates the integration of modern React tools and best practices to solve real-world problems efficiently.

---

## Features

### 1. Todo Management
- **Add Todo**: Create and add new tasks to the list.
- **View Todos**: Display a list of all tasks with details.
- **Delete Todos**: Remove tasks from the list.
- **Update Todos**: Edit existing tasks.

### 2. Employee List
- A dedicated route that displays a list of employees fetched from an external API.
- **API Used**: (https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001)
  - Provides structured employee data, such as names, roles, and other details.
  - Integrated using `axios` for seamless API communication.

### 3. Routing
- **Todo List Route**: Manage personal tasks efficiently.
- **Employee List Route**: View employee details fetched dynamically from the API.

### 4. State Management
- Built using **Redux Toolkit** for a simplified and efficient global state management approach.
- Modular slices for handling todos and employee data separately.

---

## Technologies Used
- **React**: For building user interfaces with functional components and hooks.
- **React Router**: For implementing navigation between the Todo List and Employee List routes.
- **Redux Toolkit**: For managing application state efficiently with slices and actions.
- **Axios**: For making HTTP requests to fetch employee data.
- **CSS**: For styling and making the application responsive.

---

## Installation and Setup

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (>=16.x)
- **npm** or **yarn**

### Steps to Run the Application
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Integration
The application fetches employee data from the following API endpoint:
- **API URL**: (https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001)

**Data Handling**:
- Fetched using `axios` to make HTTP GET requests.
- Data is displayed in the **Employee List** route with proper rendering and error handling.

---


## Future Enhancements
- Add filtering and search functionality for the Todo and Employee lists.
- Implement user authentication for secure access.
- Introduce drag-and-drop sorting for Todo items.

---
