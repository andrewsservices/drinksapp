import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DATES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


export default function DateSelector({date,setDate}){

    const handleChange = (event) => {
        setDate(event.target.value);
      };
        
    

    return(
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label="Date"
          onChange={handleChange}
        >
            {DATES.map((d)=>(
                <MenuItem 
                    key={d}
                    value={d}>
                {d}</MenuItem>
            ))}
        </Select>
      </FormControl>
    )
}
