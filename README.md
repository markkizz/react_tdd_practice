# What's Lunch

## 📖 Description

This repo is for practice TDD with React and Redux

## 🛠 Built with

- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) - Project creator
- [React](https://reactjs.org/) - Front-end framwork
- [Redux](https://redux.js.org/) - A predictable state xontainer for JavaScript apps
- Enzyme
- Jest

## 💡 Getting Start

```
  npm install or yarn install

  npm start or yarn start
```

### Basic config of testing
```
// setupTests.js
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16' 

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
})
```

## Author

Kittayot Pattanapara
