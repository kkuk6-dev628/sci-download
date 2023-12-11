import styled from 'styled-components'
import { Colors } from '../../../utils/common/colors/Colors';

const ButtonContainer = styled.div`
   button {
       background-color: ${Colors.primaryColor};
       color: ${Colors.white};
       &:hover {
       color: ${Colors.white};
       filter: brightness(0.9);   
    }
    }
`;

export { ButtonContainer }