import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
      grid-area: content;
      overflow-y: scroll;
      padding: 64px 0;
    }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

        > a, a:visited {
            color: white;
        };
  };
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 36px;
    font-weight: 500;
    margin: 32px 0 16px ;
  }

  > p {
    font-size: 16px;
    font-weight: 350;
  }

  > button:first-of-type {
    text-align: right;
  }
`;