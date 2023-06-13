const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 1;
let cmptNum = []

const generateRand = () => {
    let rand = ''
    while (rand.length < 3) {
        const randNum = Math.floor(Math.random() * 10);
        !rand.includes(randNum) && (rand += randNum)
    }
    return rand.split('').map(Number)
}

const answerCallback = (answer) => {
    let result = matchNums(cmptNum, answer.split('').map(Number))
    count ++;
    result.strike === 3 ? rl.close() : rl.question(`${count}번째 시도:`, answerCallback);
}

const matchNums = (rand, answer) => {
    let status = {
        strike: 0,
        ball: 0,
    }
    console.log("rand:", rand)
    for (let i =0; i < answer.length; i++) {
        if (answer[i] === rand[i]) {
            status.strike++;
            continue
        }
        const newArr = [...rand].filter((item,idx) => idx !== i)
        newArr.includes(answer[i]) && status.ball++;
    }
    console.log(`${status.strike}S${status.ball}B`)
    return status;
}
cmptNum = generateRand();

rl.question(
    `컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!
${count}번째 시도: `, answerCallback
)

rl.on('close', () => {
    process.exit()
});
