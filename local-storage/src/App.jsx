import React, { useState } from 'react'
import { json } from 'react-router-dom'

const App = () => {

 function getPromise(){
    return new Promise((res)=>{
      setTimeout(()=>{
        console.log("promise is working");
      },3000)
    })
  }

  const [id,setId] = useState(0)
  function settingId(){
    setId(id+1)
  }

  const URL = 'https://jsonplaceholder.typicode.com/users'
 
  const getData = async ()=>{
    let response = await fetch(URL)
    let Data = await response.json()
    const name = Data.map(user => ({
      name:user.name
    }));
    console.log(name)
  };


//   const students = [
//   { id: 1, name: "Rahul", age: 20 },
//   { id: 2, name: "Aman", age: 21 },
//   { id: 3, name: "Priya", age: 19 },
//   { id: 4, name: "Arjun", age: 22 },
//   { id: 5, name: "Sneha", age: 20 },
//   { id: 6, name: "Rohan", age: 23 },
//   { id: 7, name: "Ananya", age: 18 },
//   { id: 8, name: "Vikram", age: 21 },
//   { id: 9, name: "Neha", age: 20 },
//   { id: 10, name: "Karan", age: 22 }
// ];

// localStorage.setItem('students',JSON.stringify(students))

// const student = JSON.parse(localStorage.getItem('students'))

// console.log(student);


  // localStorage.setItem('number','7976362142')
  // localStorage.getItem('number')
  // localStorage.removeItem('user')
  // localStorage.removeItem('age')
  // localStorage.setItem('age','21')

  // let user = {
  //   name:'sufiyan',
  //   age:21,
  //   id:2
  // }

  // localStorage.setItem('user',JSON.stringify(user))

  // const users = JSON.parse(localStorage.getItem('user'))
  // console.log(users)

  // const age = localStorage.getItem('age')
  

  // const [num,setNum] = useState(0)
  // const count = ()=>{
  //   setNum(num+1)
  // }
  return (
    <div className='box'>
     <button onClick={getData} className='btn'>click!</button>
     <h1 onClick={settingId}>my is is {id}</h1>
    </div>
  )
}

export default App
