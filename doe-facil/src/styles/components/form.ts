import styled from "styled-components";

export const StyleFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  margin-top: 2.5rem;

  border-radius: 12px;

  width: 80%;
  height: 380px;

  background-color: var(--Color-primary-50);
  color: var(--grey-0);

  label {
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media (min-width: 659px) {
    height: 75%;
    width: 60%;

        
        label{
            font-size: 1.6rem;
        }


    }
    
`

export const StyleFormRegister = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    margin-top: 2rem;

    border-radius: 12px;

    width: 80%;
    min-height: 400px;

    padding: 2rem .5rem;

    margin-bottom: 1.5rem;


    background-color: var(--Color-primary-50);
    color: var(--grey-0);


    label{
        font-size: 1rem;
        font-weight: 600;
    }

    @media (min-width: 659px) {

        min-height: 575px;
        width: 60%;
        margin-bottom: 0;
        padding-top: 2.5rem;
        
        label{
            font-size: 1rem;
        }


    }
    
`

export const Input = styled.input`
  padding: 0.6rem;

  border-radius: 6px;
  border: var(--grey-0);

  ::placeholder {
    font-size: 0.8rem;
  }

  @media (min-width: 659px) {
    padding: 1rem;

    ::placeholder {
      font-size: 1rem;
    }

    :focus {
      border: none;
    }
  }
`;

export const Button = styled.button`
    padding: 0.5rem;

    width: 80%;

    border-radius: 6px;
    border: var(--grey-20);

    background-color: var(--grey-20);
    color: var(--Sucess);

    font-size: 1rem;
    font-weight: 600;

    margin: 1.5rem 0rem;

  @media (min-width: 659px) {
      
      padding: .3rem;
      margin-top: 1.5rem;
      font-size: 1.45rem;
  }
`
