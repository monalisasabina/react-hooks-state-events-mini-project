import { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {

  const[taskCategory,setTaskCategory]=useState('Code')
  const[taskText, setTaskText]=useState('')

  console.log({categories})

//  select......................................................
  function handleChange(event){

    setTaskCategory(event.target.value)
  }

  //onsubmit
  function handleSubmit(event){
      event.preventDefault()

      const newTask = { text: taskText, category: taskCategory };
      onTaskFormSubmit(newTask);

      // reseting
      setTaskText('');
      setTaskCategory('Code'); 

  } 


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name={taskText} onChange={(event) =>setTaskText(event.target.value)}/>
      </label>
      <label>
        Category

        <select  onChange={handleChange} name="category">
           <option value="Code">Code</option>
           <option value="Food">Food</option>
           <option value="Money">Money</option>
           <option value="Misc">Misc</option>

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
