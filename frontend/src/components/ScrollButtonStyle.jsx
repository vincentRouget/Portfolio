import styled from 'styled-components';

export const Button = styled.div`
   position: fixed; 
   display: flex;
   justify-content: center;
   align-items: center;
   right: 0%;
   bottom: 0%;
   font-size: 5em;
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