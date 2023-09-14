import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faBorderAll, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleItem } from '../../../redux/modules/toggle';

const StyledListUIBlock = styled.div`
    color: #b0ccbf;
    background: #c9f4e9;
    padding: 0;
    margin: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    /* backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.2);
    border-left: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid rgba(255, 255, 255, 0.3); */
    #icon {
        border-radius: 5px;
        font-size: 1.6rem;
        padding: 6px 6px;
        margin: 6px 12px;
        transition: all 0.5s ease-in-out;
    }
    #icon:hover,
    #icon:focus {
        background: #fff;
        color: #31be86;
        box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
    }
    .active {
        background: #fff;
        color: #31be86;
    }
`;

const StyledListUI = () => {
    const toggleObj = { hamburger: false, BorderAll: true, ListUl: false };
    const [toggleBtns, setToggleBtns] = useState(toggleObj);
    const toggleNames = ['hamburger', 'BorderAll', 'ListUl'];
    const dispatch = useDispatch();
    const onClickHandler = (IDX) => {
        toggleNames.map((name) =>
            toggleNames[IDX] === name ? (toggleObj[name] = true) : (toggleObj[name] = false)
        );
        setToggleBtns({ ...toggleObj });
        dispatch(toggleItem(toggleObj));
    };
    return (
        <StyledListUIBlock>
            <FontAwesomeIcon
                icon={faBorderAll}
                id="icon"
                className={classNames({ active: toggleBtns['hamburger'] })}
                onClick={() => onClickHandler(0)}
            />
            {/* <FontAwesomeIcon
                icon={faBorderAll}
                id="icon"
                className={classNames({ active: toggleBtns['BorderAll'] })}
                onClick={() => onClickHandler(1)}
            /> */}
            <FontAwesomeIcon
                icon={faListUl}
                id="icon"
                className={classNames({ active: toggleBtns['ListUl'] })}
                onClick={() => onClickHandler(2)}
            />
        </StyledListUIBlock>
    );
};

export default StyledListUI;
