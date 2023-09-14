import { styled } from 'styled-components';
import StyledToggle from '../common/Box/SytledToggleBox';
import TodoListItem from './TodoListItem';

const TodoListBlock = styled.div`
    width: 64vw;
    min-width: 512px;
    height: 100%;
    padding: 10px 25px 10px 0;
    /* position: relative; */
    /* background: #edf1f3; */
    display: inline-block;
    box-sizing: border-box;
`;

const TodoList = ({ todos, workState, toggles }) => {
    return (
        <TodoListBlock>
            <StyledToggle />
            <TodoListItem todos={todos} workState={workState} toggles={toggles} />
        </TodoListBlock>
    );
};

export default TodoList;
