## korean-random-username

#### Installation

```
npm install korean-random-username

yarn add korean-random-username
```

#### import

```
import {randomUsername} from "korean-random-username"
```

#### 한국어 닉네임 자동생성

```
const username = randomUsername();
console.log(username)
// 성실한자몽
```

#### 닉네임 뒤 랜덤 숫자 지정

```
// 1 ~ 1000 random number added
const username = randomUsername(1000);
console.log(username)
// 성실한자몽673
```
