import "./Card.css";

const Card = (props) => {

const allItemCompleted = props.data.listData.every(list => list.completed)
 
  
  return (
    <div className="card">
      <p className="plan text-muted">{props.data.plan}</p>
        <h3 className="header">${props.data.price}/month</h3>
        <hr/>
        <div className="content">
        {
        props.data.listData.map((list, index) => (
       <p key={index} className={list.completed ? "" : "text-muted"}>
        {list.completed ? "✔" : "✖"} {list.title} </p>

)
  )     
  }    
    </div>
    
    <button className={`btn btn-primary ${allItemCompleted ? "" : "btn-blurred" }`}>Button</button>
    </div>
  )
}

export default Card