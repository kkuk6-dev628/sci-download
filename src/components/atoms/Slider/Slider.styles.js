import styled from 'styled-components'
import { Colors } from '../../../utils/common/colors/Colors';

const SliderContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.visible ? '0' : '-70%')};
  width: 70%;
  height: 100%;
  background-color: #fff;
  transition: right 0.5s ease-in-out;

  .toggle-container {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color:${Colors.primaryColor};
    font-size:20px;
    padding:15px;
    .toggle{
        cursor:pointer;
        padding-right:8px;
    }
  }
`;

export { SliderContainer };