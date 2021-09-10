import React from 'react';
import {Menu} from "antd"
import {Link} from "react-router-dom"
//import {ReactComponent as Logo} from "../../assets/images/logo.svg"
import "./MenuTop.scss"

export default function MenuTop(){

return(

<div className="menu-top">

<Menu  
theme="dark"
mode="horizontal"
defaultSelectedKeys={["1"]} //para que?
style={{ lineHeight:"64px" }}
>

    <Menu.Item key="1">
       <Link to="/api"className="menu-top__link">home</Link>
    </Menu.Item>
 

</Menu>



</div>
)}