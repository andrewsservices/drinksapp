import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';

import { ContentBox } from './StyledComponents';


export default function DrinkCategories({drinkCategories,categorySelected,setCategorySelected}){


    return(
        <ContentBox sx={{width:"30%", alignItems:"center", height: "250px"}}>
            
            <h2>Drink Categories</h2>
            
                <MenuList>
                    {drinkCategories.map((category)=>(
                        <MenuItem
                            key={category}
                            dense
                        >
                            <ListItemText 
                                style={category === categorySelected ? {color:"#458b74"}:{}}
                                onClick={()=>setCategorySelected(category)}
                                className="category"
                            >{category}
                        </ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
        </ContentBox>
    )
}