/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-07 19:10:21
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-07 19:11:51
 * @Description: 
 */
import React, { useState } from "react";

export const useClick = () => {
    const [point, setPoint] = useState({ x: 0, y: 0 });
    const getPoint = (e) => {
        setPoint({ x: e.clientX, y: e.clientY });
    }
    return [point, getPoint];
}

export const useShowComponent = () => {
    const [show, setShow] = useState(true);
    const changeShow = () => {
        setShow(!show);
    }
    return [show, changeShow];
}