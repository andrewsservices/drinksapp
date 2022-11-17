import Box from '@mui/material/Box';

import NavBar from './NavBar'
import LocalBarIcon from '@mui/icons-material/LocalBar';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LiquorIcon from '@mui/icons-material/Liquor';

import { useParams } from 'react-router-dom';
import { ContentBox } from './StyledComponents';

export default function DrinkDetails({drinks}){

let {id} = useParams();   

const selectedDrink = drinks.find(drink=>{
    if(drink.idDrink === id){
        return true
    } else {
        return false;
    }
})
    

console.log(selectedDrink)

    return(
        <Box sx={{display:"flex",flexDirection:"column",width:"100%"}}>
        <NavBar/>
            <Box sx={{flexDirection:"column", width:"80%",margin:"0 auto",marginBottom:"100px"}}>
            
                <ContentBox sx={{display:"flex",flexDirection:"column",alignItems:"center",width:"60%",margin:"0 auto",padding:0}}>
                    <h1>{selectedDrink.strDrink}</h1>
                </ContentBox>
                <Box sx={{display:"flex",justifyContent:"space-between",height:"500px",marginTop:"100px"}}>
                    <img 
                        src={selectedDrink.strDrinkThumb}
                        style={{width:"40%",borderRadius:"50%"}}
                    />
                    <ContentBox
                        sx={{width:"40%",padding:"0 5%",display:"flex",flexDirection:"column",justifyContent:"center"}}
                    >   
                         {selectedDrink.strAlcoholic === "Alcoholic" ? 
                            <Box 
                                sx={{display:"flex",alignItems:"center"}}
                                ><LocalBarIcon/><p>Contains Alcohol</p>
                            </Box>
                            :  
                            <Box 
                                sx={{display:"flex",alignItems:"center"}}
                                ><NoDrinksIcon/><p>Does Not Contain Alcohol</p>
                            </Box>
                            }
                        <Box sx={{display:"flex",alignItems:"center"}}>
                            <EmojiEventsIcon/><p>{selectedDrink.strGlass}</p>
                        </Box>
                        <Box>
                            <Box sx={{display:"flex",alignItems:"center"}}>
                                <LiquorIcon/><p style={{marginLeft:"10px"}}>Ingredients: {selectedDrink.strIngredient1},{selectedDrink.strIngredient2},{selectedDrink.strIngredient3}</p>
                            </Box>
                           
                        </Box>
                        
                        <h2>Directions:</h2>
                        <p>{selectedDrink.strInstructions}</p>
                    </ContentBox>
                </Box>
             </Box>
        </Box>
    )
}
