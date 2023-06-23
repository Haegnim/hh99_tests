import React from 'react';
function Button({ style, buttonFuntion, item, text }) {
    return (
        <button className={style} onClick={() => buttonFuntion(item)}>
            {text}
        </button>
    );
}

export default Button;
