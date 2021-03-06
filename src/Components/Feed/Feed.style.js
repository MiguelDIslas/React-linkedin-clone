import styled from "styled-components";

export const Feed = styled.div`
  flex: 0.6;
  margin: 20px 20px 0 20px;

  .feed-input-container {
    background-color: var(--background-color-dark);
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    position: sticky;

    .feed-input {
      border: 1px solid lightgray;
      border-radius: 30px;
      display: flex;
      padding: 10px;
      color: gray;
      padding-left: 15px;

      form {
        display: flex;
        width: 100%;

        input {
          border: none;
          flex: 1;
          margin-left: 10px;
          outline-width: 0;
          font-weight: 600;
          background-color: transparent;
          color: white;
        }

        button {
          display: none;
        }
      }
    }

    .feed-input-options {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
