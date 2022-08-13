import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";


export default function NavBar() {
    return (
      <Box sx={{ flexGrow: 1 , marginBottom:"100px"}}>
        <AppBar position="static">
          <Toolbar>
            <Link
              to={`/`}
              style={{color:"white",textDecoration:"none"}}
            >
            <Button 
              color="inherit"
            >Home Page</Button>
            </Link>
            
            
            <Link
              to={`/drinks`}
              style={{color:"white",textDecoration:"none"}}
            >
            <Button 
              color="inherit"
            >Recipes</Button>
            </Link>
            
          </Toolbar>
        </AppBar>
      </Box>
    );
  }