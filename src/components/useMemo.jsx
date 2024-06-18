/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-08 17:09:03
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-08 17:48:43
 * @Description: 
 */

import React, { useState, useMemo, memo } from "react";

const Child = () => {
    console.log("child执行了");
    return (
        <div>我是 child 子组件,props不变我也会更新</div>
    )
}

const MemoChild = memo(() => {
    console.log("child执行了");
    return (
        <div>我是 memoChild  子组件,props不变我不会更新</div>
    )
})

const UseMemoCom = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const change1 = () => {
        setCount1(count1 + 10);
    }
    const change2 = () => {
        setCount2(count2 + 5);
    }

    const result = () => {
        console.log("result执行了"); // 会在每次渲染时都执行,因为每次渲染都会执行函数组件
        return count1 + 1;
    }

    const memoResult = useMemo(() => {
        console.log("memoResult执行了"); // 只在count1改变时执行,只有count1改变时才会重新计算memoResult的值
        return count1 + 1;
    }, [count1])

    const list = [1, 2, 3];
    const [list2, setList2] = useState([1,2,3]);

    return (
        <div>
            <h3>9、useMemo的使用,可以缓存计算结果,在初始化执行后,只有当依赖的参数发生变化时才重新执行.</h3>
            <p>count1的值:{count1}</p>
            <p>count2的值:{count2}</p>
            <p>result的值:{result()},memoResult的值为:{memoResult}</p>
            <button onClick={() => change1()}>改变count1</button>
            <button onClick={() => change2()}>改变count2</button>
            <hr />
            <h3>10、memo的使用,使用memo包裹的子组件,只有当props参数变动的时候才会重新渲染.</h3>
            <p>1、memo中的props的比较机制:memo会对每一个prop进行Object.is()比较新旧值,返回true就是没有改变,不需要更新.</p>
            <p>2、简单数据类型:Object.is(3,3)---true,没有改变.</p>
            <p>3、引用数据类型:Object.is(name:"张三",name:"张三")---false,引用地址不同,需要更新.显示问题,真实需要把name放在大括号里面</p>
            <p>4、保证引用稳定不更新,1、可以用useMemo缓存传入子组件的引用类型数据,2、使用useState生成的数组、对象传入子组件中也不会出发更新.</p>
            <Child />
            <MemoChild list={list} list2={list2}/>
        </div>
    );
}
export default UseMemoCom;