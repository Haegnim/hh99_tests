import { styled } from 'styled-components';
import StyledInput from '../common/Input/StyledInput';
import StyledTextArea from '../common/Input/StyledTextArea';
import StyledButton from '../common/Button/StyledButton';
import StyledLogo from '../common/Box/StyledLogo';
import { useState } from 'react';
const TodoInsertBlock = styled.div`
    width: 320px;
    height: 100%;
    background: #31be86;
    border-radius: 0 25px 0 0 / 0 25px 0 0;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    form {
        height: 500px;
        padding: 25px;
        border-radius: 15px;
        background: #fff;
        box-sizing: border-box;
        box-shadow: 0px 0px 10px #999;
    }
`;

const TodoInsert = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChangeHandler = (e) => setTitle(e.target.value);
    const onContentChangeHandler = (e) => setContent(e.target.value);

    return (
        <TodoInsertBlock>
            <StyledLogo />
            <form>
                <StyledInput value={title} onChange={onTitleChangeHandler} />
                <StyledTextArea value={content} onChange={onContentChangeHandler} />
                <StyledButton />
            </form>
        </TodoInsertBlock>
    );
};

export default TodoInsert;
