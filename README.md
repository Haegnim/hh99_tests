### [과제] 숙련주차 과제 답

## [x]추가하기 버튼을 클릭해도 추한 아이템 화면에 표시되지 않음

Form 컴포넌트에 addTodo 액션을 불러왔으나 useDispatch를 이용해 addTodo을 사용하지 않았습니다.
그래서 useDispatch를 사용하고 onSubmitHandler 함수의 내용을 다음과 같이 바꿨습니다.
추가된 todo의 내용을 payload에 담아서 addTodo로 보냅니다.

````
const dispatch = useDispatch();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.title.trim() === '' || todo.body.trim() === '') return;
        // payload로 넣어줄 값을 설정
        const payload = {
            id: id,
            title: todo.title,
            body: todo.body,
            isDone: false,
        };
        // dispatch로 리듀서를 실행
        dispatch(addTodo(payload));
        setTodo({
            id: 0,
            title: '',
            body: '',
            isDone: false,
        });
    };
```


### [x]추가하기 버튼을 클릭후 기존에 존재하던 아이템들이 사라짐

todos.js에 리듀서 부분에 문제가 있었습니다. 기존의 ADD_TODO는 todos:[action.payload]만 반환하여 todos의 값이 초기화되고 action.payload만 들어가 기존의 state.todos은 사라지게 됩니다. 해당 부분을 todos: [...state.todos, action.payload]로 수정하여 기존의 state.todos에 action.payload 데이터가 추가되는 기능으로 수정하였습니다.

```
case ADD_TODO:
            return {
                ...state,
                //todos의 값이 초기화되고 action.payload만 들어가 기존의 state.todos들이 지워지게됨
                todos: [...state.todos, action.payload],
            };
```

### [x]삭제 기능이 동작하지 않음.
todos.js 리듀서 부분에 DELETE_TODO액션이 존재하지 않습니다.  DELETE_TODO액션을 다음과 같이 추가하였습니다.

```
case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.payload;
                }),
            };
```
---

### [x]상세 페이지에 진입하였을 때 데이터가 업데이트 되지 않음.
Detail 컴포넌트는 모든 todos를 불러왔는데 todos는 여러 객체가 담긴 배열로 불러와집니다. 하지만 데이터를 불러올때 todo.id 형식으로 몇번째 객체의 데이터를 불러올지 설정하지 않아서 아무 데이터도 호출하지 못합니다.
useParams로 추출한 id값을 todo의 id값들과 비교하여 같은 id의 데이터만 호출하도록 수정하였습니다.

```
const Detail = () => {
    const dispatch = useDispatch();
    //state.todos.todo에 오타 state.todos.todos로 수정
    //todos의 모든 객체가 불러와지는데 어떤 객체를 보여줄지 선택하지 않아서 화면에 안나옴
    const todo = useSelector((state) => state.todos.todos);
    const { id } = useParams();
    const navigate = useNavigate();
    //id는 주소창으로 보내진 todos의  id를 가져온 값이다.
    //todos 중에서 id와 같은 id를 가진 todo를 find로 찾아 todoDetail로 반환한다.
    const todoDetail = todo.find((todoDetail) => todoDetail.id === id);
    console.log(todoDetail);

    return (
        <StContainer>
            <StDialog>
                <div>
                    <StDialogHeader>
                        <div>ID :{todoDetail.id}</div>
                        <StButton
                            borderColor="#ddd"
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            이전으로
                        </StButton>
                    </StDialogHeader>
                    <StTitle>{todoDetail.title}</StTitle>
                    <StBody>{todoDetail.body}</StBody>
                </div>
            </StDialog>
        </StContainer>
    );
};
```

---

### [x] 완료된 카드의 상세 페이지에 진입하였을 때 올바른 데이터를 불러오지 못함.
완료된 카드는 Link to안의 주소 값을 map의 index을 사용하였습니다. Detail 페이지는 params의 값을 읽어 todos의 id들과 대조하여 같은 id의 데이터를 불어오기 때문에 index를 사용하면 todos에 저장된 id와 다를 수 있으므로 데이터가 호출되지 않습니다.
해당 부분을 index 값이 아닌 todo.id로 수정하였습니다.

```
todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <StTodoContainer key={todo.id}>
                                <StLink to={`/${todo.id}`} key={todo.id}>
                                    <div>상세보기</div>
                                </StLink>
                                <div>
                                    <h2 className="todo-title">{todo.title}</h2>
                                    <div>{todo.body}</div>
                                </div>
                                <StDialogFooter>
                                    <StButton
                                        borderColor="red"
                                        onClick={() => onDeleteTodo(todo.id)}
                                    >
                                        삭제하기
                                    </StButton>
                                    {/* 취소 버튼은 함수에 인자를 넣어주지 않았다. */}
                                    <StButton
                                        borderColor="green"
                                        onClick={() => onToggleStatusTodo(todo.id)}
                                    >
                                        {todo.isDone ? '취소!' : '완료!'}
                                    </StButton>
                                </StDialogFooter>
                            </StTodoContainer>
                        );
                    } else {
                        return null;
                    }
                })
```

### [x] 취소 버튼 클릭시 기능이 작동하지 않음.

onToggleStatusTodo함수는 문제없이 동작하나 완료된 카드의 취소버튼은 onClick={onToggleStatusTodo}으로 해당 함수에 인자를 넣어주지 않았습니다. TOGGLE_STATUS_TODO는 todo의 id값을 필요로 하기 때문에 인자로 todo.id값을 넣어주어야 정상 동작합니다.

해당 부분을 다음과 같이 수정하였습니다.

```
<StButton
      borderColor="green"
      onClick={() => onToggleStatusTodo(todo.id)}
>
   {todo.isDone ? '취소!' : '완료!'}
</StButton>
```

### [x] 과제를 마쳤다면 배포도 한번 해볼까요? 배포하셨다면 URL을 제출해주세요.
````
