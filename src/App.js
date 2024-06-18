/*
 * @Author: 孙林 1164700321@qq.com
 * @Date: 2024-06-05 23:16:06
 * @LastEditors: 孙林
 * @LastEditTime: 2024-06-07 15:55:00
 * @Description: 
 */
import Base from './components/base';                // 基础使用;
import CustomHook from './components/customHook';    // 自定义hooks;
import Context from './components/context';          // 使用context实现跨组件传值;
import ReduxCom from './components/redux';           // 使用redux;

import UseMemoCom from './components/useMemo';       // useMemo;
import UseCallback from './components/useCallback';  // useCallback;
import './App.css';

function App() {
  return (
    <div className="App">
      <Base/>
      <Context/>
      <CustomHook/>
      <ReduxCom/>
      <UseMemoCom/>
      <UseCallback/>
    </div>
  );
}

export default App;
