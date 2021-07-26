# Webpack, Babel을 이용한(CRA x) 커스텀 프로젝트 build

### Webpack
- 모듈 번들러
- Entry : 어떤 module을 시작점으로 해석할지 결정
- Output : Webpack이 생성하는 bundle파일에 대한 정보를 설정
- Mode : 운영모드 또는 개발 모드로 설정
- Loader : 다양한 모듈을 입력받아서 처리, .js or json파일을 기본 module로 사용
- Plugin : webpack이 동작하는 과정에서의 개입을 통해 여러가지 역할 담당

### React 개발 환경 구성
1. package.json초기화
```
npm init -y
```

2. react, typescript설치
```
yarn add react react-dom
yarn add -D typescript @types/react @types/react-dom
```

3. typescript 설정
- tsconfig.json생성
```
tsc --init
```
- tsconfig.json에서 compiler option, include, exclude 등 설정

4. entry file 설정
- index.tsx
- App.tsx

5. babel 설정
- babel 설치
```
yarn add -D babel-loader @babel/core @babel/preset-env
yarn add -D @babel/preset-react @babel/preset-typescript
```
- babel.config.js 작성

6. webpack설정 
- webpack설치
- plugin으로 ts-loader 설치
```
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin ts-loader
yarn add -D fork-ts-checker-webpack-plugin tslint tslint-react
```
- webpack.config.js 작성

7. WDS(webpack-dev-server) 설정
- react application개발 시 실시간 reload 기능을 가진 서버로 개발하면 편함
- webpack.config.js에 내용 추가 => devServer, plugins
```js
const webpack = require('webpack');
const path = require('path');

module.exports = {
    ...,
    devServer:{
        historyApiFallback: true,
        inline: true,
        port: 3000,
        hot: true,
        publicPath: '/'
    },
    plugins:[
        ...,
        new webpack.HotModuleReplacementPlugin()
    ]
}
```
8. package.json 설정
```
"scripts": {
  "build": "webpack --mode production",
  "prebuild": "npm build",
  "start": "webpack serve"
},
```

9. start
```
yarn run serv
```