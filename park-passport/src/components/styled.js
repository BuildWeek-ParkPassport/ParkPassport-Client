import React from "react";
import styled from "styled-components";

export const FormHold = styled.div`
font-size: 1.5rem;
border: 1px solid black;
margin: 0 auto;
width: 40%;
height: 60%;
box-shadow: 0 3px 6px 10px rgba(80, 78, 80, 0.1);

@media (max-width: 1200px){
    width: 55%;
}
@media (max-width: 800px){
    width: 70%;
}
@media (max-width: 500px){
    width: 80%;
}
`;

export const FromTitle = styled.h1`
color: #504e50;
background: #03DAC5;
padding: 1% 0;
margin: 0;
font-size: 2rem;
`;

export const Formy=styled.form`
display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  border: 1px solid red;
`;

export const InputHold = styled.div`
display: flex;
  margin: 4% auto;
  width: 100%;
  border: 1px solid blue;

  @media (max-width: 500px){
      flex-direction: column;
  }
`;

export const TextInput = styled.input`
width: 90%;
  margin: 0 auto;
`;