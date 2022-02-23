import styled, { css } from "styled-components";

const FormComponents = css`
  width: 350px;
  height: 50px;
  border-radius: 5px;
`;

export const Login = styled.div`
  margin-top: 60px;
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 100px 0;

  img {
    object-fit: contain;
    height: 70px;
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      ${FormComponents}
      font-size: 20px;
      padding-left: 10px;
      margin-bottom: 10px;
    }

    button {
      ${FormComponents}
      font-size: large;
      color: white;
      background-color: var(--post-blue);
    }
  }

  p {
    margin-top: 20px;

    .login-register {
      cursor: pointer;
      color: var(--post-blue);
    }
  }
`;
