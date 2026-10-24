
import React from 'react'
import './Card.css'

const Card = (props) => {
  console.log(props.user)
  console.log(props.age)

  return (
    <div className="Card">
      <img src={props.img} alt={props.user} />

      <h2>
        {props.user}, {props.age}
      </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <button>Click me</button>
    </div>
  )
}

export default Card
