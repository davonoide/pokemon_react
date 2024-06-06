import React from "react";
import ReactPlayer from "react-player";
import Users from './Users/Users';
import Pokemon from './Pokemons/Pokemons';
import { Grid, Card, CardContent, Typography, CircularProgress, Container, CardActionArea, Button, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        
      <img src="https://media1.tenor.com/m/ZAMoMuQgf9UAAAAC/mapache-pedro.gif" height={60}/>
      <img src="https://i.imgur.com/8Kx3NEY.jpeg" height={60}/>
      
      </Container>
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <ReactPlayer url={"https://www.youtube.com/watch?v=Rsv2VkoIpk0"}/>
          </Box>

      </Container>


      
      
      </header>
      
      <Pokemon />
    </div>
  );
}

export default App;
