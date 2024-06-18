/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-07 14:29:48
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-07 15:07:03
 * @Description: 
 */
import React, { useState, createContext, useContext } from "react";

const Ctx = createContext();

function A() {
    return (
        <div>
            <h3>这是A组件</h3>
            <B />
        </div>
    )
}

function B() {
    const msg = useContext(Ctx);
    return (
        <div>
            <h3>这是B组件,接收到的数据:{msg}</h3>
        </div>
    )
}

const Context = () => {
    const [msg, setMsg] = useState('这是context传递的数据:Hello World.');
    return (
        <div>
            <h3>4、使用context机制实现跨层级组件通信:</h3>
            <p>1、使用createContext方法创建一个上下文对象ctx;</p>
            <p>2、在顶层组件中使用ctx.Provider组件包裹需要共享数据的组件;</p>
            <p>3、在底层组件中通过useContext钩子函数获取数据.</p>

            <Ctx.Provider value={msg}>
                <A />
            </Ctx.Provider>
            <hr />
        </div>
    );
}
export default Context;