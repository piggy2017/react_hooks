
/*
    1、该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数;
    2、reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action);
 */

const initState = {
    count: 0
};
export default function countReducer(preState = initState, action) {  // 初始化的时候preState为undefined，所以需要给一个默认值0.
    // 从action对象中获取type、data
    console.log('preState:', preState, action);
    const { type, data } = action;

    // 根据type决定如何加工数据
    switch (type) {
        case 'increment':
            preState.count = preState.count + data;
            return preState
        case 'decrement':
            preState.count = preState.count - data;
            return preState
        default:
            return preState;
    }
}
