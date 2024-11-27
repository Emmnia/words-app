import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;  
    margin: 0 auto;
    padding: 20px;
    width: min(95%, 1170px);
    min-height: 240px;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
`
export const FormHeading = styled.h2`
    margin-bottom: 30px;
    text-align: center;
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`
export const FormInputsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    align-content: center;
`
export const FormInputWrapper = styled.div`
    text-align: center;
`
export const FormInput = styled.input`
    padding: 10px 15px;
    text-align: center; 
    border-radius: 5px;
    border: 1px solid gray;
    font-family: "Wix Madefor Display", sans-serif;
`
export const FormError = styled.p`
    color: #E55D87;
`
export const FormSubmitWrapper = styled.div`
    margin-top: 20px;
    align-self: flex-end;
`
export const FormSubmit = styled.input.attrs({ type: 'submit', value: 'ADD WORD' })`
    padding: 10px 15px;
    text-align: center; 
    font-family: "Wix Madefor Display", sans-serif;
    letter-spacing: 2px;
    color: white;
    transition: 0.5s;
    background-image: linear-gradient(90deg, #e075af 0%, #bb80b9 21%, #9e88c1 48%, #7494cc 81%, #3fa3da 100%);
    background-size: 200% auto;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.19);
    border-radius: 50px;
    border: none;
    display: block;
    cursor: pointer;

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        border: 1px solid #E55D87;
    }
`
export const FormNote = styled.p`
    margin-top: 5px; 
    font-size: 12px;
    color: #888; 
`;