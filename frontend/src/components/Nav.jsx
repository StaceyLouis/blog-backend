import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;


`
const Navs = styled.nav`
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        padding: 1rem;


        a{
            text-decoration: none;
            color: ${({ theme }) => theme.text};
            margin: 3rem;
        }

        input{
            border: none;
            border-bottom: 1px solid grey;
            background-color: transparent;
        }
`

const Nav = () => {
  return (
    <Container>
        <Navs>
            <img src='/'/>
            <div>
            <a href='/'>Home</a>
            <a href='blogs'>Blog Posts</a>
            <a href='profile'>Profile</a>
            </div>
            <input placeholder="Search"/>
        </Navs>
        <hr/>
    </Container>
  )
}

export default Nav