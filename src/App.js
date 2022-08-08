import './App.css';
import {useState,useEffect} from 'react'

import { Routes, Route, useNavigate } from "react-router-dom";




import HomePage from './HomePage'
import Drinks from './Drinks'


function App() {

const navigate =  useNavigate() 

const [submittedBirthDate,setSubmittedBirthDate] = useState('')




useEffect(()=>{
const birthDateString = submittedBirthDate.toString()
const birthDateDate = new Date(birthDateString.replace(',',' '))
const birthDateTime = birthDateDate.getTime()

const diff_ms = Date.now()-birthDateTime
var age_dt = new Date(diff_ms);

const age = Math.abs(age_dt.getUTCFullYear() - 1970);


if(!isNaN(age)){
  console.log('age is now a number', age)
  if(age >= 21){
    navigate('/drinks')
  } else {
    alert('You are not old enough to view the drinks page.')
  }
} 


},[submittedBirthDate])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <HomePage
            setSubmittedBirthDate={setSubmittedBirthDate}
          />} 
        />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
      
    </div>
  );
}

export default App;
