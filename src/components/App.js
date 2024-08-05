import React,{useState} from "react"
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid"

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

   //generating an id 
  const [tasksWithIds , setTasksWithIds]=useState(
     TASKS.map((task) => ({...task, id:uuid()}))
   )

  // for filtering tasks
  const[selectCategory, setSelectCategory]= useState('All')
  

  // handling the delete button
   function handleDelete(id){

     setTasksWithIds(tasksWithIds.filter((task) => task.id !== id))
   }
  
  // filtering tasks at button
  const filteredTasks = tasksWithIds.filter((task) => 
    selectCategory === "All" || task.category === selectCategory
  );

  

  //on submitting button
  function handleTaskItemSubmit(newTaskItem){
    setTasksWithIds([...tasksWithIds,newTaskItem])

    console.log({newTaskItem})

  }  
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} selectCategory={setSelectCategory}/>
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={handleTaskItemSubmit} />
      <TaskList tasks={tasksWithIds} onDelete={handleDelete} />
    </div>
  );
}

export default App;
