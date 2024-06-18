/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-07 14:29:48
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-07 23:51:19
 * @Description: 
 */
import React, { useEffect, useRef } from "react";
import { useShowComponent } from "../hooks/useClick";
const Base = () => {
    const [show, changeShow] = useShowComponent();
    useEffect(() => {
        console.log('Base组件挂载,触发useEffect');
        return () => {
            // 组件卸载是触发,清除副作用,例如定时器,事件监听等
            console.log('Base组件卸载');
        }
    }, [])

    const inputRef = useRef(null);


    const getDom = () => {
        console.log(inputRef.current, inputRef.current.value);
    }
    return (
        <div>
            <h3>1、useEffect:可接收两个参数</h3>
            <p>1、第一个参数是一个函数,也叫做副作用函数,在函数内放置要执行的操作.</p>
            <p>2、第二个参数是可选的:
                不传:组件初始渲染 + 每次组件更新都会触发useEffect;
                传空数组:只会在组件初始渲染时触发useEffect;
                传入一个或多个状态:组件初始渲染 + 所依赖的状态发生变化时会触发useEffect.
            </p>

            <h3>2、useState是一个函数,返回值是一个数组:</h3>
            <p>数组的第一项是状态变量,第二个参数是set函数用来修改变量状态,useState的参数会作为变量的初始值.</p>

            <h3>2.1、setState:是同步的.但是setState引起的react更新是异步的.</h3>
            <pre>
                this.setState(()= > setCount(1),()= > {})
                setState的回调执行时机:在react修改完状态并且重新执行完render后执行.
            </pre>

            <h3>3、useRef获取dom元素:</h3>
            <p>1、useRef生成ref对象,绑定到dom标签上,2、通过ref.current获取DOM.</p>
            <input type="text" ref={inputRef} />
            <button onClick={getDom}>点击获取input的Dom元素</button>

            {show ? <h4>base显示</h4> : <h4>base隐藏</h4>}
            <button onClick={changeShow}>点击切换显示和隐藏</button>
            <hr />
        </div>
    );
}
export default Base;