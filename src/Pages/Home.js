import React from "react"
import cneFetch from "../hooks/cneFetch"
import { Col, Row } from "antd"


export default function Home(){


    const Usuario = cneFetch("16754378")
     
     console.log(Usuario)

      return (<div>
    <Row>
        <Col span={12}>
   
        </Col>

    </Row>
    </div>)


}
