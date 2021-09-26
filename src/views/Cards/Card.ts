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
    color: rgba(255, 255, 255, 0.7);

    transition: all ease 200ms;

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
        box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
            0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
    }
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
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '90%'};
    object-fit: cover;

    margin: 0.5rem 0;
`;

export const CardDetails = styled.div`
    padding: 1rem;
`;

export const CardDetailsFeature = styled.div`
    margin: 1rem;
`;

export const CardDetailsFeatureTitle = styled.p`
    margin: 0.2rem 0;
    font-weight: bold;
`;
