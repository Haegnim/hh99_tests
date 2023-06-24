import React from 'react';
// import Button from './components/Button';
import Button from './Button';

function InputBox({ title, text, onSubmitHandler, textChangeHandler, titleChangeHandler }) {
    return (
        <form className="save-todo-box">
            <div className="input-container">
                <label>제목</label>
                <input type="text" value={title} onChange={titleChangeHandler} />
                <label>내용</label>
                <input type="text" value={text} onChange={textChangeHandler} />
            </div>
            <Button buttonFuntion={onSubmitHandler} text={'저장'} />
        </form>
    );
}

export default InputBox;
