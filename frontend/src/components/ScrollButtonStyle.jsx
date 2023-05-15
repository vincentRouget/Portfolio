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
   bottom: 6%;
   height: 20px;
   font-size: 4rem;
   cursor: pointer;
   color: var(--text-color);
   transition : 0.3s ease-in;
   z-index: 2;
   // &:hover {
   //    position: fixed; 
   //    width: 100%;
   //    left: 91%;
   //    bottom: 15%;
   //    height: 20px;
   //    font-size: 10rem;
   //    z-index: 1;
   //    cursor: pointer;
   //    color: var(--text-color);
   //    transform : scale 1.2;    
   //    z-index: 2;     
    }
   `;