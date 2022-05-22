
import './App.css';
import React,  {useState}from 'react';


function App() {

  const [list, setList] = useState("")// keep  input value  in useState
 const [todo, setTodo] =useState([])
let [count, setCount] = useState (0)


 const changeHandler = (e) => {
   setList(e.target.value) // take value from input and store in list useState
  
 }

 
 const addHandler = () => {
   if(count<6){
    setCount(count +1)
  let storedNums = [...todo];// getting value from todo array and creating new array  and storing in to new variable  storedNums
  storedNums.push(list); // adding input value from list 
  setTodo(  storedNums ); //giving new value to todo array in the state
}
  }

  const cHandler =(index) =>{
    let storedNums = [...todo]
    storedNums.splice(index, 1)
    setTodo(storedNums)
    setCount(count -1)
   
  
  }
// const [inputValue, setInputValue] = useState ("")

  return (<div className="App">
    <h1>To-Do List</h1>
    <div className="blue"></div>
    <div className="input-box">
      <input  className='input' type="text" placeholder='Add task'  onChange={changeHandler}></input>
      <button className='add-button'onClick={addHandler}>+</button>
    </div>
      <div className="task-list" >


       {todo.map((todoItem, index)=>{
         return(<ToDOItem  key={index} name={todoItem} listItems={todo} id={index} setListTodo={setTodo} cHandler={cHandler}></ToDOItem>
         
        )
       })}
 
      </div>
      </div>
)}
 



const ToDOItem =(props) =>{

   const [changeClass, setChangeClass]= useState(true)
  
  

  return(
<div  className={changeClass ? "flex-task": "anyOther"}>
           <p    id={props.id} className="list-item">{props.name}</p>
           <button className='add-button'onClick={() =>setChangeClass(!changeClass)}>+</button>
           <button className='add-button' onClick={() =>props.cHandler(props.id)}>C</button>
           </div>
  )
}


export default App;
