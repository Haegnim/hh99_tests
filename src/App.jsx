import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import { Input } from './components/Input';
import SelectDropdown from './components/SelectDropdown';
import Modal from './components/Modal';

// BUG
// NOTE 모달 2개 구현
// WARNING
// TODO;
// [ ]
// [x]
// CHECKLIST 모달 2개 구현
// NOTE 모달을 on시키는 버튼의 형태가 각각 달라야한다. (버튼 재사용 OK)
// [ ] 취소, 확인이 있고 overlay를 클릭했을 때 모달이 닫히지 않는 형태
// [x] 닫기 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태

// CHECKLIST 버튼 6개 구현
// [ ] 스타일 컴포넌트를 이욯하여 구현, props를 적절하게 잘 활용
// [ ] 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현

// CHECKLIST input 2개 구현
// [x] 일반 형식
// [x] 숫자를 넣었을 때, 3자리 수마다 콤마, 가 찍히는 input
// [x] form을 구현하고 각 input에 값을 입력하고 저장 버튼을 눌렀을 때 {name: '아무 텍스트', price: "콤마가 없는 금액"}

// CHECKLIST select 구현
// NOTE select를 클릭 -> option들이 나오고 클릭하면 select의 값 변경
// [ ] select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현합니다. 부모 요소에 overflow: hidden을 적용하면 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 됩니다. 부모 컴포넌트에 hidden 속성이 있다고 하더라도 select는 가려지지 않아야 합니다.

const SelectBox = styled.div`
    border: none;
    background-color: red;
    /* width: 200px; */
    height: 150px;
    overflow: hidden;
    padding: 10px 20px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
`;

const DropDownBtn = styled.button`
    background-color: #fff;
    width: 100%;
    height: 30px;
`;
function App() {
    //input창에 필요한 함수
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const onNameChangeHandler = (e) => {
        setName(e.target.value);
    };
    const onPriceChangeHandler = (e) => {
        const priceValue = e.target.value.replace(/,/g, '');
        if (isNaN(Number(priceValue))) {
            return alert('숫자를 입력해주세요');
        } else {
            const addComma = priceValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            setPrice(addComma);
        }
    };
    //form 태그 submit
    const onSubmit = (e) => {
        e.preventDefault();
        const priceNotComma = price.split(',').join('');
        alert(`{name : ${name} , price : ${priceNotComma}}`);
    };

    //modal 보여주기
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    //dropdown
    const [showDropdown, setShowDropdown] = useState(false);

    const openDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className="App">
            <section>
                <h2>Button</h2>
                <Button />
            </section>
            <section>
                <h2>Input</h2>
                <form action="" onSubmit={onSubmit}>
                    <Input labalText={'이름'} onChangHandler={onNameChangeHandler} input={name} />
                    <Input labalText={'가격'} onChangHandler={onPriceChangeHandler} input={price} />
                    <Button />
                </form>
            </section>
            <section>
                <h2>Modal</h2>
                <button onClick={openModal}>Open Modal</button>
            </section>
            <SelectBox>
                <h2>Select</h2>
                <button onClick={openDropdown}>open dropdown</button>
                {/* <SelectDropdown showDropdown={showDropdown} onClose={closeDropdown} /> */}
            </SelectBox>
            <div id="target">
                <Modal showModal={showModal} onClose={closeModal} />
                <SelectDropdown
                    showDropdown={showDropdown}
                    onClose={closeDropdown}
                    handleOptionSelect={handleOptionSelect}
                    selectedOption={selectedOption}
                />
            </div>
        </div>
    );
}

export default App;
