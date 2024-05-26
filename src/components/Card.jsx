import "./Card.css";

const Card = (props) => {

const allItemCompleted = props.data.listData.every(list => list.completed)
 
  
  return (
    <div className="card">
      <p className="plan textblurred">{props.data.plan}</p>
        <h3 className="header">${props.data.price}/month</h3>
        <hr/>
        <div className="content">
        {
        props.data.listData.map((list, index) => (
       <p key={index} className={list.completed ? "" : "textblurred"}>
        {list.completed ? " ✔ " : " ✖ "} {list.title} </p>

)
  )     
  }    
    </div>
    
    <button className={`btn btn-primary ${allItemCompleted ? "" : "btn-blurred" }`}>BUTTON</button>
    </div>
  )
}

export default Card;