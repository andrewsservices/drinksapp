import './App.css'; 

import {useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';


import HomePage from './HomePage'
import DrinksPage from './DrinksPage'
import DrinkDetails from './DrinkDetails'


function App() {

const [drinks,setDrinks] = useState([])  

const navigate =  useNavigate() 

const setSubmittedBirthDate = ([month,date,year]) => {

  if(month === ''||date===''||year===''){
    alert('please enter full birthdate')
  } else {
    const birthDateArray = [month,date,year]
    const birthDateString = birthDateArray.toString()
    const birthDateDate = new Date(birthDateString.replace(',',' '))
    const birthDateTime = birthDateDate.getTime()
    const diff_ms = Date.now()-birthDateTime
    var age_dt = new Date(diff_ms);
    const age = Math.abs(age_dt.getUTCFullYear() - 1970);
    console.log(age)
    if(age >= 21){
      navigate('/drinks')
      } else {
        alert('You are not old enough to view the drinks page.')
      }
  }
  
}

useEffect(()=>{
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(res=>res.json())
  .then(data=>{
    setDrinks(data.drinks)
  })
},[])



  return (
      <Box sx={{display:"flex",justifyContent:"center"}}>
      
          <HomePage
            setSubmittedBirthDate={setSubmittedBirthDate}
          />
      </Box>

  );
}

export default App;
