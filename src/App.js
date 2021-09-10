import React from "react"
import {Layout} from "antd"
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import MenuTop from "./components/MenuTop"


//pages
import Home from "./Pages/Home"
import Error404 from "./Pages/Error404"

function App() {
const {Header, Content} = Layout;

  return (
    <Layout>
      <Router>
        <Header  style={{backgroundColor: 'red'}}> <MenuTop/></Header> 
       
       
       <Content>  
         <Switch>
          
          <Route path="/" exact={true}>
          <Home/>          
          </Route>
           
          <Route path="*" >
          <Error404/>               
          </Route>
        
        

        </Switch>
       </Content>

     </Router>
   </Layout>
  );
}

export default App;
