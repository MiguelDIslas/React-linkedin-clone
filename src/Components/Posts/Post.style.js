import styled from "styled-components";

export const Post = styled.div`
  background-color: white;
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
        color: gray;
      }

      h2 {
        font-size: 15px;
      }
    }
  }

  .post-body {
    overflow-wrap: anywhere;
  }

  .post-buttons {
      width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
