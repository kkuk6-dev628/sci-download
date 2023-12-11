import styled from 'styled-components'


const ShowInformationContainer = styled.div`
`;

const ImageContainer = styled.div`
display: flex;
flex:0.5;
justify-content:flex-start;
padding-top:10px;
padding-left:10px;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:5px; 
}
`
const RowContainer = styled.div`
    flex:1;
    display:flex;
`;

const DescriptionContainer = styled.div`
    flex:0.5;

    h1 {
        padding-left:8px;
        padding-top:8px;
        font-weight:bold;
    }
`;


export { DescriptionContainer, ShowInformationContainer, ImageContainer, RowContainer }