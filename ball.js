// 1. 0과 9 사의 서로 다른 숫자 3개를 무작위로 뽑습니다.
let randomIndexArray = [];
function randomBall(min, max) {
    //랜덤 값을 배열에 저장
    for (let i = 0; i < 3; i++) {
        //랜덤하게 값을 뽑음
        const random = Math.floor(Math.random() * (max - min) + min);
        // 인덱스와 대조 / 없으면 -1
        if (randomIndexArray.indexOf(random) === -1) {
            //배열 끝에 값을 넣음
            randomIndexArray.push(random);
        } else {
            //값이 겹쳐서 하나가 없어지면 for문이 한번 더 돌게 i를 -해줌
            i--;
        }
    }
    return randomIndexArray;
}
randomBall(0, 9);
//컴퓨터가 찍은 랜덤 숫자
console.log('정답=>' + randomIndexArray);
console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');

//-------------------------------------

// 2. 사용자의 입력값을 받음
//readline 모듈 : Readable Stream에서 한 번에 한 줄 씩 데이터를 읽기 위한 인터페이스를 제공하는 모듈

//readline 모듈 불러오기
let readline = require('readline');
//인터페이스 생성하기
let r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//몇 번째 시도
let trying = 1;

// 터미널에 원하는 문구로 입력받기 / 한번만 실행된다고 함
// r.question('1번째 시도 :', (input) => r.emit('line', input));

//setPrompt는 .on에서 사용할 수 잇는 메소드
r.setPrompt(trying + '번째 시도 :');
r.prompt();

// on()메서드를 사용해 이벤트와 콜백함수를 전달합니다.
// r.question(trying + '번째 시도 :', (input) => console.log(input));
r.on('line', function (line) {
    // 입력받는 값을 처리하는 코드

    // 입력값을 받을 배열
    let writeArray = [];

    if (line == 'exit') {
        r.close();
    } else {
        //line을 끊어 읽어서 배열에 저장
        const arr = line.split('');
        for (let i = 0; i < line.length; i++) {
            writeArray.push(arr[i]);
        }
        //도전 횟수 증가
        trying++;
    }
    // console.log(trying + '번째 시도 : ' + line);
    // 터미널에 원하는 문구로 입력받기 / 처음엔 뜨지 않는다.
    r.setPrompt(trying + '번째 시도 :');
    comparison(randomIndexArray, writeArray, trying);
    r.prompt();
});

r.on('close', function () {
    //입력이 끝나고 실행할 코드
    process.exit(); //프로세스 종료
});

//3. 랜덤숫자와 사용자의 입력값을 대조
function comparison(random, write, trying) {
    let answerS = [];
    let cross = [];
    let writeNum = write.map(Number);

    //랜덤 숫자와 입력값의 교집합을 배열로 만듬
    cross = random.filter((x) => writeNum.includes(x));

    for (let i = 0; i < random.length; i++) {
        //랜덤 숫자와 입력값의 순서와 값이 같을 경우 answerS에 값을 넣는다.
        //S와 B의 중복을 피하기 위해 S의 수 만큼 cross에서 제거한다
        if (random[i] === writeNum[i]) {
            answerS.push(writeNum[i]);
            cross.pop();
        }
    }

    if (answerS.length === 3) {
        //S가 3이면 정답
        trying--;
        console.log(trying + '번만에 맞히셨습니다.');
        console.log('게임을 종료합니다.');
        r.close();
    } else if (answerS.length === 0 && cross.length === 0) {
        console.log(answerS.length + 'S' + cross.length + 'B');
    } else if (answerS.length === 0) {
        console.log(cross.length + 'B');
    } else if (cross.length === 0) {
        console.log(answerS.length + 'S');
    } else {
        //힌트를 주기 위해 S는 answer의 수를 B는 cross의 수를 반환한다.
        console.log(answerS.length + 'S' + cross.length + 'B');
    }
    // if (answerS.length === 3) {
    //     console.log(trying + '번만에 맞히셨습니다.');
    //     console.log('게임을 종료합니다.');
    //     r.close();
    // }
}
