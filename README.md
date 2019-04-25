# 19/04/25

url에 있는 파라미터 들은 항상 패당문서의 componenet파일에서 가지고 있어야 하며, 배열로 등록할 시 활용이 용이하다.
ex)
```
labels: any = {
    LOGIN_TITLE: '',
    LOGIN_REGISTER: '',
    LOGIN_ID: '',
    LOGIN_PASSWORD: '',
    LOGIN_SIGN_IN: '',
    WARNING_CONTENT: '',
    LOGIN_INVALID_MEMBER: '',
    REQUIRED_PARAMETER: ''
  };
```
또한 이렇게 활용함으로써 나중에 생길수 있는 url변경에 대비 할 수 있다.

-> 실수하는 것.
함수를 미리 정이해 둘것. 항상 html이 바인딩 하는 경우에 에러가 발생하니 조심.
label같은 경우에 이런 실수가 발생하였는데, 이전에 보지못한 것이기도 했고, 이런식으로 활용할 수 있구나 라는것을 알게 됨.

단축키
```
shift + f6 => 해당하는 단어를 모든파일에서 찾아 변경
ctrl + r => 해당 문서에서 같은 문자열 변경하기
```
