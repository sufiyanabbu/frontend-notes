
const Test = (props) => {
    console.log(props)
  return (
    <div>
      <h3>My Age is {props.Age}</h3>
      <h3>My name is {props.Name}</h3>
    </div>
  )
}

export default Test
