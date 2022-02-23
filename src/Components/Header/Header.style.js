import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.1px solid hsla(0, 0%, 100%, 0.12);
  padding: 10px 0;
  background-color: #1d2226;
  width: 100%;
  z-index: 999;
  position: fixed !important;
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
      background-color: #38434f;

      input {
        outline: none;
        border: none;
        background: none;
        color: hsla(0, 0%, 100%, 0.6);
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
