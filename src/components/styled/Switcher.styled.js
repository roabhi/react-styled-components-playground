import { styled } from 'styled-components'

export const StyledSwitcher = styled.label`
  position: relative;
  display: inline-block;
  width: 3.125rem;
  height: 1.563rem;
  margin: 1rem 2.5rem 1rem 0;

  svg {
    position: absolute;

    &:first-of-type {
      left: calc(-3.125rem + 1rem);
    }

    &:last-of-type {
      right: calc(-3.125rem + 1rem);
    }
  }

  input[type='checkbox'] {
    display: none;

    &:checked + span {
      background-color: #2bc6ff;
    }

    &:checked + span:before {
      transform: translateX(25px);
      background-color: #333;
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    background-color: #b6b6b6;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;

    &:before {
      position: absolute;
      content: '';
      left: 2px;
      top: 2px;
      width: 21px;
      height: 21px;
      background-color: #333;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
  }
`
