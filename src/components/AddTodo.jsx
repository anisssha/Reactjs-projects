import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title != "") {
      await addDoc(collection(db, "todo"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
              <input
                   className="border-2 py-3 px-6 rounded-[10px]  text-xl border-gray-400 w-[500px]"
          type="text "
          value={title}
          placeholder="Enter todo..."
          onChange={(e) => setTitle(e.target.value)}
        /><br/>
        <button className="m-5 bg-red-500 text-5xl px-4 py-2 rounded-xl text-white hover:bg-red-700 hover:font-medium transition-all hover:duration-150 ease-in-out ">+</button>
      </form>
    </center>
  );
};

export default AddTodo;
