import { styled } from 'styled-components'

/**
 * @params
 * * layout => row-reverse || default to 'row'
 */

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 0.938rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  margin: 2.5rem 0;
  padding: 3.75rem;
  flex-direction: ${({ layout }) => layout || 'row'};

  img {
    width: 80%;
    margin: ${({ layout }) => (layout === 'row-reverse' ? '0' : '0 0 0 5rem')};
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    img {
      margin: 0 auto;
      width: 100%;
    }
  }
`
