//시도 횟수
let trying = 1;
//무작위 숫자 3개를 생성하여 정답지를 만듭니다.
const randomIndexArray = new Set();
const randomBall = (min, max) => {
    while (randomIndexArray.size < 3) {
        const random = Math.floor(Math.random() * (max - min) + min);
        randomIndexArray.add(random);
    }
    console.log('정답=>' + [...randomIndexArray]);
    console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
};

//유저의 대답과 정답을 비교합니다.
const compareNumbers = (userInput) => {
    //랜덤값(정답)의 배열
    let randomNum = [...randomIndexArray];
    //input값의 배열
    let inputNum = [...userInput];
    //s의 개수
    let sNum = [];
    //랜덤 수와 input값의 교집합
    let answerIntersection = [];

    answerIntersection = randomNum.filter((x) => inputNum.includes(x));
    for (let i = 0; i < randomNum.length; i++) {
        if (randomNum[i] === inputNum[i]) {
            sNum.push(inputNum[i]);
            answerIntersection.pop();
        }
    }
    return result(sNum, answerIntersection);
};

//게임 결과을 안내합니다.
const result = (answerS, cross) => {
    if (answerS.length === 3) {
        //정답
        trying--;
        console.log(trying + '번만에 맞히셨습니다.');
        console.log('게임을 종료합니다.');
        r.close();
    } else if (answerS.length === 0 && cross.length === 0) {
        //3개의 수 중에 정답이 하나도 없을 경우
        console.log(answerS.length + 'S' + cross.length + 'B');
    } else if (answerS.length === 0) {
        //S가 0이고 자리는 틀렸지만 수는 맞는 경우
        console.log(cross.length + 'B');
    } else if (cross.length === 0) {
        //B가 0이고 자리와 수 모두 맞는 경우
        console.log(answerS.length + 'S');
    } else {
        //S와 B의 개수를 통해 힌트 전달
        console.log(answerS.length + 'S' + cross.length + 'B');
    }
};

//입력창 생성
let readline = require('readline');
let r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//입력을 받을 떄
r.on('line', function (input) {
    if (input == 'exit') {
        r.close();
    }
    if (input.length !== 3) {
        console.log('서로 다른 3개의 수를 입력해주세요!');
        gameStartMesege();
    } else {
        let writeArray = new Set();
        const arr = input.split('');
        trying++;
        for (let i = 0; i < input.length; i++) {
            writeArray.add(Number(arr[i]));
        }
        gameStartMesege(writeArray);
    }
});
//입력 종료시
r.on('close', function () {
    process.exit();
});
//정답에 실패할 경우 힌트 반환 + input값을 받는 터미널 메세지 출력
const gameStartMesege = (userInput) => {
    r.setPrompt(trying + '번째 시도 :');
    if (userInput) {
        compareNumbers(userInput);
    }
    r.prompt();
};

randomBall(0, 9);
gameStartMesege();
