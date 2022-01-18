import styled from "styled-components";

export const HeaderArea = styled.div`
  height: var(--headerHeight);
  background-color: #2F3045;
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 950px;
  }
  .logo {
    display: flex;
    width: 20%;
    span {
      margin: 15px;
      font-family: 'VT323', monospace;
      font-stretch: expanded;
      font-size: 30px;
      color:#fff;
      strong {
        color: #8984b1;
      }
    }
  }
  ul {
    display: flex;
    width: 80%;
    margin-right: 20px;
    justify-content: end;
    li {
      margin: 0px 10px;
      width: auto;
      list-style-type: none;
      color: #fff;
      font-weight: bold;
      &:hover {
        color: #8984b1;
        text-shadow: 1px 1px #181928;
      }
    }
  }
  .soon {
    color: #bbb;
    display: flex;
    flex-direction: column;
    text-align: end;
    span {
      font-weight: normal;
      color: #49ACB5;
    }
  }
  .burguer-icon {
    display: none;
  }
  .chosen-page {
    display: none;
  }

  @media (max-width: 850px){
    height: fit-content;
    min-height: 55px;
    .logo {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    div {
      flex-direction: column;
    }
    ul {
      flex-direction: column;
      width: 100%;
      margin: 0 0 10px 0;
      padding: 0 50px;
      li {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 20px;
        padding: 7px 0;
      }
    }
    .burguer-icon {
      display: flex;
      flex-direction: column;
      align-items: end;
      padding: 2px 15px;
      justify-content: center;
      margin-top: 10px;
      div {
        width: 40px;
        height: 6px;
        background-color: #fff;
        border-radius: 1px;
        margin: 4px 0px;
      }
    }
    .soon {
      flex-direction: row;
      justify-content: center;
      span {
        padding-left: 5px;
      }
    }
    .chosen-page {
      display: block;
      width: 100%;
      font-weight: bold;
      color: #fff;
      text-align: center;
      font-size: 25px;
      padding-bottom: 7px;
    }
    .web-navbar {
      display: none;
    }
  }
`;