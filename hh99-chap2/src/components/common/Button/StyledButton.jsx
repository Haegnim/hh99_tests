import { styled } from "styled-components";

const StyledButtonBox = styled.div`
  width: 100%;
  text-align: right;
  font-weight: 700;
  button {
    width: 85px;
    height: 35px;
    background: #31be86;
    border: none;
    border-radius: 10px;
    color: #fff;
  }
`;

const StyledButton = ({ onSubmit }) => {
  console.log(onSubmit);
  return (
    <StyledButtonBox>
      <button onSubmit={onSubmit}>add</button>
    </StyledButtonBox>
  );
};

export default StyledButton;
