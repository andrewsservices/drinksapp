
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]


export default function MonthSelector({month,setMonth}){

    const handleChange = (event) => {
        setMonth(event.target.value);
      };
        
    

    return(
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Age"
          onChange={handleChange}
        >
            {MONTHS.map((m)=>(
                <MenuItem 
                    key={m}
                    value={m}>
                {m}</MenuItem>
            ))}
        </Select>
      </FormControl>
    )
}

