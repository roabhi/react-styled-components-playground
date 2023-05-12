import { styled } from 'styled-components'

/**
 * @params
 * * align => right || default to 'left'
 * * hidemobile => true || default to false
 */

export const Container = styled.div`
  width: 62.5rem;
  max-width: 100%;
  padding: 0 2.5rem;
  margin: 0 auto;
  text-align: ${({ align }) => (align === 'right' ? 'right' : 'left')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ hidemobile }) => (hidemobile ? 'none' : 'block')};
  }
`
