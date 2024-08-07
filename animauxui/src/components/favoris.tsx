import { useEffect, useState} from 'react';
import {  Unstable_Grid2 as Grid } from '@mui/material';
import Appbar from './appBar';
import axios from 'axios';
import { IAnimal } from '../models/animal';
import FicheFavoris from './ficheFavoris';

export default function Favoris(){

    const [animaux, getAnimaux] = useState<IAnimal[]>([]);
  
    useEffect(()=>{
        axios.get('http://127.0.0.1:3000/animal/fav')
        .then((response) =>{
            getAnimaux(response.data.animal)
        })
        .catch((error) =>{
            console.log(error);
        })
    }, []);
   

    return(
        <>
        <Appbar/>
        <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: 10 }}>
            {animaux &&
            animaux.map((animal) => {
                return (
                <Grid sx={{paddingTop: '50px'}}>
                    <FicheFavoris animal={animal}/>
                </Grid>
                );
            })}
        </Grid>
        </>
    );
}