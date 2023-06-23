import React from 'react';
// import Button from './components/Button';
import Button from './Button';

function InputBox({ title, text, onSubmitHandler, textChangeHandler, titleChangeHandler }) {
    return (
        <div className="save-todo-box">
            <div className="input-container">
                <p>제목</p>
                <input type="text" value={title} onChange={titleChangeHandler} />
                <p>내용</p>
                <input type="text" value={text} onChange={textChangeHandler} />
            </div>
            <Button buttonFuntion={onSubmitHandler} text={'저장'} />
        </div>
    );
}

export default InputBox;
