import React,{useState} from 'react'
import Items from './Items.js'
import "./List.css"

function List (props) {
    const[start,setStart] = useState(1)
    const[end,setEnd]=useState(10)
     const randerList=(start,end)=>{
         console.log(props.data);
         if(props.data!=null)
       return props.data.map((item,i)=>{
           if(i+1>=start && i+1<=end){
            return <Items character={item}/>
           }
           return null;
           
       })
       
     }
        const previous=()=>{
           if(start==1 )
           return null;
           setStart(start-10)
           setEnd(end-10)
        }
        const next=()=>{
           
            if(props.data.length-start < 1 )
            return null; 
            setStart(start+10)
            
            let last= props.data.length - end
            if (last>=10)
            setEnd (end+10)
            else
            setEnd (end+last)

        }
        return (
            <div className="list">
            { randerList( start,end)}  
            <div className = "navigation">
              <center className="previous">  <button onClick={ previous}>Previous</button></center>
              <center className="next">  <button onClick={next}>Next</button></center>
            </div>
                
                
                
            </div>
        )
    }


export default List


