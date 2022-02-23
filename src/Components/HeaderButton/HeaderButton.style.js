import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;
  color: hsla(0,0%,100%,0.6);

  &:hover {
    color: white;
  }

  .header-button-title {
    font-weight: 400;
    font-size: 12px;
  }

  .header-button-icon {
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
  }
`;
