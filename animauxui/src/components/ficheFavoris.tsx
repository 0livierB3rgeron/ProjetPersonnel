import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IAnimal } from '../models/animal';
import { Badge, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';


interface IFavorisAnimal{
    animal: IAnimal
}

export default function FicheFavoris(props: IFavorisAnimal) {

    const handleFavorite = () =>{
        axios.put('http://127.0.0.1:3000/animal/favoris',{
            "animal": {
                "nom": props.animal.nom,
                "espece": props.animal.espece,
                "habitat": props.animal.habitat,
                "nourriture": props.animal.nourriture,
                "image": props.animal.image,
                "description": props.animal.description,
                "favoris": false
            }
        })
        .then((response) => {
            window.location.reload();
        })
        .catch(error =>{
            console.error(error);
        })
       }

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, maxHeight: 725}}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.animal.image}
        title={props.animal.nom}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.animal.espece}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.animal.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.animal.habitat}
        </Typography>
      </CardContent>
      <CardActions>
            <IconButton size="medium" color="primary" onClick={handleFavorite}>
                 <Badge><FavoriteIcon fontSize='medium'/></Badge>
            </IconButton>
      </CardActions>
    </Card>
  );
}