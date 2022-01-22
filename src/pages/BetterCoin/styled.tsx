import styled from "styled-components";

export const BetterCoinArea = styled.div`
  height: 100%;
  background-color: #181928;
  .intro {
    color: #fff;
    width: 100%;
    min-width: 450px;
    height: 35px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 20px 0 5px 0;
    font-size: 23px;
    margin: 0;
    font-weight: normal;
    span {
      strong {
        color: #8984b1;
      }
    }
  }
  .description {
    color: #fff;
    width: 100%;
    min-width: 450px;
    height: 35px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 20px 0 30px 0px;
    font-size: 18px;
    margin: 0;
    font-weight: normal;
    span strong {
      color: #8984b1;
    }
  }
  .main-content {
    display: flex;
    justify-content: center;
    height: calc(100% - 100px);
    max-height: 400px;
    min-width: 850px;
    color: #fff;
    .input-area {
      width: 42%;
      max-width: 378px;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      div {
        width: 90%;
        height: 95%;
        border-radius: 10px;
        background-color: #2F3045;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .input {
          height: auto;
          width: 90%;
          align-items: flex-start;
          span strong {
            color: #49ACB5;
          }
          div {
            flex-direction: row;
            justify-content: center;
            width: 100%;
            input {
              margin-top: 5px;
              width: 75%;
              height: 35px;
              border-bottom-left-radius: 7px;
              border-top-left-radius: 7px;
              border-style: none;
              outline: none;
              padding-left: 10px;
              background-color: #181928;
              color: #fff;
              &:focus {
                border: 1px solid #8984b1;
              }
              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
            select {
              margin-top: 5px;
              width: 30%;
              height: 35px;
              border-bottom-right-radius: 7px;
              border-top-right-radius: 7px;
              border-style: none;
              outline: none;
              background-color: #181928;
              color: #fff;
              text-align: center;
              &:focus {
                border: 1px solid #8984b1;
              }
            }
          }
        }
      }
    }
    .output-area {
      width: 58%;
      max-width: 522px;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      div {
        width: 90%;
        height: 95%;
        border-radius: 10px;
        background-color: #2F3045;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        span {
          font-size: 25px;
          font-weight: bold;
        }
        
      }
    }
  }
  .currency{
    border-radius 7px;
  }
  table {
    width: 90%;
    height: 70%;
    padding: 15px;
    background-color: #181928;
    border-spacing: 0px;
    border-radius: 8px;
  }
  th {
    text-align: center;
  }
  td:nth-child(1){
    width: 100px;
    text-align: right;
    padding-right: 15px;
  }
  td:nth-child(3){
    width: 8px;
  }
  td:nth-child(2),
  td:nth-child(4){
    background-color: #2F3045;
    text-align:center;
    width: 110px;
  }
  td:nth-child(4){
    width: 55px;
  }
  thead:nth-child(1){
    height: 29px;
    font-size: 22px;
    width: 70px;
  }
  .top-table {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .bottom-table {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  @media (max-width: 850px){
    height: fit-content;
    width: 100%;
    .intro {
      font-size: 20px;
      min-width: 0px;
    }
    .main-content {
      flex-direction: column;
      max-height: fit-content;
      justify-content: flex-start;
      width: 100%;
      min-width: 0;
      .input-area {
        height: 360px;;
        min-height: 0px;
        width: 100%;
        max-width: 600px;
      }
      .output-area {
        height: 300px;;
        min-height: 0px;
        width: 100%;
        max-width: 600px;
        div {
          justify-content: flex-start;
          span {
            margin: 10px 0;
          }
        }
      }
      table {
        height: 220px;
      }
    }
  }
`;