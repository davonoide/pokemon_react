import React, {useState, useEffect} from "react";
import { Grid, Card, CardContent, Typography, CircularProgress, Container, CardActionArea, Button } from "@mui/material";

const Pokemon  = () => {

    const [Pokemons, setPokemons] = useState([]);

    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null); //aqui es null porque vamos a manejar el error y el error es un objeto

    const [PokemonSelect, setPokemonSelect] = useState(null); 
    useEffect(()=>{

        const getPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
            if(!response.ok){
                console.log("Error")
            }else{
                const data = await response.json();
                setPokemons(data.results);
                console.log(data);
                //console.log(data.next)
            }
            

        };


        getPokemons();

    },[]);

    const findPokemonPosition = (name) => {
        const position = Pokemons.findIndex(pokemon => pokemon.name === name);
        return position;
    };

    const fetchDetailPokemon = async(id) =>{
        //` Backtick
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if(!response.ok){
            console.log("Error")
        }else{
            const data = await response.json();
            setPokemonSelect(data);
            console.log(data);
        }

    };

    return (
        <div>
            <h1>Pokemon list</h1>
            <ul>
                {Pokemons.map((Pokemon, index) =>(
                    <li key = {index}>
                        <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4" component={"div"}>{Pokemon.name}</Typography> 
                            <Button color="secondary" variant="contained" onClick={()=>fetchDetailPokemon(index+1)}> Select</Button>
                            </CardContent>
                        </Card>
                    </li>
                ))}
            </ul>
            <hr/>
            <Typography variant="h2" component={"div"}>Pokemon Detail</Typography>
            {/* Este elemento aparece solamente cuando PokemonSelect es diferente al NULL*/}
            <Container>
            {PokemonSelect && 
            <div>
            
                <Card variant="outlined">
                    <CardContent>
                    <Typography variant="h5" component={"div"}>Name:{PokemonSelect.name}</Typography>
                    <img src= {PokemonSelect.sprites.front_default}/>
                    <p>Height: {PokemonSelect.height}</p>
                    <p>Weight: {PokemonSelect.weight}</p>
                    </CardContent>
                </Card>
            </div>} 
            </Container>
            
        </div>
    );
};



export default Pokemon;