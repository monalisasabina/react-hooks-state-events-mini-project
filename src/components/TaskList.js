import Task from "./Task";

function TaskList({tasks,onDelete}) {

  console.log({tasks})


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
       
       {tasks.map((task,index) =>
       
       <Task key={index} task={task} category={task.category} text={task.text} onDelete={onDelete} />


      )}

      
  
       
      
    </div>
  );
}

export default TaskList;
