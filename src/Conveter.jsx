import React, { useState } from 'react';
import styled from 'styled-components';

const Converter = () => {

    const [decimalnumber, setDecimalNumber]=useState();
    const [binaryDigitis, setBinaryDigitis]=useState();
   
    const decimalToBinary = () => {

        //convert user's input string to number
        let stringtoInt = parseInt(decimalnumber, 10);

        //Array for store binary digits
        let binarydigits = [];

        //Calculation for convert decimal number to binary number
        while ( stringtoInt >= 1) {

            let remainder = stringtoInt % 2;
            //push remainder to binaryDigits array
            binarydigits.push(remainder)
            //rounder to natural number after dividing
            stringtoInt = Math.floor(stringtoInt / 2);
        }

        //reverse the array and join as string display
        let binaryNumber = binarydigits.reverse().join('');
        setBinaryDigitis(binaryNumber);
    }
    return (
        <FormContainer>

            <div className="field">
                <h1>Decima To Binaray</h1>
            </div>
            <form>
               <input 
                type='text'
                placeholder='Enter a decimal number'
                name='decimalnumber'
                onChange={(e) => setDecimalNumber(e.target.value)}
                />

            </form>
            <button type='submit' onClick={decimalToBinary}>
                Convert
            </button>
          
            <div className="reslut">
                <h2>Answer</h2>
            </div>
            <h3>{binaryDigitis}</h3>
            
        </FormContainer>
    )
}

const FormContainer = styled.div`
    height: 100vh;
    weight: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #101010;
    .field {
    color: white;
    }
    .reslut {
    color: white;
    }
    
  h3 {
    color: white;
    border: solid 1px; 
    border-radius: 1rem;
    padding: 1rem;
    background-color: #333; 
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      border-radius: 2rem;
      padding: 3rem 5rem;
      
    input {
        padding: 1rem;  
        }
    }
  
`;
export default Converter;