import React ,{useState} from "react"

import {Modal} from "antd"


import "./DatosModal.scss"


export default function DatosModal(props){
    
   // const  {data:{Cedula, Nombre, Estado, Municipio, Parroquia,Centro, Direccion, mesa },modal,closedModal} = props
       const  {data} = props
    
       const {modal, closedModal} = props


    console.log(data)

return(

<Modal
    title="Datos del Votante"
    className="modal-video"
    visible={modal}
    onCancel={closedModal}
    >

<p>Datos: {data}</p>

</Modal> )}

//{"Cedula":"V-16754377\n",
//"Nombre":"JOSE LEON FANEITE SUAREZ\n"
//"Estado":"EDO. FALCON\n",
//"Municipio":"MP. CARIRUBANA\n",
//"Parroquia":"PQ. SANTA ANA\n",
//"Centro":"ESCUELA BOLIVARIANA VÍA SANTA ANA\n"
//"Direccion": "CASERÍO VIA SANTA ANA FRENTE CALLE LA ESCUELA. IZQUIERDA SENDERO SECTOR LA GLORIA PANADERIA EL JEFECITO CASA\n",
//"mesa":"No trabajara en mesa"