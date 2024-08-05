import React, {useState} from "react"
import { v4 as uuid } from "uuid"


function NewTaskForm({onTaskFormSubmit}) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Code")

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({
      id:uuid(),
      name,
      category
    })

  }

  // handling onchange on select
  function handleChange(event){

    setCategory(event.target.value)
   }


  function handleNameChange(event){

    setName(event.target.value)
    console.log(event.target.value)
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>

      <label>
        Details
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
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
