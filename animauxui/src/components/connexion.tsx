import React from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


/**
 * 
 * LOGIQUE DE CONNEXION EMPRUNTER DE ETIENNE RIVARD ENSEIGNANT CÉGEP DE VICTORIAVILLE
 * SOURCE:  https://web3.kerzo.ca/authentification/ 
 * 
 */
export default function Connexion(){
    
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
        
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('email'))
        logInWithEmailAndPassword(
        data.get('email') as string,
        data.get('password') as string
        );
    };
    
    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) navigate('/acceuil');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);


        return (
          <Grid container justifyContent="center" alignItems="center" >
            <Grid item xs={10} sm={6} md={4} container justifyContent="center" alignItems="center">
              <Paper elevation={3} style={{ padding: 20 , height: '50vh', width:'100vh', backgroundColor: "white" }} >
                <Typography variant="h5" gutterBottom>
                  Connexion
                </Typography>
                <form onSubmit={handleSubmit}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="courriel"
                name="email"
                autoComplete="email"
                autoFocus
                  />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Connexion
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        );
}