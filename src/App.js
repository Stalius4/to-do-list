
import './App.css';
import React,  {setState, useState, Component}from 'react';


function App() {

  const [list, setList] = useState("")// keep  input value  in useState
 const [todo, setTodo] =useState([])



 const changeHandler = (e) => {
   setList(e.target.value) // take value from input and sstore in list useState
  
 }

 
 const addHandler = () => {
  let storedNums = [...todo];// getting value from todo array and creating new array  and storing in to new variable  storedNums
  storedNums.push(list); // adding input value from list 
  setTodo(  storedNums ); //giving new value to todo array in the state
  }

  return (<div className="App">
    <h1>To-Do List</h1>
    <div className="blue"></div>
    <div className="input-box">
      <input className='input' type="text" placeholder='Add task'  onChange={changeHandler}></input>
      <button className='add-button'onClick={addHandler}>+</button>
    </div>
      <div className="task-list" >


       {todo.map((todoItem, index)=>{
         return(<ToDOItem  key={index} name={todoItem} listItems={todo} id={index} setListTodo={setTodo}></ToDOItem>
         
        )
       })}
 
      </div>
      </div>
)}
 
const ToDOItem =(props) =>{

   const [changeClass, setChangeClass]= useState(true)
  
  
   const cHandler =(index) =>{
    let storedNums = [...props.listItems]
    storedNums.splice(index, 1)
    props.setListTodo(storedNums)
    console.log(storedNums[index])

  
  }
  return(
<div  className={changeClass ? "flex-task": "anyOther"}>
           <p    id={props.id} className="list-item">{props.name}</p>
           <button className='add-button'onClick={() =>setChangeClass(!changeClass)}>+</button>
           <button className='add-button' onClick={() =>cHandler(props.id)}>C</button>
           </div>
  )
}


export default App;
