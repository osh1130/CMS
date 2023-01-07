<h1 align="center">A simplified Content Management System with React</h1>


<h3 align="center">
  <a href="https://jira.ivorreic.com/">Visit the app</a> |
  <a href="https://github.com/osh1130/CMS/blob/master/CMS-API.md">View API</a>
</h3>


![App screenshot](https://i.postimg.cc/sgWRckKC/HomePage.png)

## What is this 🤷‍♀️

Content Management System is a system located between the WEB front-end (Web server) and the back-end office system (content creation, editing). Users can create, edit, and publish content. The "content" referred to here may include files and pictures.

## Features 🚥

- Encapsulate the axios request and carry the token.
- Add routing guards to ensure that when there is no token, it will jump to the login page.
- using open source web rich text editor- wangEditor. (https://www.wangeditor.com/en/)
- Use react-redux to detect the modification of the updated avatar.

## Setting up development environment 🛠

- `$ npm i antd redux react-redux react-router-dom@6 axios less less-loader@6.0.0 --save`

- App should now be running on `http://localhost:3000/`


## Run this Project
```
git clone https://github.com/osh1130/CMS.git 

cd CMS

npm install

npm run start 

```



## Generator

[create-react-app] https://create-react-app.dev/


## Technology Stack

react + react-router-dom + axios + ES6 + antd + less-loader + redux


## structure

```

src  
  ├─assets     
  ├─request
  │      api.js
  │      request.js
  │
  ├─components
  │      Aside.js
  │      Bread.js
  │      Header.js
  │      
  ├─router
  │      index.js
  │      
  ├─Pages
  │      Edit.jsx
  │      List.jsx
  │      Login.jsx
  │      Register.jsx
  │      Means.jsx
  │
  ├─store
  │      index.js
  │      reducers.js
  │
  ├─App.jsx
  ├─index.js



            
```

## Target Function

- [x] Register/Login 
- [x] Checking/Modify essays details-- Means
- [x] Creating new essay/Checking essays list--List（[HomePage.png](https://postimg.cc/k27ZMhkT)）
- [x] Modify personal information

[![register.png](https://i.postimg.cc/mDbVP9h6/register.png)](https://postimg.cc/GB5vNHFk)
[![login.png](https://i.postimg.cc/QCwS6xJQ/login.png)](https://postimg.cc/Lgkz5S75)
[![Editor.png](https://i.postimg.cc/sxDtFXWb/Editor.png)](https://postimg.cc/TLFkgTCc)
[![means.png](https://i.postimg.cc/Kzmn8y4P/means.png)](https://postimg.cc/bGFGmWxr)


## What's missing?

There are still more features that can be perfected for this demo product:


## renderings
