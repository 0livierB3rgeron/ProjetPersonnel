import { Badge, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { IAnimal } from "../models/animal";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import 'reactjs-popup/dist/index.css';
import DeleteIcon from '@mui/icons-material/Delete';


interface IFicheAnimal{
    animal: IAnimal
}



export default function FicheAnimaux(props: IFicheAnimal){

   const handleFavorite = () =>{
    axios.put('http://127.0.0.1:3000/animal/favoris',{
        "animal": {
            "nom": props.animal.nom,
            "espece": props.animal.espece,
            "habitat": props.animal.habitat,
            "nourriture": props.animal.nourriture,
            "image": props.animal.image,
            "description": props.animal.description,
            "favoris": true
        }
    })
    .then((response) => {
        window.location.reload();
    })
    .catch(error =>{
        console.error(error);
    })
   }


    const handleDelete = () => {
        axios.delete('http://127.0.0.1:3000/animal/delete/' + props.animal.id)
        .then((response) =>{
            if(response.status == 200){
                window.location.reload();
            }
        })
        .catch(error =>{
            
            console.error(error);
        });
    }


    
    return(
        
        <Card sx={{ width: 300, maxHeight: 775, minHeight:100}}>
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
            <CardActions sx={{objectFit: "contain", display: "flex", justifyContent:"space-between"}}>
                <IconButton size="medium" color="error" onClick={handleDelete}>
                    <Badge><DeleteIcon fontSize='medium'/></Badge>
                </IconButton>
                <IconButton size="medium" color="primary" onClick={handleFavorite}>
                    <Badge><FavoriteIcon fontSize='medium'/></Badge>
                </IconButton>
            </CardActions>
        </Card>
    )
}