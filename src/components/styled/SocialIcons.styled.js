import { styled } from 'styled-components'

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  margin: 2.875rem 0;

  li {
    list-style: none;
    opacity: 1;
    transition: opacity 0.25s linear;

    &:hover {
      opacity: 0.65;
    }
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`
