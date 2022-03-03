import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Drawer,List, ListItem, ListItemText } from "@mui/material";
import DrawerCss from '../issets/css/DrawerCss.css'


const DrawerBar =(props) =>{

    return (
       <div >   
       <Navbar/>      
       
            
                <Drawer                
                     variant="permanent"     
                       
                >
                  <Toolbar />
                  
                    <List >
                        <Link to="/clusters" className="nameBar">
                        <ListItem button  >                          
                          <ListItemText primary={'Clusters'} />
                        </ListItem>
                      </Link>

                      <Link to="/edge" className="nameBar">
                        <ListItem button  >                          
                          <ListItemText primary={'Edge'} />
                        </ListItem>
                      </Link>

                      <Link to="/devices" className="nameBar">
                        <ListItem button  >                          
                          <ListItemText primary={'Devices'} />
                        </ListItem>
                      </Link>
                    </List>      
                  
                </Drawer>
                <Toolbar/>
                
     
            
            <h4 className="titre"> {props.titre} </h4>
                
      </div>
    )
}
export default DrawerBar;