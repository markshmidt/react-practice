import React, {useState} from 'react'
function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Go to the gym", "Read a book"]);
    const [newTask, setNewTask]=useState('')

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask])
            setNewTask("");
            console.log(newTask);
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        console.log(updatedTasks);
        console.log(index);

    }
     function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

    return(<div className="todo-list">
        <h1>ToDo List</h1>
        <div>
        <input type="text" placeholder="Enter a task..." value={newTask}
        onChange={handleInputChange}/>
        <button className="addButton" onClick={addTask}> Add Task</button>
        </div>

        <div className="tasks">
            <ol>
                {
                    tasks.map((task, index) =>(
                        
                        <li key={index}>
                             <span className="text">{task}</span>
              <button className="deleteButton" onClick={() => deleteTask(index)}>Delete</button>
              <button className="moveUpButton" onClick={() => moveTaskUp(index)}>Move Up</button>
              <button className="moveDownButton" onClick={() => moveTaskDown(index)}>Move Down</button>
            </li>
                    ))
                }
            </ol>
        </div>
    </div>)
}
export default ToDoList;