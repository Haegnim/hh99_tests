//readline 모듈 : Readable Stream에서 한 번에 한 줄 씩 데이터를 읽기 위한 인터페이스를 제공하는 모듈
//readline 모듈 불러오기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//몇 번째 시도인지 카운드
let count = 1;
//컴퓨터가 생성한 랜덤 수
let cmptNum = [];

//0과 9 사의 서로 다른 숫자 3개를 무작위로 뽑습니다.
const generateRand = () => {
    let rand = '';
    while (rand.length < 3) {
        const randNum = Math.floor(Math.random() * 10);
        //rand이 randNum을 포함하지 않는다면 rand에 randNum을 추가
        !rand.includes(randNum) && (rand += randNum);
    }
    //rand의 값을 split으로 분리하여 Number로 mapping하여 저장
    return rand.split('').map(Number);
};

//사용자로 부터 answer값을 받습니다.
const answerCallback = (answer) => {
    let result = matchNums(cmptNum, answer.split('').map(Number));
    count++;
    //strike의 value값 가져와서 3이 맞는지 비교 -> true면 게임 실행 종료 : false면 answerCallback 실행
    result.strike === 3 ? rl.close() : rl.question(`${count}번째 시도:`, answerCallback);
};

//랜덤 수와 answer의 값을 비교합니다.
const matchNums = (rand, answer) => {
    //status라는 객체에 strike와 ball을 저장
    let status = {
        strike: 0,
        ball: 0,
    };
    //받은 rand값 확인(정답)
    console.log('rand:', rand);
    //랜덤 수와 answer의 값을 비교
    for (let i = 0; i < answer.length; i++) {
        //answer와 rand의 수와 자리가 같은 경우
        if (answer[i] === rand[i]) {
            status.strike++;
            continue;
        }
        //자리는 맞지 않지만 수는 맞는 경우
        const newArr = [...rand].filter((item, idx) => idx !== i);
        newArr.includes(answer[i]) && status.ball++;
    }
    console.log(`${status.strike}S${status.ball}B`);
    return status;
};

//cmptNum generateRand에서 return 받은 값을 할당
cmptNum = generateRand();

rl.question(
    `컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!
${count}번째 시도: `,
    answerCallback
);

//입력이 끝나면 프로세스 종료
rl.on('close', () => {
    process.exit();
});
