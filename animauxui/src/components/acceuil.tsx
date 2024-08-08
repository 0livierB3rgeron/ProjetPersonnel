import { useEffect, useState} from 'react';
import {  Unstable_Grid2 as Grid } from '@mui/material';
import Appbar from './appBar';
import axios from 'axios';
import { IAnimal } from '../models/animal';
import FicheAnimaux from './ficheAnimaux';

export default function Acceuil(){

    const [animaux, getAnimaux] = useState<IAnimal[]>([]);
  
    useEffect(()=>{
        axios.get('http://127.0.0.1:3000/animal')
        .then((response) =>{
            getAnimaux(response.data.animal)
        })
        .catch((error) =>{
            window.alert("Aucun animal pour l'intant")
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
                    <FicheAnimaux animal={animal}/>
                </Grid>
                );
            })}
        </Grid>
        </>
    );
}