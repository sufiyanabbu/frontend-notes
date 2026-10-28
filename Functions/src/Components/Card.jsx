
const Card = () => {
  return (
    <div className="bg-white h-full w-80 overflow-hidden rounded-3xl relative">
      <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1787681554855-45eb6a4b3129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
      <div className="absolute top-0 left-0  h-full w-full p-8 flex flex-col justify-between">
        <h1 className="text-black">Contact us</h1>
        <button className="bg-blue-950 rounded-full">CONTACT US</button>
      </div>
    </div>
  )
}

export default Card
