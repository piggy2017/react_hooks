/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-07 15:15:36
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-08 17:24:57
 * @Description: 
 */

import React, { useState, useEffect, useReducer } from "react";
// 引入store,用于获取redux中的数据
import store from "../store";
// 引入actionCreator,用于创建action对象
import { createIncrementAction, createDecrementAction } from "../store/countAction";
const ReduxCom = () => {
    // const [count, setCount] = useState(0);
    const [forceUpdateId, forceUpdate] = useReducer(() => [], []);

    useEffect(() => {
        // 监听redux中的数据变化
        store.subscribe(() => {
            console.log("redux中的数据发生了改变");
            // 重新渲染
            forceUpdate();
        })
    }, [])

    const increment = () => {
        // setCount(count + 1);

        // store.dispatch({ type: "increment", data: 10 });

        store.dispatch(createIncrementAction(10));
    }
    const encrement = () => {
        // setCount(count - 1);

        // store.dispatch({ type: "decrement", data: 2 });
        store.dispatch(createDecrementAction(2));
    }
    const asyncIncrement = () => {
        setTimeout(() => {
            // setCount(count + 1);
            store.dispatch(createIncrementAction(1));
        }, 1000);

        // 异步action需要使用中间件redux-thunk
        // 可以不使用异步action,直接在action中使用异步代码
        // 先进行异步请求,请求成功后再进行dispatch
    }
    return (
        <div>
            <h3>6、redux的基本使用,redux把数据修改流程分为了三个核心概念:store、action、reducer</h3>
            <p>1、action:对象,用来描述如何修改数据.type:"ADD",data:name:"张三";type === 表示属性,字符串属性,唯一.data:数据类型,可选 </p>
            <p>2、reducer:纯函数,用于初始化加工、加工状态.根据旧的state和action,生成一个新的state.</p>
            <p>3、store:将state、action、reducer联系在一起的对象</p>
            <h4>从redux中获取到的count:{store.getState().count}</h4>
            <button onClick={increment}>add</button>&nbsp;
            <button onClick={encrement}>minus</button>&nbsp;
            <button onClick={asyncIncrement}>asyncadd</button>
            <hr />
            <h3>7、纯函数的概念:一类特别的函数,只要是输入相同的参数,一定会得到相同的输出.纯函数的返回值仅取决于其参数的值</h3>
            <p>纯函数的约束:1、纯函数中不能改写参数的值;2、不会产生任何副作用,例如:网络请求,输入、输出设备;
                3、不能调用new Date()或者Math.random()等不纯的函数.</p>
            <p>reducer必须是一个纯函数.</p>
            <hr />
            <h3>8、高阶函数:如果一个函数符合下面的两个规范中的任何一个,那么该函数就是高阶函数.</h3>
            <p>
                1、若A函数接收的参数是一个函数,那么这个A函数就是高阶函数.
            </p>
            <p>2、若A函数的返回值依然是一个函数,那么这个A函数就是高阶函数.</p>
            <p>常见的高阶函数:定时器设置函数、Promise;数组的map、forEach、filter、find等</p>
            <hr />
        </div>
    );
}
export default ReduxCom;