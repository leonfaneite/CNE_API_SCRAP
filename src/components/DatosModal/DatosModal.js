import React ,{useState} from "react"

import {Modal, Button} from "antd"


import "./DatosModal.scss"



export default function DatosModal(props){
    
       const  {data} = props

          
       console.log(data)
       console.log(typeof(data))
       const {modal, closedModal} = props
            
   
return(

<Modal
    title="Datos del Votante"
    className="modal-video"
    visible={modal}
    footer={[
        <Button key="ok" onClick={closedModal} style={{backgroundColor:"blue"}}>
          Ok
        </Button>,
     
      ]}
    >
<p><p><b>Cedula: </b><span>{data.Cedula}</span></p>
<p><b>Nombre :</b> <span>{data.Nombre}</span></p>
<p><b>Estado: </b><span>{data.Estado}</span></p>
<p><b>Municipio:</b> <span>{data.Municipio}</span></p>
<p><b>Parroquia:</b> <span>{data.Parroquia}</span></p>
<p><b>Centro:</b> <span>{data.Centro}</span></p>
<p><b>Direccion:</b> <span>{data.Direccion}</span></p>
<p><b>Mesa:</b> <span>{data.mesa}</span></p></p>

</Modal> )}







//{"Cedula":"V-16765488\n",
//"Nombre":"RHINA FLORELVIS DELGADO SOTO\n",
//"Estado":"EDO. CARABOBO\n","Municipio":"MP. DIEGO IBARRA\n",
//"Parroquia":"PQ. MARIARA\n",
//"Centro":"LICEO ANIBAL PARADISI\n",
//"Direccion":"SECTOR LA HACIENDITA IZQUIERDA AVENIDA CARABOBO. DERECHA CALLE BRION. FRENTE CALLE BRION DETRAS DE LA LOPNA EDIFICIO\n",
//"mesa":"No trabajara en mesa"}