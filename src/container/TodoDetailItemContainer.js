import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { deleteTodo } from 'redux/modules/todos';
import { isdoneChange } from 'redux/modules/todos';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from 'components/Todo/TodoItem';
import TodoUpdateContainer from 'container/TodoUpdateContainer';
import Button from 'components/common/button/Button';

export const TodoDetailItemContainer = () => {
    const todos = useSelector(({ todos }) => todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { pathname } = useLocation();

    const deleteTodoitem = (item) => {
        dispatch(deleteTodo(item.id));
    };
    const isdoneChangeTodoitem = (item) => {
        dispatch(isdoneChange(item.id, item.isdone));
    };

    pathname = parseInt(pathname.replace('/', ''));
    const todoDetail = todos.filter((item) => item.id === pathname);

    const [updateActive, setUpdateActive] = useState(true);
    const updateBtnHandler = () => {
        setUpdateActive(!updateActive);
    };

    try {
        return (
            <>
                <Link to="/">
                    <Button.Insert>뒤로가기</Button.Insert>
                </Link>
                {updateActive ? (
                    <>
                        <Button.Insert onClick={updateBtnHandler}>수정하기</Button.Insert>
                        <TodoItem
                            todos={todoDetail}
                            deleteTodoitem={deleteTodoitem}
                            isdoneChangeTodoitem={isdoneChangeTodoitem}
                        />
                    </>
                ) : (
                    <TodoUpdateContainer
                        updateTitle={todoDetail[0].title}
                        updateText={todoDetail[0].text}
                        flex={'column'}
                        idNum={todoDetail[0].id}
                    />
                )}
            </>
        );
    } catch (e) {
        navigate('/');
    }
};
