import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    
    #title{
        width 80%;
        height: 2rem;
        border-radius: 0.5rem;
        border: none;
        &:focus{
            outline: none;
        }
 
    }

    #body{
        height: 8rem;
        width: 80%;
        border-radius: 0.5rem;
        border: none;
        &:focus{
            outline: none;
        }
    }

    button{
        width: 40%;
        padding: 1rem;
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.toggleBorder};
        border: none;
        border-radius: 1rem;
        display: block;
        margin: 1rem auto;

    }
`