This project is a full-stack Todo application built using Go for the backend, React with TypeScript for the frontend, and MongoDB for the database. The backend is powered by the Fiber web framework, and the frontend is built using Vite.

## Project Structure

```
.env
.gitignore
air.toml
frontend/
	.gitignore
	eslint.config.js
	index.html
	package.json
	public/
		explode.png
		go.png
		golang.png
		react.png
		vite.svg
	README.md
	src/
		App.css
		App.tsx
		components/
			Navbar.tsx
			TodoForm.tsx
			TodoItem.tsx
			TodoList.tsx
		index.css
		main.tsx
		ui/
			color-mode.tsx
		vite-env.d.ts
	tsconfig.app.json
	tsconfig.json
	tsconfig.node.json
	vite.config.ts
go.mod
go.sum
main.go
tmp/
	build-errors.log
	main
```

## Getting Started

### Prerequisites

- Go 1.24 or later
- Node.js and npm
- MongoDB instance (local or cloud)

### Setup

1. Clone the repository:

```sh
git clone https://github.com/yourusername/react-go-todo.git
cd react-go-todo
```

2. Create a .env file in the root directory and add your MongoDB URI and other environment variables:

```env
PORT=4000
MONGO_URI=your_mongodb_uri
ENV=development
```

3. Install backend dependencies:

```sh
go mod tidy
```

4. Install frontend dependencies:

```sh
cd frontend
npm install
```

### Running the Application

1. Start the backend server:

```sh
go run main.go
```

2. Start the frontend development server:

```sh
cd frontend
npm run dev
```

The backend server will run on `http://localhost:4000` and the frontend development server will run on `http://localhost:5173`.

### Building for Production

1. Build the frontend:

```sh
cd frontend
npm run build
```

2. Start the backend server in production mode:

```sh
ENV=production go run main.go
```

### API Endpoints

- `GET /api/todos` - Retrieve all todos
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id` - Update a todo by ID
- `DELETE /api/todos/:id` - Delete a todo by ID

### Frontend

The frontend is built using React with TypeScript and Chakra UI for styling. It includes the following components:

- `Navbar` - The navigation bar with a theme toggle button
- `TodoForm` - The form to create new todos
- `TodoList` - The list of todos
- `TodoItem` - The individual todo item

### Backend

The backend is built using Go and the Fiber web framework. It connects to a MongoDB database to store and retrieve todos. The main file is main.go, which includes the following routes:

- `getTodos` - Retrieves all todos from the database
- `createTodo` - Creates a new todo
- `updateTodo` - Updates a todo by ID
- `deleteTodo` - Deletes a todo by ID

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Fiber](https://gofiber.io/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [MongoDB](https://www.mongodb.com/)

Feel free to contribute to this project by opening issues or submitting pull requests. Happy coding!
