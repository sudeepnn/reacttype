import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addplauyerlist, calcolatecashcost, calcolatecashlesscost, caluculatetotal, deleteplauyerlist, getallplauyerlist, getuserwithmaxcost, playertype, salesdata, updateplauyerlist } from './funtionimpl';
import axios from 'axios';

function App() {

  const [data,setData]=useState<salesdata[]>([])

  const [name,setName]=useState('')
  const [dis,setDis]=useState('')
  const [players,setPlayers]=useState<playertype[]>([])

  useEffect(()=>{
       (async()=>{
        const respone=await axios.get('/sales.json')
        setData(respone.data)
       })()

       setPlayers(getallplauyerlist())
  },[])


  function handlenamechange(event:  React.ChangeEvent<HTMLInputElement>): void {
    const name=event.target.value
    setName(name)
    console.log('handlenamechange',name)
  }
 function handleradd(event:  React.MouseEvent<HTMLButtonElement, MouseEvent>):void{
  const newplayer={
    name,
    dis
  }
  const updatedlist=addplauyerlist(newplayer)
  setPlayers([...updatedlist])
  
 }

  function handledischange(event:  React.ChangeEvent<HTMLInputElement>): void {
    const dis=event.target.value
    setDis(dis)
    console.log('handledischange',dis)
  }
  function handlechange(event:  React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setPlayers(getallplauyerlist())
    console.log('handlechange',players)
  }
  function update(event:  React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    // const newdata=
    setPlayers([...updateplauyerlist({name:name,dis:dis})])
  }
  function detele(event:  React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setPlayers([...deleteplauyerlist(name)])
  }

  return (
    <div className="App">
     <div>Prject 1</div>
     <div>
        total cost: {caluculatetotal(data)}
      </div>
      <div>
        cashless total cost: {calcolatecashlesscost(data)}
      </div>
      <div>
        cash total cost: {calcolatecashcost(data)}
      </div>
      <div>
        bro wiht max cost: {JSON.stringify(getuserwithmaxcost(data))}
      </div>

      <div>project 2</div>
      
      all player list={JSON.stringify(players)}
      <input type="text" onChange={handlenamechange} placeholder='name' />
      <input type="text" onChange={handledischange}  placeholder='dis' />
      

      <button onClick={handleradd}>add player</button>
      <button onClick={handlechange}>submit</button>
      <button onClick={update}>update</button>
      <button onClick={detele}>delete</button>
    </div>
  );
}

export default App;
