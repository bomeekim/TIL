# React 간단하게 훑기
> [유투브 코딩앙마 React JS 강좌](https://www.youtube.com/playlist?list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-)

### ClassName
`class` 가 자바스크립트 예약어이므로 React에서는 `ClassName` 을 사용한다.
```js
function App() {
  return (
    <div ClassName="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
```

### JSX
자바스크립트를 확장한 문법으로 자바스크립트 내부에서 HTML처럼 작성한다.
> *💬 변수는 중괄호를 이용해 작성한다.*

### 컴포넌트
- 비슷한 것들을 묶어 재활용할 수 있도록 하는 단위
- 그전에는 html 안에 하나의 페이지를 전부 다 구현했었음

#### 종류
1. 함수형
2. 클래스형

> *💬 함수형에서 return 하는 것이 바로 JSX (Javascript XML) 이다. React에서는 스타일, CSS 등도 자바스크립트 스타일로 작성해야한다.*

#### 함수형으로 컴포넌트 선언하기
1. 화살표 함수
```js
const Hello = () => {
  <p>Hello</p>
}
```
2. 함수 선언식
```js
export default function Hello() {
  
}
```

---

## CSS 작성하기
### inline 
CamelCase 로 작성한다.
```html
<h1 style={
  {
    color: '#fff',
    borderRight: '2px solid black',
    marginBottom: '30px',
  }
}>
```

### 모듈로 작성
1. `컴포넌트 이름.module.css` 형태로 파일을 작성한다.

> *💬 동일한 클래스 내용이 들어있어도 모듈화가 되어있으므로 중복될 일이 없다.*

2. 사용하려는 컴포넌트 파일에 import한다.

```js
import styles from 'xx.module.css';
```
3. 컴포넌트에 적용한다.
```html
<h1 ClassName={styles.div}>테스트</h1>
```

---

## 이벤트 작성하기
- `onClick` 은 Camel Case 로 적어준다.
- 방법 2의 경우 파라미터를 전달하기 수월하다.
```js
export default function Hello() {
  function showName() {
    console.log('Mike');
  }

  function showAge(age) {
    console.log(age);
  }
  
  return (
    <div>
      <button onClick={showName}>방법 1</button>
      <button onClick={() => {
        showAge(10);
      }}>방법 2</button>
    </div>
  );
}
```

## State, UseState
- 컴포넌트가 관리한다.
- **동일한 컴포넌트여도 state는 각각 관리된다.**
- state에 값이 변경된 것을 감지하면 DOM을 업데이트해준다.
  - `document.getElementById().innerText = 새로운 값` 과 동일

### State를 만드는 방법
#### UseState
- React 16.8 버전 부터 사용할 수 있게됨
  - 모든 컴포넌트를 함수형으로 만들 수 있게 되었다.

```js
const [name, setName] = useState('Mike'); // 초기값을 넣어준다.
setName('Jane'); // name이 변경되며 화면이 업데이트 된다.
```

##### 💡 [참고] 초기 리액트 
|클래스형 컴포넌트|함수형 컴포넌트|
|----------------|:-------------:|
| state, lifecycle 처리 | UI 표현 |

## Props (Properties)
### 사용 방법
1. 하위 컴포넌트로 값을 전달한다.

```html
<Hello age={10} />
```

2. 하위 컴포넌트에서 값을 전달 받는다.

```js
export default function Hello (props) {
  console.log(props); // { age: 10 }
}
```

>❓ 만약 전달받은 props 의 값을 변경하고 싶으면?

컴포넌트 내부에서 다시 state 를 만들어야한다.
```js
const [age, setAge] = useState(props.age); // props로 전달받은 age 값으로 초기화한다.
```

>❓ 넘겨받은 값(props)을 변경하고 싶으면?

**변경 불가능**

---

## React Router DOM
리액트 라우터 라이브러리

```js
import {
  BrowserRouter, // 앱 전체를 브라우저 라우터로 감싼다.
  Route,
  Switch, // URL에 따른 페이지들을 보여준다.
} from 'react-router-dom';
```

### 예시
```html
<BrowserRouter>
  <div ClassName="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <DayList />
      </Route>
      <Route path="/day">
        <Day />
      </Route>
    </Switch>
  </div>
</BrowserRouter>
```
`<Route exact path="/">` 의 경우 `exact` 키워드가 들어가있는데, 이걸 넣어주는 이유는 패스가 정확하게 `'/'` 일 때만 해당 라우터로 진입하도록 하기 위해서이다. 

만약 `exact` 키워드가 들어가있지 않다면 `'/day'`의 경우에도 슬래시가 포함되어 있으므로 `'/'` 라우터로 진입하게 된다.

### Link
```js
import { Link } from 'react-router-dom';
```
|기존|리액트|
|---|:----:|
|`<a href="주소">`|`<Link to="주소">`|

### 다이나믹 라우팅
`useParams` 를 사용한다.
```html
<Route path="/day/:id">
  <Day/>
</Route>
```
```js
import { useParams } from 'react-router-dom';
const params = useParams(); // { id: '2' }
```

---

## UseEffect
어떤 상태값이 바뀌었을 때 동작하는 함수를 작성할 수 있다.

```js
// 첫번째 매개변수로 함수를 받는다.
useEffect(() => {
  // 동작할 내용 작성
})
```

useEffect는 상태값이 바뀌고 렌더링된 다음에 호출되는데, 그러다보니 **❗불필요하게❗ 값이 호출되기도 한다.**

### 불필요한 호출을 막는 방법
**두번째 매개변수를 활용한다.**
```js
useEffect(() => {
  console.log('count change');
}, [count]);
```
두 번째 매개변수는 배열인데, 상태변화를 감지할 state를 넣는다. 이를 *의존성 배열*이라고 한다.

> *💬 렌더링 직후 딱 한번만 실행되게 하려면? (ex. fetch 작업)*

두 번째 매개변수에 빈 배열을 넣어준다.

```js
useEffect(() => {
  console.log('fetch!');
}, []);
```

---

## Custom Hook 만들기
동일한 작업의 코드를 커스텀 훅으로 생성하면 하나의 훅에서 관리하기 때문에 관리가 용이하고, 각 컴포넌트에서 코드량이 줄어든다.

### 예시
#### hooks/useFecth.js
컴포넌트가 렌더링될 때 필요한 데이터를 Fetch 하는 작업을 커스텀 훅으로 만든 예제
```js
import { useEffect, useState } from 'react';

export default function useFecth(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data); // data 를 state 에 저장
      });
  }, [url]);

  return data;
}
```
해당 훅을 import 하는 컴포넌트는 위의 코드를 아래와 같이 작성할 수 있다. 👍🏻
```js
const data = useFecth(url);
```
---
## UseRef
DOM 에 접근할 수 있도록 해준다. (vue ref 개념과 비슷)
### 사용 방법
1. ref 연결

```js
const ref = useRef(null);
<input type="text" ref={ref} />
```

2. current 로 값을 가져온다.
```js
console.log(ref.current.value);
```
---
## UseHistory
- React Router 에서 지원하는 기능 (Vue Router 와 비슷)
- 페이지를 전환할 때 사용


### 예시
```js
import { useHistory } from 'react-router';

const history = useHistory();
history.push(path); // <Link to="" />
```