import styled from 'styled-components';

export const Card = styled.div`
    width: 30%;
    overflow: hidden;

    margin: 2rem auto;
    padding: 1rem 0;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: rgb(18, 18, 18);
    color: rgb(255, 255, 255);
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem 0;
`;

export const CardTitle = styled.h1`
    font-size: 1rem;
    font-weight: bold;

    text-align: center;
`;

export const CardPhoto = styled.img`
    width: 100%;
    height: 90%;
    object-fit: cover;

    margin: 0.5rem 0;
`;
