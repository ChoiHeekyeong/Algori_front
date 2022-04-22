import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div` 
    /* border: 1px solid blue; */
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 40vw;
   height: 5vw;
`;

const Label = styled.div`
    /* border: 1px solid red; */
    font-size: 2rem;
    font-weight: 900;
    color: black;
    margin: 0.25rem 1rem;
    width: 25%;
    
`;

const Input = styled.input`
    width: 100%;
    /* border: 1px solid gray; */
    outline: none;
    border-radius: 10px;
    line-height: 3rem;
    font-size: 1.8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest}/>
    </Wrapper>
);

export default InputWithLabel;