import { styled } from 'styled-components'

/**
 * @params for Button
 * * bg => background-color || defaults to #fff
 * * color => color || defaults to #333
 */

export const Button = styled.button`
  border-radius: 3.125rem;
  border: none;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.938rem 3.75rem;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`
