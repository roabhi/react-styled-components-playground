import { styled } from 'styled-components'

// ? Main header component

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.color};
  padding: 1.25rem 0;
`

// ? Nav component included in Header markup

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

// export const Logo = styled.img`
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     margin-bottom: 2.5rem;
//   }
// `

export const Image = styled.img`
  width: 23.438rem;
  margin-left: 2.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    margin: 2.5rem 0 1.875rem;
  }
`
