import styled from "styled-components";

export const FooterArea = styled.div`
  height: var(--footerHeight);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181928;
  color: #ddd;
  div {
    height: 40px;
    width: 100%;
    min-width: 760px;
    display: flex;
    justify-content: space-around;
    background-color: #2F3045;
    div {
    max-width: 950px;
    }
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: #ddd;
    &:hover {
      color: #8984b1;
      text-shadow: 1px 1px #181928;
    }
  }
  span {
    display: flex;
    align-items: center;
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

  @media (max-width: 850px){
    img {
      content:url("//rollercoin.com/static/img/public_img/gen2/w320h100.gif");
    }
    div {
      min-width: 0px;
      height: auto;
      padding: 5px;
      div {
        flex-direction: column-reverse;
        span {
          text-align: center;
        }
        a {
          padding-bottom: 5px;;
        }
      }
    }
  }
`;