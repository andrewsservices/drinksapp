import AgeSelector from './AgeSelector'

import { MainContainer } from './StyledComponents';

export default function HomePage({setSubmittedBirthDate}) {
  return (
    <MainContainer>
        <AgeSelector
            setSubmittedBirthDate={setSubmittedBirthDate}
        />
    </MainContainer>
  );
}
