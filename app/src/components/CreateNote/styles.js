import styled from '@emotion/styled'
import { popupScale } from 'styles/animations'
import { GlobalStyles } from 'styles/globalStyles'
import { bigMobile } from 'styles/mixins'

export const FormContainer = styled.form`
  background-color: ${GlobalStyles.white};
  display: inline-block;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  border-radius: 25px;
  box-shadow: 1px -1px 5px ${GlobalStyles.lightGray};
  display: flex;
  flex-direction: column;

  @media (max-width: ${bigMobile}) {
    width: 95%;
    box-shadow: 1px 1px 5px ${GlobalStyles.lightGray};
    padding-left: 0;
    padding-right: 0;
  }
`

export const TitleInput = styled.input`
  font-size: 40px;
  border: none;
  outline: none;
  max-width: 100%;
  margin-bottom: 1rem; 

  @media (max-width: ${bigMobile}) {
    font-size: 32px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const ContentInput = styled.textarea`
  font-size: 20px;
  border: none;
  outline: none;
  resize: none;
  background: repeating-linear-gradient(
    ${GlobalStyles.lightGray} 27px,
    ${GlobalStyles.white} 28px,
    ${GlobalStyles.white  } 54px
  );

  @media (max-width: ${bigMobile}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const ButtonInput = styled.button`
  margin: 2rem 0 0;
  padding: .8rem 0;
  background-color: ${GlobalStyles.secondary};
  color: ${GlobalStyles.white};
  outline: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;  
  ${popupScale}

  &:hover {
    animation: popupScale .3s ease-in-out;
    background-color: ${GlobalStyles.white};
    border: 1px solid ${GlobalStyles.secondary};
    color: ${GlobalStyles.secondary};
  }

  @media (max-width: ${bigMobile}) {
    width: 80%;
    padding: .5rem 0;
    margin-left: auto;
    margin-right: auto;
  }
`