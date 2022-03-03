import React from "react";
import DrawerBar from "./DrawerBar";
import { Grid, styled, Paper, Container } from "@mui/material";
import DevicesCss from '../issets/css/DevicesCss.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Devices =() =>{
    return (
       <div>   
       <DrawerBar titre="Summary" />  
       <Container>
          <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item> 
                <span className="titre"> 78 % </span> <br/> Memory usage
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item> 
                <span className="titre"> 64 % </span> <br/> CPU usage 
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item> 
               <span className="titre"> 12 </span> <br/> Edge connected
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item> 
                <span className="titre"> 132 </span>  <br/>              
                Total nb of devices                
                 </Item>
               
              </Grid>
          </Grid>
       </Container>              
      </div>
    )
}
export default Devices;