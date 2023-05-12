import { styled } from 'styled-components'

export const StyledLogo = styled.div`
  width: 15rem;
  height: 2.438rem;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-image: url(${({ theme }) => theme.logo});
  /* background-image: url(./images/logo.svg); */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 2.5rem;
  }
`
