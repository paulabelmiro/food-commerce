import { darken } from "polished";

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .snack {
    position: relative;
    background: ${({theme}) => theme.colors.gray200};
    padding: 1.75rem 1.5rem;
    border-radius: 10px;

    h2 {
      color: ${({theme}) => theme.colors.gray800};
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 10px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
      color: ${({theme}) => theme.colors.gray800};
    }

    div {
      margin-top: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        background: ${({theme}) => theme.colors.yellow};
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          stroke: ${({theme}) => theme.colors.purple};
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          background: ${darken(0.1, '#FCC419')};
        }
      }
    }
  }
`;
