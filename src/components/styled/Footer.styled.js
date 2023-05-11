import { styled } from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 6.25rem 0 3.75rem;
  font-size: 0.875rem;

  ul {
    list-style-type: none;
    margin: 2.5rem 0;
    padding: 0;

    &:nth-child(2),
    &:nth-child(3) {
      li span {
        padding: 0 0 0 7rem;
      }
    }
  }

  ul li {
    margin-bottom: 1.25rem;
  }

  p {
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
      margin: 0;
      display: block;
      width: 100%;
    }

    ul li {
      width: 100%;
    }
    ul li span {
      padding: 0 !important;
    }
    p {
      text-align: center;
    }
  }
`
