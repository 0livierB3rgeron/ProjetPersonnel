import { Badge, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { IAnimal } from "../models/animal";
import axios from "axios";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

interface IFicheAnimal{
    animal: IAnimal
}

export default function FicheAnimaux(props: IFicheAnimal){

   

    const handleDelete = () => {
        axios.delete('http://127.0.0.1:3000/animal/delete/' + props.animal.id)
        .then((response) =>{
            if(response.status == 200){
                
            }


        })
        .catch(error =>{
            
            console.error(error);
        });
    }


    
    return(
        
        <Card sx={{ width: 300,  height: 550,  padding: 5}}>
            <CardMedia 
            component={"img"}
            sx={{objectFit: "contain"}}
            image={props.animal.image}
            />
            <CardContent style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography gutterBottom variant="h6" component="div">
                    Nom : {props.animal.nom}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton size="medium" color="warning" onClick={handleDelete}>
                    <Badge><DeleteIcon fontSize='medium'/></Badge>
                </IconButton>
            </CardActions>
        </Card>
    )
}