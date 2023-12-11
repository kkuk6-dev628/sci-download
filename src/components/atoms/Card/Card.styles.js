import styled from 'styled-components';

const CardContainer = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   border: 1px solid #ccc;
   border-radius: 8px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   padding: 16px;
   background-color: #fff;
   width:180px;
   margin:6px;

   i {
    font-size:40px;
   }
`;

export { CardContainer };
