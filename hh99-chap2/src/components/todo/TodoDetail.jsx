import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark, faReply } from '@fortawesome/free-solid-svg-icons';
import BackBut from '../common/Button/BackButton';
import TitleBox from '../common/Box/TitleBox';
import ContentBox from '../common/Box/ContentBox';
import DetailIconBox from '../common/Box/DetailIconBox';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../../redux/modules/todos';
import { ReactComponent as Heartcheck } from '../../lib/assets/heartcheck.svg';

const TodoDetailBlock = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #edf1f3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailPage = styled.div`
    width: 85vw;
    max-width: 750px;
    padding: 13px 12px 36px 12px;
    margin-bottom: 120px;
    background-color: white;
    border-radius: 32px;
    box-shadow: 0px 0px 10px #e8e8e8;
    position: relative;
`;

const TodoDetail = ({ todo }) => {
    let isdoneIconColor = `#878787`;
    todo.isDone ? (isdoneIconColor = '#31af7f') : (isdoneIconColor = '#878787');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    try {
        return (
            <TodoDetailBlock key={todo.id}>
                <DetailPage>
                    <Link to="/">
                        <BackBut>
                            <FontAwesomeIcon icon={faReply} id="icon-reply" />
                            이전
                        </BackBut>
                    </Link>
                    <TitleBox>{todo.title}</TitleBox>
                    <ContentBox>{todo.content}</ContentBox>
                    <DetailIconBox>
                        <Heartcheck
                            icon={faHeart}
                            id="icon-heart"
                            style={{ fill: isdoneIconColor }}
                            onClick={() => {
                                dispatch(toggleItem(todo.id));
                            }}
                        />
                        <FontAwesomeIcon
                            icon={faXmark}
                            id="icon-Xmark"
                            onClick={() => {
                                dispatch(deleteItem(todo.id));
                            }}
                        />
                    </DetailIconBox>
                </DetailPage>
            </TodoDetailBlock>
        );
    } catch (e) {
        navigate('/');
    }
};

export default TodoDetail;
