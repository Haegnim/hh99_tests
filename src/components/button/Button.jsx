import React from 'react';
function Button({ style, onClickfunction, text }) {
    return (
        <button className={style} onClick={onClickfunction}>
            {text}
        </button>
    );
}

export default Button;
