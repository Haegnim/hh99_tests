import React, { useState, useEffect } from 'react';
import { styled, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import IdBox from '../common/Box/IdBox';
import IconBox from '../common/Box/IconBox';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../../redux/modules/todos';
import { Link } from 'react-router-dom';
import { ReactComponent as Heartcheck } from '../../lib/assets/heartcheck.svg';

const TodoItemBlock = styled.ul`
    max-height: 600px;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 10px;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 12px 14px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const TodoItem = styled.li`
    height: 108px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px #e8e8e8;
    background-color: #edf1f3;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    &:hover {
        background-color: #fefefe;
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    }
    &.hamburger {
        flex: 1 1 194px;
    }
    &.BorderAll {
        width: 194px;
        height: 194px;
        justify-content: flex-start;
    }
    &.ListUl {
        flex: 1 1 100%;
        max-width: 875px;
        flex-direction: row;
        align-items: center;
        height: 80px;
        &:hover {
            /* transform: scale(1.03); */
        }
    }
    .content-box {
        width: 166px;
        &.BorderAll {
            .link > .title {
                font-size: 16px;
                margin: 12px 0 8px;
            }
            .link > .content {
                white-space: pre-line;
                line-height: 21.5px;
            }
        }
        &.ListUl {
            width: 65%;
            .link > .title {
                font-size: 20px;
            }
        }
    }
    .content-box > .link > .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.8rem;
        &:hover {
            color: #31af7f;
        }
    }
    .content-box > .link > .content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #555;
        font-size: 14px;
    }
`;

function TodoListItem({ todos, workState, toggles }) {
    const dispatch = useDispatch();
    const getKeyByValue = () => {
        for (let key in toggles) {
            //hasOwnProperty():객체가 특정 프로퍼티를 가지고 있는지 불리언 값을 반환
            if (toggles[key] && key) {
                return key;
            }
        }
        return 'hamburger';
    };

    const isdoneColor = (isdone) => {
        return isdone === true ? '#31af7f' : '#878787';
    };

    const todoList = () => {
        console.log(workState);
        if (workState === 'all') {
            return todos;
        } else {
            return todos.filter((item) => item.isDone === workState);
        }
    };

    return (
        <TodoItemBlock>
            {todoList().map((item) => {
                return (
                    <TodoItem key={item.id} className={getKeyByValue()}>
                        <IconBox className={getKeyByValue()} isdonecolor={isdoneColor(item.isDone)}>
                            <IdBox className="id-box">{item.id}</IdBox>
                            <div className="icon-box">
                                <Heartcheck
                                    icon={faHeart}
                                    id="check-icon"
                                    onClick={() => {
                                        dispatch(toggleItem(item.id));
                                    }}
                                />
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    id="delete-icon"
                                    onClick={() => {
                                        dispatch(deleteItem(item.id));
                                    }}
                                />
                            </div>
                        </IconBox>
                        <div className={`content-box ${getKeyByValue()}`}>
                            <Link to={'/detail/' + item.id} className="link">
                                <div className="title" id="title">
                                    {item.title}
                                </div>
                                <div className="content">{item.content}</div>
                            </Link>
                        </div>
                    </TodoItem>
                );
            })}
        </TodoItemBlock>
    );
}

export default TodoListItem;
