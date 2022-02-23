import styled, { css } from "styled-components";

const BorderTopRadius = css`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Sidebar = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
  margin-left: 20px;

  /* Siderbar top */
  .siderbar-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-color-dark);
    border-bottom: 0;
    padding-bottom: 10px;
    ${BorderTopRadius};

    img {
      margin-bottom: -20px;
      width: 100%;
      height: 60px;
      ${BorderTopRadius}
      object-fit: cover;
    }

    .sidebar-avatar {
      margin-bottom: 10px;
    }

    h2 {
      font-size: 18px;
      color: white;
    }

    h4 {
      color: var(--font-color-dark);
      font-size: 12px;
    }
  }

  /* Siderbar stats */
  .sidebar-stats {
    padding: 10px;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--background-color-dark);

    .siderbar-stat {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      p {
        color: white;
        font-size: 13px;
        font-weight: 600;
      }

      .siderbar-stat-number {
        font-weight: bold;
        color: var(--post-blue);
      }
    }
  }

  /* Siderbar bottom */
  .siderbar-bottom {
    background-color: var(--background-color-dark);
    text-align: left;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    color: white;

    p {
      font-size: 13px;
      padding-bottom: 10px;
    }

    .sidebar-recent-item {
      display: flex;
      font-size: 13px;
      cursor: pointer;
      color: gray;
      font-weight: bolder;
      margin-bottom: 5px;
      padding: 5px;

      &:hover {
        background-color: whitesmoke;
        border-radius: 10px;
        cursor: pointer;
        color: black;
      }

      .siderbar-hash {
        margin: 0 10px;
      }
    }
  }
`;
