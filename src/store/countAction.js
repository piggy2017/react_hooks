/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-07 17:47:41
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-07 23:23:40
 * @Description: 
 */
/**
 * 该文件专门用于创建action对象
 */


// 这两个都是同步action,就是指action的值为Object类型的一般对象
export const createIncrementAction = (data) => {
    return { type: 'increment', data };
}
export const createDecrementAction = (data) => {
    return { type: 'decrement', data };
}

// 异步action,就是指action的值为函数,异步action中一般都会调用同步action,异步action不是必须要用的,只是为了方便开发者使用.
// 可以在页面中先进行请求,然后在成功的回调中调用同步action,这样就可以实现异步操作了.
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    }
}
