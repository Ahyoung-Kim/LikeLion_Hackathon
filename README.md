## PATH

| 구분   | 경로                  |
| ------ | --------------------- |
| Server | http://127.0.0.1:8000 |
| Client | http://localhost:3000 |

## Client PATH

| path                                   | 설명                                                                                               |
| -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| /                                      | landing page 및 회원가입 페이지                                                                    |
| /login                                 | 로그인 페이지                                                                                      |
| /main                                  | 메인 피드 페이지                                                                                   |
| /profile/:user_id                      | 유저 프로필 페이지(parameter: user_id == User 인스턴스 아이디값)                                   |
| /profile/:user_id/post/:category/:name | 유저 프로필 페이지의 게시글 목록 페이지 (ex) /profile/12314adf12/programming-languages/javascript) |
| /search                                | 검색 페이지                                                                                        |

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
$ pip install Pillow

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
