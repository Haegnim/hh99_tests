import { styled } from 'styled-components';

const IconBox = styled.div`
    display: flex;
    justify-content: space-between;
    &.ListUl {
        margin-left: 5%;
        .id-box {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            font-size: 20px;
            margin-right: 16px;
        }
        .icon-box > #check-icon {
            height: 24px;
            margin-right: 16px;
        }
        .icon-box > #delete-icon {
            font-size: 32px;
        }
    }
    .icon-box > #check-icon {
        height: 14px;
        fill: ${(props) => props.isdonecolor};
        margin-right: 8px;
        transition: all 0.3s ease-in-out;
    }
    .icon-box > #check-icon:hover,
    .icon-box > #check-icon:focus {
        fill: #31af7f;
    }
    .icon-box > #delete-icon {
        color: #878787;
        margin-right: 8px;
        font-size: 18px;
        transition: all 0.5s ease-in-out;
    }
    .icon-box > #delete-icon:hover,
    .icon-box > #delete-icon:focus {
        color: #ff3232;
    }
`;

export default IconBox;
