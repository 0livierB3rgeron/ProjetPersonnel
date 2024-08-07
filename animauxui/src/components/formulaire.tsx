import { Badge, Button, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Appbar from './appBar';
import axios from 'axios';
import {  useState } from 'react';





export default function Formulaire(){

    const habitats = ['Amérique du nord', 'Amérique du sud', 'Europe', 'Asie', 'Afrique', 'Océanie'];


    const [nom, setNom] = useState("");
    const [espece, setEspece] = useState("");
    const [habitat, setHabitat] = useState("");
    const [nourriture, setNourriture] = useState("");
    const [description, setDescription] = useState("");
    const [image, setimage] = useState();
    
    const handleSubmit = (e: {preventDefault: () => void;}) =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:3000/animal/add',{
            "animal": {
                "nom": nom,
                "espece": espece,
                "habitat": habitat,
                "nourriture": nourriture,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1PDAz6WWS34_z9zcR5gcueGXL_3hcC0lPA&s",
                "description": description,
                "favoris": false
            }
        })
        .then((response) => {
            
            console.log('Les données villes sont:', response.data);
          })
          .catch((error) => {
            console.log('')
            console.error('erreur lors du post:', error);
          });
    };


    return(
        <>
        <Appbar/>
        <form onSubmit={handleSubmit}>
          <Paper elevation={3} style={{ padding: 20 }} sx={{backgroundColor: "lightgrey"}}>
            <Grid container spacing={3} paddingBottom={5}>
              
              <Grid item xs={12} md={6}>
              <InputLabel >Nom</InputLabel>
                <TextField value={nom} onChange={(e)=>setNom(e.target.value)} variant="outlined" fullWidth/>                
                <InputLabel>Espèces</InputLabel>
                <TextField value={espece} onChange={(e)=>setEspece(e.target.value)} variant='outlined' fullWidth />
              </Grid>
            
              <Grid item xs={12} md={6}>
              <InputLabel>Continent</InputLabel>
                <Select  label="continent" value={habitat} onChange={(e)=>setHabitat(e.target.value)} fullWidth variant='outlined' placeholder='contienn'>
                    <MenuItem value={habitats[0]}>Amérique du nord</MenuItem>
                    <MenuItem value={habitats[1]}>Amérique du sud</MenuItem>
                    <MenuItem value={habitats[2]}>Europe</MenuItem>
                    <MenuItem value={habitats[3]}>Asie</MenuItem>
                    <MenuItem value={habitats[4]}>Afrique</MenuItem>
                    <MenuItem value={habitats[5]}>Océanie</MenuItem>
                </Select>
              </Grid>
    
              <Grid item xs={12} md={6}>
                <InputLabel>Nourriture</InputLabel>
                <TextField value={nourriture} onChange={(e)=>setNourriture(e.target.value)} variant="outlined" fullWidth />
              </Grid>
    
              <Grid item xs={12} md={6}>
                <InputLabel >Description</InputLabel>
                <TextField value={description} onChange={(e)=>setDescription(e.target.value)} variant='outlined' fullWidth></TextField>
              </Grid>
    
            </Grid>
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </Paper>
        </form>
        <Link to={{pathname: "/"}}>        
            <IconButton>
                <Badge sx={{color: "white"}}><ArrowCircleLeftIcon color='success' fontSize='large' /> Retour acceuil</Badge>
            </IconButton>
        </Link>
    </>
    )
}