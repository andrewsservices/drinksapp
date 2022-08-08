import {useState} from 'react'
import Box from '@mui/material/Box';


import Button from '@mui/material/Button';

import MonthSelector from './Selectors/MonthSelector';
import DateSelector from './Selectors/DateSelector';
import YearSelector from './Selectors/YearSelector'

export default function AgeSelector({setSubmittedBirthDate}) {


const [month, setMonth] = useState('');
const [date, setDate] = useState('')
const [year,setYear] = useState('')
  

  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
        <h1>Please Enter Birthdate Below</h1>
        <Box sx={{display:"flex"}}>
        <MonthSelector
            month={month}
            setMonth={setMonth}
        />
        <DateSelector
            date={date}
            setDate={setDate}
        />
        <YearSelector
            year={year}
            setYear={setYear}
        /> 
        </Box>
        
  
        
        
        
      <Button sx={{width: "50%",margin:"20px auto"}}
        onClick={()=>setSubmittedBirthDate([month,date,year])
        }
        variant="contained"
        >Submit Date
        </Button>

    </Box>
  );
}
