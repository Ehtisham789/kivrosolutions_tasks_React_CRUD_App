## Introduction: React CRUD Application Task

This repository, **kivrosolutions\_tasks\_React\_CRUD\_App**, contains the solution for a critical front end development assignment: building a **CRUD (Create, Read, Update, Delete) Application** using the **React** framework.

This project is designed to demonstrate proficiency in:

  * **Application State Management:** Using **React Hooks** (primarily `useState` and `useEffect`) to control the flow and integrity of data.
  * **Form Handling:** Managing user input for creating and updating records.
  * **Data Manipulation:** Implementing the four core functions required for any data driven application.
  * **Component Reusability:** Designing separate components for forms, lists, and individual records.

-----

## Task Description: Core CRUD Application

The primary objective of this task was to develop a single page application that allows a user to fully manage a collection of records or items without relying on a backend server. The application uses **local state** to manage the data lifecycle within the browser session.

### Core CRUD Operations Implemented:

The application provides a user friendly interface for the four essential data management operations:

1.  **C - Create (Add a Record):**

      * **Functionality:** A form allows users to input data (e.g., Name, ID, or description) and submit it to add a new record to the list.

2.  **R - Read (View Records):**

      * **Functionality:** All created records are displayed in a clean, organized table or list view, allowing users to **see the current state** of the data.

3.  **U - Update (Edit a Record):**

      * **Functionality:** Users can select an existing record and modify its data through a dedicated editing interface or form, reflecting the changes immediately in the list.

4.  **D - Delete (Remove a Record):**

      * **Functionality:** A mechanism (e.g., a button) is provided next to each record to permanently remove it from the application state.

### Technology Stack:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React** (Functional Components) | Building the component structure and UI logic |
| **State Management** | **React Hooks** (`useState`, `useEffect`) | Managing the array of records and form data |
| **Data Persistence** | **Local State (in-memory)** | Simulating data storage within the app session |
| **Styling** | **CSS/Bootstrap** (or similar) | Ensuring a clear, responsive, and functional interface |

| Detail | Value |
| :--- | :--- |
| **Live Deployment** | [View Live React CRUD App](https://ehtisham789.github.io/kivrosolutions_tasks_React_CRUD_App/) |

-----

## Installation and Setup

To run this React application locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ehtisham789/kivrosolutions_tasks_React_CRUD_App.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd kivrosolutions_tasks_React_CRUD_App
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Start the application:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The app should open automatically in your browser at `http://localhost:3000`.
