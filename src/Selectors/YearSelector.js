import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const YEARS = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]


export default function YearSelector({year,setYear}){

    const handleChange = (event) => {
        setYear(event.target.value);
      };
        
    

    return(
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChange}
        >
            {YEARS.map((y)=>(
                <MenuItem 
                    key={y}
                    value={y}>
                {y}</MenuItem>
            ))}
        </Select>
      </FormControl>
    )
}