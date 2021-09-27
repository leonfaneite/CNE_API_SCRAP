import React ,{useState}from "react"
import {Input ,Button} from "antd"
import "./Consult.scss"
import {API_URL} from "../../utils/Constants"

import DatosModal from "../DatosModal"

const { Search } = Input;

export default function Consult(){

  const [searchVotante , setSearchVotante] = useState("")
  const [data , setData] = useState("")
  const [modal, setModal] = useState(false)

//////////////////////////////////////////////////////////////////////
      
     const  userFetch = async()=>{

        const  url = `${API_URL}${searchVotante}`
          try{
              console.log("buscando...")
              const res = await  fetch(url);
              const json = await res.json();
              
              
              if(json.lenght != 0){
              setData(json);
              openModal()
              setSearchVotante("")

              }

          } catch(err){

              console.log(err);
              
          }

      };
    
//
/////////////////////////////////////////////////////////////////////////////////7

const handleChange = e =>{
  
  setSearchVotante(e.target.value)
  
  console.log(searchVotante)

}



const openModal = ()=>{

  setModal(true)

}

const closedModal = ()=>{
  setModal(false)
}
/////////////////////////////////////////////////////////////////////////////////7




  return (

<>
<h1>Consultar Cedula</h1>

<Search placeholder="input search text"  

className="Button"
style={{ width: 300 }}
value={searchVotante}
onChange={handleChange} 
onSearch={userFetch} />

<DatosModal
    
    data={data}
    modal = {modal}
    closedModal ={closedModal}
    />)




</>)
}