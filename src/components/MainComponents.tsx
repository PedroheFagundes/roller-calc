import styled from "styled-components";

export const Template = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 850px){
    position: absolute;
    height: auto;
  }
`;