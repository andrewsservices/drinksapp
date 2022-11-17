import {useState,useEffect} from 'react'

import Box from '@mui/material/Box';
import NavBar from './NavBar'
import DrinkCategories from './DrinkCategories'
import DrinkSelections from './DrinkSelections'
import { MainContainer } from './StyledComponents';





export default function DrinksPage({drinks}){

const [categorySelected,setCategorySelected] = useState('')

const drinkCategories = []

for(let drink of drinks){
    if(!drinkCategories.includes(drink.strCategory) ){
        drinkCategories.push(drink.strCategory)
    }
}


    return(
    <Box sx={{display:"flex",flexDirection:"column",width:"100%"}}>
        <NavBar/>
        <>
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",  width:"80%",margin:"0 auto"}}>
            <DrinkCategories
                drinkCategories={drinkCategories}
                categorySelected={categorySelected}
                setCategorySelected={setCategorySelected}
            />
            <DrinkSelections
                drinks={drinks.filter((drink)=>drink.strCategory === categorySelected)}
            />
            </Box>
            
        </>
    </Box>
        
    )
}