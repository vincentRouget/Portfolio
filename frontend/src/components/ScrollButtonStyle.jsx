import styled from 'styled-components';

export const Heading = styled.h1`
   text-align: center;
   color: green;
`;

export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;

export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 96%;
   bottom: 0%;
   // height: 4%;
   font-size: 4em;
   cursor: pointer;
   color: var(--text);
   transition : 0.1s ease-in;
   z-index: 2;
   &:hover {
      // position: fixed; 
      // width: 100%;
      // left: 91%;
      // bottom: 15%;
      // height: 20px;
      // font-size: 10rem;
      // z-index: 1;
      // cursor: pointer;
      // color: var(--text);
      // transform : scale 1.2;    
      // z-index: 2;    
    }
   `;