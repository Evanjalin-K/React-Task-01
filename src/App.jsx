import Card from "./components/Card"
import "./App.css"

const App = () => {

  const cardData =[
    {
      plan: "FREE",
      price:0, 
      listData: [
        {title:"Single User", completed:true },
        {title:"50GB Storage", completed:true},
      {title:"Unlinited Public Projects",completed:true},
        {title:"Community Access", completed:true },
      {title:"Unlimited Private Project", completed:false},
        {title:"Dedicated Phone Support", completed:false},
        {title:"Free Subdomain", completed:false},
        {title:"Monthly Status Report", completed:false}
      ]
    },
    {
      plan: "PLUS",
      price:9, 
      listData: [
        {title:"5 User",completed:true} ,
          {title:"50GB Storage",completed:true},
        {title:"Unlimited Public Projects",completed:true},
        {title:"Community Access", completed:true},
        {title:"Unlimited Private Project", completed:true},
        {title:"Dedicated Phone Support", completed:true},
        {title:"Free Subdomain", completed:true},
        {title:"Monthly Status Report",completed:false }
      ]
    },
    {
    plan: "PRO ",
    price:49, 
    listData: [
      {title:"Unlimited User", completed:true},
      {title:"50GB Storage",completed:true}, 
      {title:"Unlimited Public Projects",completed:true},
      {title:"Community Access", completed:true},
      {title:"Unlimited Private Project",completed:true},
      {title:"Dedicated Phone Support", completed:true},
      {title:"Free Subdomain", completed:true},
      {title:"Monthly Status Report", completed:true}
    ]
  }
]

return (
  
    <div className='container'>     
        {
          cardData.map((data, index) =>(
            <Card
            key= {index}
            data = {data}
            />
          ))
        }  
        </div>
       )
}

export default App

