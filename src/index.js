/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-05 23:16:06
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-07 17:45:14
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);

// 全局订阅,监测redux中状态的变化,只要redux中的状态发生了变化,就重新渲染根组件App.开启全局订阅后就不需要在组件中进行单独订阅了.
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </React.StrictMode>
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
