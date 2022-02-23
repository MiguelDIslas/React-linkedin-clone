import styled from "styled-components";

export const Widget = styled.div`
  flex: 0.2;
  background-color: var(--background-color-dark);
  border-radius: 10px;
  height: fit-content;
  padding-bottom: 10px;
  margin-top: 20px;
  position: sticky;
  color: white;

  .widget-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    h2 {
      font-size: 16px;
      font-weight: 400;
      color: white;
    }
  }
  .widget-article {
    display: flex;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: whitesmoke;
    }

    .widget-article-left {
      color: var(--post-blue);
      margin-right: 5px;
      font-size: 15px;
    }

    .widget-article-right {
      flex: 1;

      h4 {
        font-style: 14px;
        color: white;
      }

      p {
        font-size: 12px;
        color: var(--font-color-dark);
      }
    }
  }
`;
