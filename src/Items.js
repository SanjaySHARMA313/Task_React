import React from 'react'
import './Items.css'

function Items(props) {
    return (
        <div className="items">
            
         <div className="details"> <div className="Id">char_id: {props.character.char_id} </div>
           <div className="Name">Name: {props.character.name}  </div>
         
           <div >birthday:{ props.character.birthday} </div>
           <div >occupation:{props.character.occupation} </div>
           <div > status: {props.character.status } </div>
           <div >nickname: {props.character.nickname} </div>
           <div >appearance: {props.character.appearance} </div>
           <div >season{ props.character.portrayed} </div>
           <div>quotes {props.character.quotes} </div></div>
           <div className="image">   <img height="200px" width="180px" src={props.character.img}/></div>
        
        </div>

    )
}

export default Items
