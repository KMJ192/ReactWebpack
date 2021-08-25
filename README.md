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
    devServer: {
        open: true,
        overlay: true,
        historyApiFallback: true,
        inline: true,
        port: 3000,
        hot: true,
        publicPath: '/',
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
yarn run serve
```

10. css-loader
11. hasing for caching
- contents hashing
- runtime hasing
- vendor hashing
12. clean webpack plugin
13. css-minimizer-webpack-plugin 설정·
14. terser 설정
15. webpack.Define설정
16. webpack => common, prod, dev 분리
17. url-loader, sass-loader 설정
18. postcss설정 
- autoprefixer를 쓰기 위함, vendor-prefixed css속성을 자동으로 추가해줌
- postcss, postcss-loader 설치
```
yarn add -D postcss postcss-loader
```
- postcss.config.js 파일 설정
- webpack에 postcss 설정
```js
// ...
const postcssLoader = {
  loader: 'postcss-loader',
  options: {
      postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js')
      }
  }
}
// ...
module.exports ={
  module: {
  rules: [
    // ...,
    {
      test: /\.s[ac]ss$/i,
      postcssLoader,
      // ...
    },
    //...
  ]
}
```

19. eslint, prettier 설정
- prettier eslint 설치
- eslint-config-prettier eslint-plugin-prettier 설치
- @typescript-eslint/eslint-plugin @typescript-eslint/parser 설치
- eslint-config-prettier 설치 (eslint에서 prettier와 중복되는 룰을 삭제)
- eslint-plugin-prettier 설치 (eslint에 prettier의 formatting 기능 추가)
```
yarn add -D prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier
```
- airbnb의 lint설정을 따른다. eslint-config-airbnb를 설치한다.
```
npx install-peerdeps --dev eslint-config-airbnb
// or
yarn add -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```
- .eslintrc, .prettierrc 파일 생성 및 옵션 설정
- .eslintignore 파일 생성 (eslint를 적용하지 않을 파일 설정)
- eslint설정이 적용 안된 경우 setting.json에 "eslint.alwaysShowStatus": true를 설정하면 vscode의 progress bar에서 ESLint로그를 확인할 수 있다. 여기에서 오류 로그를 확인하여 수정 가능

### Project run
1. npm
- dev serve
```
npm run start
```
- dev
```
npm run dev
```
- prod
```
npm run build
```

2. yarn
- dev serve
```
yarn run start
```
- dev
```
yarn run dev
```
- prod
```
yarn run build
```