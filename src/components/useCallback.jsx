/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-08 17:09:03
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-08 20:50:03
 * @Description: 
 */

import React, { useState, useMemo, memo,useCallback } from "react";

const MemoChild = memo(function MemoChild({onChange}){
    console.log("子组件渲染了");
    return (
        <div>
            <p>我是 memoChild  子组件</p>
            <input type="text" onChange={(e)=>{
                console.log('子组件中的值:',e.target.value);
                onChange(e.detail.value)
            }}/>
        </div>
    )
})

const UseCallback = () => {
    const [count, setCount] = useState(0);

    // const handleChange=(value)=>{
    //     console.log('在父组件中获取到的值:',value);
    // }

    // 使用useCallback包裹函数,只有当依赖项发生变化时,才会重新创建函数
    const handleChange = useCallback((value) => { // useCallback的第一个参数是一个函数,第二个参数是一个数组,数组中的每一项都是一个依赖项,只有依赖项发生变化时,才会重新创建函数
        console.log('在父组件中获取到的值:',value);  
    },[])

    console.log('父组件渲染了');
    
    return (
        <div>
            <hr />
            <h3>11、useCallback的使用:使用useCallback包裹函数,只有当依赖项发生变化时,才会重新创建函数,才会重新出发子元素的重新渲染;</h3>
            <p>1、useCallback的第一个参数是一个函数,第二个参数是一个数组,数组中的每一项都是一个依赖项,只有依赖项发生变化时,才会重新创建函数</p>
            <p>count的值:{count}</p>
            <button onClick={() => {
                setCount(count+1)
            }}>点击count++</button>
            <MemoChild onChange={handleChange} />
        </div>
    );
}
export default UseCallback;