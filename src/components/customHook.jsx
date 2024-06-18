/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-07 14:16:21
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-07 19:14:43
 * @Description: 
 */
import React, { useState } from "react";

// const useClick = () => {
//     const [point, setPoint] = useState({ x: 0, y: 0 });
//     const getPoint = (e) => {
//         setPoint({ x: e.clientX, y: e.clientY });
//     }
//     return [point, getPoint];
// }
import { useClick, useShowComponent } from "../hooks/useClick";

const CustomHook = () => {
    const [point, getPoint] = useClick();
    const [show, changeShow] = useShowComponent();
    return (
        <div onClick={getPoint}>
            <h3>5、Custom Hooks,封装自定义的hooks函数</h3>
            {show ? <h4>显示</h4> : <h4>隐藏</h4>}
            <button onClick={changeShow}>点击切换显示和隐藏</button>
            <p>当前点击的坐标x:{point.x},当前点击的坐标y:{point.y}</p>
            <hr />
        </div>
    );
}
export default CustomHook;