해당 프로젝트(폴더)에 typescript를 설정하는 방법

1. npm 설정

    ```
    npm init -y
    ```

2. typescript 설치

    ```
    npm install typescript
    ```

3. `package.json` 파일의 dependencies에서 typescript 확인

    ```
    "dependencies": {
        "typescript": "^5.2.2"
    }
    ```

4. `node_modules` 폴더에서 typescript 폴더 확인

5. tsc를 실행할 수 있는 두 가지 방법 <br />
    1. `node_modules/.bin/tsc`
    2. `npx tsc` <br />
       이 방법을 사용하기 위해선 `npx tsc --init`을 통해 `tsconfig.json`파일을 생성해야함

6. `.js`를 자동으로 생성해주는 방법

    ```
    npx tsc -w
    ```

7. 스크립트 등록
   `package.json` 수정
    ```
    "scripts": {
        "build": "tsc"
    }
    ```
