import { styled } from 'styled-components';
import TodoToggleContainer from '../../../containers/TodoToggleContainer';
const StyledToggleBlock = styled.div`
    width: 100%;
    height: 174px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const StyledToggle = ({ toggleBtns, onClickHandler }) => (
    <StyledToggleBlock>
        <TodoToggleContainer toggleBtns={toggleBtns} onClickHandler={onClickHandler} />
    </StyledToggleBlock>
);

export default StyledToggle;
