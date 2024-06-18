/*
 该文件专门用于暴露一个store对象,整个应用只有一个store对象
 */

// 引入createStore方法,专门用来创建store;
import { createStore } from 'redux';
// 引入为Count组件服务的reducer;
import countReducer from './countReducer';

const store = createStore(countReducer);

// 暴露store
export default store;
