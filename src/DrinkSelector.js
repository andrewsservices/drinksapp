
import Box from '@mui/material/Box';

import { Link } from "react-router-dom";



export default function DrinkSelector({drink}){

    console.log(drink)
    return(
        <Box 
            sx={{margin: "10px 0",display:"flex",alignItems:"center",justifyContent:"space-between", height:"200px", width: "70%",borderBottom:"1px solid black" }}
        >
            <Box>
                <Link
                    style={{color:"black",textDecoration:"none"}} 
                    to={`/drink/${drink.idDrink}`}>
                    <h2 
                        className="drink-title-text">{drink.strDrink}
                    </h2>
                </Link>
                <p>Ingredients:</p>
                <ul>
                    <li>{drink.strIngredient1}</li>
                    <li>{drink.strIngredient2}</li>
                    <li>{drink.strIngredient3}</li>
                </ul>
                
            </Box>
            
            <img src={drink.strDrinkThumb} style={{height: "80%",borderRadius:"10px"}}/>
        </Box>
        
    )
}