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
    max-height: 360px;
    min-width: 850px;
    color: #fff;
    strong {
      color: #49ACB5;
    }
    .input-area {
      width: 55%;
      max-width: 450px;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      .input-area-inner {
        width: 90%;
        height: 95%;
        padding: 0 5px;
        border-radius: 10px;
        background-color: #2F3045;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }
    .input {
      height: auto;
      width: 100%;
      align-items: flex-start;
      margin: 10px 5px;
      div {
        flex-direction: row;
        justify-content: center;
        width: 100%;
        input {
          margin: 5px 0 0 5px;
          width: 60%;
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
      }
    }
    .output-area-inputs {
      display: flex;
      flex-direction: row;
      text-align: center;
    }
    .crypto-inputs {
      display: flex;
      flex-direction: row;
    }
    .crypto-inputs-left,
    .crypto-inputs-right {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .output-area {
      width: 40%;
      max-width: 365px;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      .output-area-inner {
        width: 90%;
        height: 95%;
        border-radius: 10px;
        background-color: #2F3045;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  select {
    margin-top: 5px;
    width: 35%;
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
  .currency{
    border-radius 7px;
    width: 80%;
  }
  table {
    width: 90%;
    height: 60%;
    padding: 15px;
    background-color: #181928;
    border-spacing: 0px;
    border-radius: 8px;
  }
  th {
    text-align: center;
  }
  tbody {
    height: 15px;
  }
  td:nth-child(1){
    width: 140px;
  }
  td:nth-child(2){
    background-color: #2F3045;
    text-align:center;
  }
  thead:nth-child(1){
    height: 29px;
    font-size: 22px;
    width: 70px;
  }
  .top-table {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 18px;
    font-weight: bold;
  }
  .bottom-table {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .crypto-name {
    display: flex;
  }
  .input-area-title,
  .output-area-title {
    margin-top: 20px;
  }

  img {
    margin: 0 5px 0 10px;
    width: 18px;
  }
  .crypto-logo {
    display: flex;
    align-items: center;
  }

  @media (max-width: 850px){
    height: fit-content;
    width: 100%;
    .intro, .description {
      font-size: 20px;
      min-width: 0px;
    }
    .intro {
      margin-bottom: 50px;
    }
    .description {
      margin-bottom: 35px;
      padding: 0 5px;
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
        height: 380px;;
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