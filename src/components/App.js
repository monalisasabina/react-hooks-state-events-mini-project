import React,{useState} from "react"
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

    const[tasks,setTasks]=useState(TASKS)
    const[selectedCategory,setSelectedCategory]=useState('All')


    //delete button 
  function handleDelete(deletedTasks){

      setTasks(tasks.filter((task) => task!== deletedTasks))
    }

// ....................................................................
    // select button category filter
    function handleCategoryClick(category){
    
      setSelectedCategory(category)
      
    }

      // Filter tasks based on the selected category
  const filteredTasks = tasks.filter(task =>
    selectedCategory === 'All' || task.category === selectedCategory
  );

  console.log(filteredTasks)
// ..........................................................................


function handleTaskFormSubmit(newTask) {
  setTasks([...tasks, newTask]);
}



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={CATEGORIES} onCategorySelect={handleCategoryClick} selectedCategory={selectedCategory}/>

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      {console.log(filteredTasks)}

      <TaskList tasks={filteredTasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
