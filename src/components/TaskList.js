import Task from "./Task";

function TaskList({tasks,onDelete}) {

  // console.log({tasks})

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
       
       {tasks.map((task) =>
       
       <Task key={task.id} task={task} onDelete={onDelete} />


      )}
      
        

      
      
    </div>
  );
}

export default TaskList;
