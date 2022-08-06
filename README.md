## PATH

| 구분   | 경로                  |
| ------ | --------------------- |
| Server | http://127.0.0.1:8000 |
| Client | http://localhost:3000 |

### 리액트 패키지 설치

```bash
$ cd client/devs
$ npm install
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

### 장고 실행 전 데이터베이스 업데이트

```bash
$ cd server
$ source myvenv/Scripts/activate
$ cd devs
$ python manage.py makemigrations
$ python manage.py migrate
```

### 리액트 + 장고 실행

```bash
$ cd server
$ source myvenv/Scripts/activate
$ cd devs
$ python manage.py runserver react
```
