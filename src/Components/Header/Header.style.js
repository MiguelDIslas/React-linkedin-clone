import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding: 10px 0;
  background-color: white;
  width: 100%;
  z-index: 999;
 position: fixed!important;
 max-height: 60px;

  .header-left {
    display: flex;

    .header-search {
      padding: 10px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      height: 22px;
      color: gray;
      background-color: #eef3f5;

      input {
        outline: none;
        border: none;
        background: none;
      }
    }

    img {
      object-fit: contain;
      height: 40px;
      margin-right: 10px;
    }
  }

  .header-right {
    display: flex;
  }
`;
