import { styled } from 'styled-components';

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 194px;
        height: 32px;
        padding: 12px;
        margin: 10px 0 10px 0;
        box-sizing: border-box;
        border: 1px solid #fff;
        border-radius: 25px;
        outline: none;
        background: #edf1f3;
        font-size: 1rem;
        color: #668591;
        font-weight: 650;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
        /* backdrop-filter: blur(5px);
        background: rgba(255, 255, 255, 0.2);
        border-left: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid rgba(255, 255, 255, 0.3); */
        &:hover,
        &:focus {
            border: 1px solid #31be86;
        }
    }
    label {
        color: #fff;
        font-weight: 650;
        font-size: 16px;
    }
`;

const StyledInput = ({ value, onChange }) => (
    <StyledInputBox>
        <label htmlFor="title">title</label>
        <input
            type="text"
            id="title"
            name="title"
            autoComplete="off"
            value={value}
            onChange={onChange}
        />
    </StyledInputBox>
);

export default StyledInput;
