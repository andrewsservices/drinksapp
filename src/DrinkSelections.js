import { ContentBox } from './StyledComponents';

import DrinkSelector from './DrinkSelector'

export default function DrinkSelections({drinks}){


    return(
        <ContentBox sx={{width:"60%", alignItems:"center"}}>
            {drinks.map((drink)=>(
                <DrinkSelector
                    key={drink.idDrink}
                    drink={drink}
                />
            ))}
        </ContentBox>
    )
}