import {Toolbar, IconButton, Badge} from "@mui/material"
import AddBoxIcon from "@mui/icons-material/AddBox"
import { Link } from "react-router-dom"
import { AppBar } from '@mui/material';
import Face6Icon from '@mui/icons-material/Face6';
import { logout } from "../firebase";
import StarIcon from '@mui/icons-material/Star';
import PetsIcon from '@mui/icons-material/Pets';





export default function Appbar(){

    return(
        <AppBar position="fixed" sx={{backgroundColor: "violet"}}>
        <Toolbar sx={{ flexGrow: 1, flexDirection: "row",  alignItems:"center", justifyContent:"space-between", justifyItems:"center"}}>
            
            <Link to={{pathname: "/formulaire"}}>              
                <IconButton color="error">
                    <Badge sx={{color:'white'}}><AddBoxIcon color="inherit" fontSize='large'/> Ajouter</Badge>
                </IconButton>
            </Link>

            <Link to={{pathname:"/acceuil"}} >
            <IconButton color="error">
                <Badge sx={{color:'white'}}><PetsIcon color="inherit" fontSize='large'/>Animaux</Badge>    
            </IconButton>
            </Link>

            <Link to={{pathname:"/favoris"}}>
                <IconButton color="error">
                    <Badge sx={{color:'white'}}><StarIcon fontSize='large'/>Favoris</Badge>
                </IconButton>
            </Link>

            <Link to={{pathname:"/"}}>
                <IconButton color="error" onClick={logout}>
                    <Badge sx={{color:'white'}}><Face6Icon fontSize='large'/></Badge>
                </IconButton>
            </Link>



        </Toolbar>
    </AppBar>
    );

}