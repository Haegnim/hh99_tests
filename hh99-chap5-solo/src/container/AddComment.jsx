import styled from 'styled-components';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import useInput from '../hooks/useInput';
import Button from '../components/Button';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { __addComments } from '../redux/modules/commentSlice';
const FormSt = styled.form`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const AddComment = () => {
    const [writer, setWriter, onChangeWriterHandler] = useInput();
    const [comment, setComment, onChangeCommentHandler] = useInput();
    const { id } = useParams();
    const dispatch = useDispatch();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newComment = {
            id: uuidv4(),
            author: writer,
            body: comment,
            postId: id,
        };
        console.log(newComment);
        dispatch(__addComments(newComment));
        setWriter('');
        setComment('');
    };

    return (
        <>
            <FormSt action="" onSubmit={onSubmitHandler}>
                <Input
                    label={'작성자'}
                    value={writer}
                    type={'text'}
                    onChangeHandler={onChangeWriterHandler}
                />
                <Textarea
                    label={'댓글'}
                    value={comment}
                    type={'text'}
                    onChangeHandler={onChangeCommentHandler}
                />
                <div
                    className="btn-box"
                    style={{
                        display: `flex`,
                        gap: `10px`,
                    }}
                >
                    <Button>댓글 남기기</Button>
                </div>
            </FormSt>
        </>
    );
};

export default AddComment;
