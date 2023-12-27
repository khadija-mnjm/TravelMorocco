import { useRef, useState, useEffect } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Header from "../header";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRef = useRef();

  // Charger les tâches depuis le localStorage lors du chargement initial de la page
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Sauvegarder les tâches dans le localStorage chaque fois qu'elles changent
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputRef.current) {
      const text = inputRef.current.value;
      const newItem = { id: Date.now(), completed: false, text };
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    }
  };

  const handleItemDone = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEditItem = (id) => {
    setEditingId(id);
    const taskToEdit = todos.find((todo) => todo.id === id);
    const taskText = taskToEdit ? taskToEdit.text : "";
    setEditText(taskText); // Met à jour le texte d'édition avec la valeur actuelle
    if (inputRef.current) {
      inputRef.current.value = taskText;
    }
  };

 

  const handleSaveEdit = () => {
    const newTodos = todos.map((todo) =>
      todo.id === editingId ? { ...todo, text: editText } : todo
    );
    setTodos(newTodos);
    setEditingId(null);
    setEditText(""); // Réinitialise la variable d'état après la sauvegarde
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
   <>
   <Header/>
   
    <div className="App container mt-4">
      <h2 className="mb-4">To Do List</h2>
      <div className="to-do-container">
        <ul className="list-group">
          {todos.map(({ id, text, completed }) => (
            <div className="item" key={id}>
              <li
                className={`list-group-item ${
                  completed ? "list-group-item-success" : ""
                }`}
                onClick={() => handleItemDone(id)}
              >
                {editingId === id ? (
                  <input
                    ref={inputRef}
                    className="form-control input-edit"
                    placeholder="Edit item..."
                    value={editText} // Utilisez la variable d'état pour initialiser la valeur
                    onChange={(e) => setEditText(e.target.value)} // Met à jour la variable d'état pendant l'édition
                  />
                ) : (
                  text
                )}
              </li>
              <div className="item-buttons mt-2">
                {editingId === id ? (
                  <button
                    className="btn btn-success mr-2"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <FontAwesomeIcon
                      className="icon text-primary mr-2"
                      icon={faEdit}
                      onClick={() => handleEditItem(id)}
                    />
                    <FontAwesomeIcon
                      className="icon text-danger"
                      icon={faTrash}
                      onClick={() => handleDeleteItem(id)}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </ul>
        <input
          ref={inputRef}
          className="form-control input-add mt-3"
          placeholder="Enter item..."
        />
        <button className="btn btn-primary mt-2" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
    </>
  );
}

export default Todo;