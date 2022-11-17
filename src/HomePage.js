
import { Box } from '@mui/material';
import AgeSelector from './AgeSelector'

import { ContentBox } from './StyledComponents';

export default function HomePage({setSubmittedBirthDate}) {
  return (
    <Box sx={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <ContentBox sx={{width:"50%"}}>
        <AgeSelector
            setSubmittedBirthDate={setSubmittedBirthDate}
        />
    </ContentBox>
    </Box>
  );
}
