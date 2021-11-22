# CH02_04. Typescript vs. Javascript

```
💡 TypeScript 는 왜 필요한가?  
```

#

### 자바스크립트는 타입스크의 슈퍼셋이다.

여기서 슈퍼셋이란? 타입스크립트는 자바스크립트의 모든 기능을 제공하고, 추가로 더 제공하고 있기 때문에 슈퍼셋이라고 불림

- 자바스크립트를 없애긴 쉽지 않으므로 공생하는 전략 선택  

#


### 어떤 부분을 공생할 것인가?

타입스크립트는 이름에서 모든 것을 다 표현하고 있음

즉, 자바스크립트가 제공하지 못하는 타입을 제공하고 있음

```
💡 어떻게 제공하는지, 어떤 공생 전략을 사용하고 있는지?  
```
#

### 코드

```tsx
let age = 10;

// 타입스크립트가 제공하는 데이터의 유형 설명
let wegith:number = 80;

// 키의 경우 단위가 없으면 값을 정확히 알 수가 없음 (나라별로 쓰는 단위가 다르므로)
let height:number = 176;

// 따라서 타입스크립트는 단위도 알 수 있도록 유형을 만들어낼 수 있는 기능을 제공함
type Centimeter = number;
let newHegith:Centimeter = 176; // 키는 176이며 단위는 센치이다.

// 정보가 훨씬 풍성해짐
type RainbowColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple';
let color:RainbowColor = 'orange';

color = 'black'; // color는 RainbowColor 타입으로 선언되었으므로 거기에 없는 'black'을 넣으면 에러가 난다.
```  

#

### 타입 정의, 데이터를 설명하는 것은 왜 중요한가?

- 프론트엔드 코드는 데이터가 차지하는 비중이 크다.