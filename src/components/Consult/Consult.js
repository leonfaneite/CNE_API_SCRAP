import React ,{useState, useEffect}from "react"
import JSSoup from 'jssoup'; 
import cneFetch  from "../../hooks/cneFetch";
import {Input ,Button} from "antd"
import "./Consult.scss"
import {API_URL} from "../../utils/Constants"

const { Search } = Input;




export default function Consult(props){

  
  
  
  const [searchVotante , setSearchVotante] = useState("")
  const [data , setData] = useState("")

////////////////////////////////////////////////////////////////////////////////


  

  
    //useEffect(()=>{
//
    //  userFetch()
//
    //},[])

      
     const  userFetch = async()=>{

        const url = `${API_URL}${searchVotante}`
          try{
              console.log("buscando...")
              const res = await  fetch(url);
              const json = await res.json();
              setData(json);
              console.log(data)
              setSearchVotante("")
              
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


/////////////////////////////////////////////////////////////////////////////////7


   
  return (

<>

<h1>Consultar Cedula</h1>
 
         
<Search placeholder="input search text"  value={searchVotante}  onChange={handleChange} onSearch={userFetch}  />
  

 </>
        


    )
}



