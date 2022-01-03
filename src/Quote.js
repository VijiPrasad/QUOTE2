import React from 'react'
import {useState} from 'react'
const Quote=()=> {
  const[Quote,setQuote]=useState([""])
  const[Author,setAuthor]=useState([""])
  const[Name,setName]=useState("")
  const addQuote = (e)=>{
    
  
    e.preventDefault();
    setQuote(prev=>[...prev,task])
    setTask("")
  }
  const addAuthor =(e)=>{
    e.preventDefault();
    setAuthor(prev=>[...prev,task])
    setName("")
    }
  const box = [<input type="text" placeholder="Add Here" />,<button>Delete</button>]
     
      const [task, setTask] = useState("")
       return(

      
      
      
      
      <div className ="quote_style">
          <div>
          {Author.map(Author=><div>{Name}</div>)}
          {Quote.map(Quote=><div>{Quote}</div>)}
          </div>
          
           <div>
            
          
            
            
              
        

          <form onSubmit={addQuote}>
          Enter Your Name
           <input type="text"
           value={Name}
           onChange={e=>setName(e.target.value)}/>
           
            Enter Your Quote

            
          <input type="text"
          
          value={task}
          onChange={e=> {setTask(e.target.value)}}/>
          
          <button>Submitt</button>
          </form>
          </div>
        </div>
     
    )
       }
    export default Quote
      
