import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const StyledLogoBox = styled.div`
    #icons {
        font-size: 100px;
        color: #31be86;
    }
    h2 {
        padding: 0;
        display: inline-block;
        color: #31be86;
        text-align: center;
        font-size: 1.8rem;
        margin: 30px 0;
    }
`;

const StyledLogo = () => (
    <StyledLogoBox>
        <h2>
            <FontAwesomeIcon icon={faBars} id="icons" />
            <br />
            TODOLIST
        </h2>
    </StyledLogoBox>
);

export default StyledLogo;
