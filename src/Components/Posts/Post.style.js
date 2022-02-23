import styled from "styled-components";

export const Post = styled.div`
  background-color: var(--background-color-dark);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;

  .post-header {
    display: flex;
    margin-bottom: 10px;

    .post-info {
      margin-left: 10px;

      p {
        font-size: 12px;
        color: var(--font-color-dark);
      }

      h2 {
        font-size: 15px;
        color: white;
      }
    }
  }

  .post-body {
    overflow-wrap: anywhere;
    color: white;
  }

  .post-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
