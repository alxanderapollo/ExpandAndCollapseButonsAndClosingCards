import React, { useState } from "react";
import "./App.css";
import Card from "../src/components/Card";
import ButtonExpandData from "./data/ButtonExpandData";
import TodoListData from "./data/TodoListData";
import Header from "../src/components/Header";
import TaskCard from "../src/components/TaskCard";
function App() {
  //the state allows us to update with each click
  const [selected, setSelected] = useState(null);
  let onExpand = (id) => {
    console.log("what am i before", selected);
    if (id === selected) {
      setSelected(null);
    } else {
      setSelected(id);
      console.log("what am i after", selected);
    }
  };

  // we need to update the list at each click
  const [todos, setTodos] = useState(TodoListData);
  //Function to delete tasks
  const deleteTask = (id) => {
    //now we filter the through the list removing the id that was passed up
    //we dont need to check any index, since the id is what is being passed up we just filter out that id
    //we want all of the items except for the id that was passed up
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* {ButtonExpandData.map((obj,index) => (
        <Card  id={obj.id} name={obj.name} description={obj.description} isExpanded={index === selected} onExpand={onExpand}/>
      ))} */}
        {todos.map((obj, index) => (
          <TaskCard key={index} id={obj.id} Task={obj.Task} handleDelete={deleteTask} />
        ))}
      </div>
    </>
  );
}

export default App;
