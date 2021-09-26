import styled from 'styled-components';

export const Searchbar = styled.div`
    width: 100%;
    height: 4rem;

    display: flex;
    justify-content: center;

    background-color: #f2f2f2;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px,
        rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const Search = styled.input`
    width: 80%;
    margin: 0.5rem;

    outline: none;
    background: none;

    border: none;
    border-bottom: 1px solid gray;
`;
