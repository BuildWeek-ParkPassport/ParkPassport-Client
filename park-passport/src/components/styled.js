import React from "react";
import styled from "styled-components";

export const FormHold = styled.div`
font-size: 1.5rem;
margin: 0 auto;
width: 40%;
height: 60%;
margin-top: 5%;
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

export const SearchHold = styled.div`
font-size: 1.5rem;
margin: 0 auto;
width: 35%;
height: 60%;
margin-top: 2%;
box-shadow: 0 3px 6px 1px rgba(80, 78, 80, 0.1);


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

export const FormTitle = styled.h1`
color: #504e50;
background: #03DAC5;
padding: 1% 0;
margin: 0;
font-size: 1.5rem;
width: 100%;
`;

export const FormP = styled.p`

padding: 0 1%;
color: #504e50;
font-size: .9rem;
`;

export const FormLocation = styled.h5`
color: #504e50;
padding-top: 3%
`;


export const Formy=styled.form`
display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;

`;

export const InputHold = styled.div`
display: flex;
  margin: 4% auto;
  width: 100%;
 

  @media (max-width: 500px){
      flex-direction: column;
  }
`;

export const TextInput = styled.input`
  width: 90%;
  margin: 0 auto;
  font-size: 1rem;
`;

export const SubmitBtn = styled.button`
color: #494949;
  background: #ffffff;
  text-decoration: none;
  margin: 3% 0;
  padding: .5% 2%;
  border: 2px solid #494949;
  font-size: 1.25rem;
  margin: 3% auto;
  width: 50%;
  transition: all 0.4s ease 0s;
  margin-bottom: 5%;

  &:hover{
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    transition: all 0.4s ease 0s;
  }
  
`;
