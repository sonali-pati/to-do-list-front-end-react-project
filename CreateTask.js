   
 import { useEffect,useState } from "react"
import { Link } from "react-router-dom"


    function CreateTask(){
        let [tasks,setTasks]= useState([])
         useEffect(()=>{
            fetch("http://localhost:8000/todos")
            .then((responce)=>responce.json())
            .then((tasks)=>{
              console.log(tasks)
              setTasks(tasks)
            })
            .catch((err)=>{
              console.log(err)
            })
         },[])
           
        
          
          let task={}
        function readTask(property,value){
            task[property]=value
            console.log(task)
        }
  
        function createTask(){
           fetch("http://localhost:8000/todos",{
              method:"POST",
              body:JSON.stringify(task),
              headers:{
                 "Content-Type":"application/json"
              }
           })
           .then((responce)=>responce.json())
           .then((newTask)=>{
              console.log(newTask)
           })
           .catch((err)=>{
              console.log(err)
           })
        }
  
        
  
         return(
            <div className="task-contener">
               <h1 className="title">All Tasks</h1>
               
               <div className="input-container">
                  
               <Link to="/todos">
                 <button className="task-btn btn-primary" >Update OR Delete Task</button>
                 </Link>

                 <input type="text"className="task-inp form-control" placeholder="Enter task" onChange={(event)=>{
                    readTask("name",event.target.value)
                 }}/>
                 <Link to="/create">
                 <button className="task-btn btn-primary" onClick={createTask}> Create Task</button>
                 </Link>
               </div>
               {
                  tasks.map((task,index)=>{
                      return(
                          <div className="all-task">
                               <div className="padd">
                                  <div className="single-task">
                                      <h2>TasK Name:{task.name}</h2>
                                      {/* <h2>Task Status:{task.completed}</h2>  */}
                                  </div>
                                  {/* <div className="icon-container">
                                  <i className="fa solid fa-file-pen icon text-success" onClick={()=>{
                                   updateTask(task)
                                  }}></i>
                                  <i className="fa solid fa-trash-can icon text-danger" onClick={()=>{
                                     deleteTask(task.id)
                                  }}></i>
                                
                                  </div> */}
                               </div>
                          </div>
                      )
                  })
               }
            </div>
         )
     }
  
      export default CreateTask;