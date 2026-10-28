import { useEffect, useState } from "react"

const App = ()=>{

  localStorage.setItem('name','sufiyan')
  const name = localStorage.getItem('name');
  console.log(name)

  // to send data in a string form
  localStorage.setItem('user',JSON.stringify({
    id:1,
    name:'sufiyan khan',
    age:21,
  }));

  const user = localStorage.getItem('user');
  console.log(user)


  // to change a string into a project
  const mainUser = JSON.parse(localStorage.getItem('user'))
  console.log(mainUser)


  const [num,setNum] = useState(0)
  const [num2,setNum2] = useState(10)

  function getData(){
    setNum(num+1)
  }
  

  function getData2(){
    setNum2(num2+10)
  }

  useEffect(function(){
    console.log("useEffect is working....")
  },[num]);

  return (
    <div className="p-10 gap-10">
      <h1>NUM : {num}</h1>
      <h1>NUM : {num2}</h1>
      <button onClick={getData} className='h-15 w-20 bg-gray-500 active:scale-95 hover:bg-red-500 rounded-full'>click</button>
            <button onClick={getData2} className='h-15 w-20 bg-gray-500 active:scale-95 hover:bg-red-500 rounded-full'>click</button>
    </div>
  )
}

export default App