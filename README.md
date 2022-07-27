## PATH

| 구분   | 경로                  |
| ------ | --------------------- |
| Server | http://127.0.0.1:8000 |
| Client | http://localhost:3000 |

### 리액트 패키지 설치

```bash
$ cd client/devs
$ npm i @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome axios http-proxy-middleware react-router-dom styled-components styled-reset

// 설치해도 안되면 package.json의 dependencies 보고 위에꺼 중에 안 깔려있는 거 설치하세용
```

### 장고 패키지 설치

```bash
$ cd server
$ source myvenv/Scripts/activate
$ pip install django
$ pip install django-cors-headers
$ pip install djangorestframework

// pip freeze로 설치 확인
```

### 리액트 실행

```bash
$ cd client/devs
$ npm start
```

### 장고 실행

```bash
$ cd server
$ source myvenv/Scripts/activate
$ cd devs
$ python manage.py runserver
```

### 리액트 + 장고 실행

```bash
$ cd server
$ source myvenv/Scripts/activate
$ cd devs
$ python manage.py runserver react
```
