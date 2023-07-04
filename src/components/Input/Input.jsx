// import Button from './components/Button';
import styled from 'styled-components';

const InputBoxStyle = styled.div`
    width: 50%;
    padding: 12px 18px 12px 0;
    display: flex;
    align-items: center;
    label {
        width: 50px;
        text-align: center;
        padding: 20px 20px;
        font-size: 18px;
    }
    input {
        border: none;
        width: 90%;
        height: 46px;
        padding-left: 10px;
        background-color: #efefef;
        border-radius: 8px;
        font-size: 20px;
        border: 1px solid #777;
    }
`;
function Input({ changeHandler, value, label }) {
    return (
        <InputBoxStyle>
            <label>{label}</label>
            <input type="text" value={value} onChange={changeHandler} />
        </InputBoxStyle>
    );
}

export default Input;
