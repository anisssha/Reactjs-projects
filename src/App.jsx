import AddTodo from "./components/AddTodo";
import Title from "./components/Title";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import { db } from "./firebase";

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      console.log("hello");
      console.log(todosArr);
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);



  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todo", todo.id), { title: title });
  };
  
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todo", todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todo", id));
  };

  return (
    <div>
      <Title />

      <AddTodo />
      
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
    
    </div>
  );
};

export default App;
