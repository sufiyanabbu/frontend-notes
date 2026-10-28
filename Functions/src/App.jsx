// import React from "react";
// import PageOne from "./Components/PageOne";

import { use, useState } from "react";

const App = () => {
  const [title,setTitle] = useState('')
  const submitHandle = (e)=>{
    e.preventDefault()
    console.log("form is submitted by",title)
    setTitle('')
  }
  return (
    <div className="m-10">
      <form onSubmit={(e)=>{
        submitHandle(e)
      }}>
        <input className='border border-gray-700 mr-10' onChange={(e)=>{
          setTitle(e.target.value)
        }} value={title} type="text" placeholder="enter your name"/>
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;

// understanding useState with an example...

// const App = () => {
//   const [arr,setArr] = useState([10,20,30])
//   const btnClicked = ()=>{
//     const newArr = [...arr]
//     newArr.push(100)
//     setArr(newArr);
//   }
//   return (
//     <div>
//       <h1>{arr}_</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App

// understanding useState

// const App = () => {
//   const [a,setA] = useState(0);
//   function incA(){
//     console.log("Increasing....");
//     setA(a+1);
//   }
//   function decA(){
//     console.log("Decreasing....")
//     setA(a-1);
//   }
//   function jump5A(){
//     setA(a+5);
//   }
//   function reset(){
//     setA(0);
//   }
//   return (
//     <div className="bg-gray-1000 h-screen w-full flex justify-center items-center flex-col gap-20">
//       <h1 className=" flex justify-center items-center h-40 w-60 text-9xl rounded-4xl border border-blue-600 bg-gray-500">{a}</h1>
//       <div className="w-full flex justify-center items-center gap-10">
//         <button onClick={incA} className="h-50 w-60 bg-gray-600 rounded-4xl border border-pink-600 font-bold text-2xl">Increase</button>
//         <button onClick={decA} className="h-50 w-60 bg-gray-600 rounded-4xl border border-pink-600 font-bold text-2xl">Decrease</button>
//                 <button onClick={jump5A} className="h-50 w-60 bg-gray-600 rounded-4xl border border-pink-600 font-bold text-2xl">Jump by 5</button>
//                                 <button onClick={reset} className="h-50 w-60 bg-gray-600 rounded-4xl border border-pink-600 font-bold text-2xl">Reset</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// Understanding hooks

// const App = ()=>{
//    const [a,setA] = useState(0);
//    const [age,setAge] = useState(21)
//    const [name,setname] = useState('sufiyan')
//    const [username,setUsername] = useState('sufi@123')

//    function changeNum(){
//     setAge(age+1);
//     setname('amolak')
//     setUsername('amlokjsi@123')
//    }

//   return (
//     <div className="bg-gray-800 h-screen w-full  flex justify-center items-center flex-col gap-10">
//       <h1 className="font-bold text-5xl  leading-relaxed">the age is {age}<br/> my name is {name}<br/> and the userName is {username}</h1>
//       <button onClick={changeNum} className="bg-gray-600 h-20 w-50 border border-pink-800 rounded-full">click</button>
//       <h1 className="rounded-4xl border border-blue-700 h-10 w-30 flex justify-center items-center bg-gray-600 ">{a}</h1>
//       <button onClick={()=> setA(a+1)} className="bg-gray-600 h-20 w-50 border border-pink-800 rounded-full">Increase</button>
//     </div>
//   )
// }

// export default App

// working with functions

// const App = () => {
//   function btnClicked() {
//     console.log("button one");
//   }
//   const btnClicked2 = () => {
//     console.log("button two");
//   };
//   function onChange(){
//     console.log("Name has changed")
//   }

//   function inputChange(){
//     console.log("the input has changed!")
//   }
//  function scrolling(){
//   console.log("this is scrolling....")
//  }

//  let a = 30;
//  function toChange(){
//   console.log(a);
//    a++;
//   console.log(a);
//  }

//   return (
//     <div onWheel={(elem)=>{
//       console.log(elem  )
//       scrolling();
//     }} className="h-screen w-full">

//       <div className="h-screen w-full bg-gray-800 p-10">
//                           <button className="h-20 w-100 bg-gray-500 border border-pink-400" onClick={toChange}>click</button>
//       </div>
//             <div className="h-screen w-full bg-gray-700">hello</div>
//                   <div className="h-screen w-full bg-gray-600">hello</div>

{
  /* <button onDoubleClick={btnClicked} className="bg-gray-500 m-5">
        CLICK HERE!
      </button>
      <button onClick={btnClicked2} className="bg-gray-500 m-5">
        CONTACT HERE!
      </button>
      <button
        onDoubleClick={function () {
          console.log("button three");
        }}
        className="bg-gray-500 m-5"
      >
        CHANGE NAME
      </button>
      <button
        onMouseEnter={function () {
          console.log("you are in danger");
        }}
        className="bg-gray-500 m-5"
      >
        DO NOT COME HERE
      </button>
      <input onChange={onChange} className="h-10 w-60 text-white m-10 p-10 border border-pink-400 backdrop-blur-md" type='text' placeholder="Enter Name"/>
            <input onChange={input} className="h-10 w-60 text-white m-10 p-10 border border-pink-400 backdrop-blur-md" type='text' placeholder="Enter Name"/> */
}

{
  /* </div>
  );
};

export default App; */
}
