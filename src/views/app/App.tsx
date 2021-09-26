import * as React from 'react';

import styled from 'styled-components';

import DrinkCards from 'components/DrinkCards/DrinkCards';

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    aligni-tems: center;
`;

const App = () => (
    <Wrapper>
        <DrinkCards />
    </Wrapper>
);

export default App;
