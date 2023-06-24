import React from 'react';
import Button from './Button';

function TodoList({ sectionTitle, todoCard, isDone, clickRemove, isDoneChange }) {
    let buttonText = '완료';
    isDone ? (buttonText = '취소') : (buttonText = '완료');
    return (
        <section>
            <h2>{sectionTitle}</h2>
            <ul className="working-list">
                {todoCard
                    .filter((item) => {
                        return item.isdone === isDone;
                    })
                    .map((item) => {
                        return (
                            <li className="todo-card" isDone={item.isdone} key={item.id}>
                                <div className="content-box">
                                    <p className="todo-title">{item.title}</p>
                                    <p className="todo-text">{item.text}</p>
                                </div>

                                <div className="todo-card-btn-box">
                                    <Button
                                        style={'remove-btn'}
                                        buttonFuntion={clickRemove}
                                        is
                                        item={item.id}
                                        text={'삭제하기'}
                                    />

                                    <Button
                                        style={'clear-btn'}
                                        buttonFuntion={isDoneChange}
                                        is
                                        item={item}
                                        text={buttonText}
                                    />
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
}

export default TodoList;
