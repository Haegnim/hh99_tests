import axios from 'axios';

const signUp = async (signupData) => {
    try {
        const response = await axios.post('http://3.38.191.164/register', signupData);
        alert('회원가입에 성공했습니다');
        return response.data;
    } catch (error) {
        alert(error.response.data.message);
    }
};

const login = async (loginData) => {
    try {
        const response = await axios.post('http://3.38.191.164/login', loginData);
        const token = response.data.token;
        localStorage.setItem('accessToken', token);
        alert('로그인에 성공했습니다');
    } catch (error) {
        alert(error.response.data.message);
        // alert('로그인에 실패했습니다');
    }
};

const authCheck = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
        await axios.get(`http://3.38.191.164/user`, {
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
        });
        return true;
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.removeItem('accessToken');
            //[ ]로그아웃 상황에서 2번 호출되는 것 같다.
            // alert('로그인이 필요합니다.');
        }
        return false;
    }
};

export { signUp, login, authCheck };
