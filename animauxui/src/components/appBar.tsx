import {Toolbar, IconButton, Badge} from "@mui/material"
import AddBoxIcon from "@mui/icons-material/AddBox"
import { Link } from "react-router-dom"
import { AppBar } from '@mui/material';
import Face6Icon from '@mui/icons-material/Face6';
import { logout } from "../firebase";

import PetsIcon from '@mui/icons-material/Pets';





export default function Appbar(){

    return(
        <AppBar position="fixed" sx={{backgroundColor: '#4caf50',}}>
        <Toolbar sx={{ flexGrow: 1, flexDirection: "row",  alignItems:"center", justifyContent:"space-between", justifyItems:"center"}}>
            <Link to={{pathname: "/formulaire"}}>              
                <IconButton color="error">
                    <Badge sx={{color:'white'}}><AddBoxIcon color="inherit" fontSize='large'/> Ajouter</Badge>
                </IconButton>
            </Link>
            <Link  to={{pathname:"/"}}  >
            <Badge sx={{color:'white', fontSize:"large"}}><PetsIcon color="inherit" fontSize='large'/> Animaux</Badge>
            </Link>
            <Link to={{pathname:"/connexion"}}>
                <IconButton color="error" onClick={logout}>
                    <Badge sx={{color:'white'}}><Face6Icon fontSize='large'/> Connexion/Deconnexion </Badge>
                </IconButton>
            </Link>
        </Toolbar>
    </AppBar>
    );

}