// 定义默认数据
const defaultState = {
    mykey: 1
}

// 导出一个函数
export default (state=defaultState, action) => {
    //return state;
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "addKeyFn":
            newState.mykey++;
            break;
        default:
            break;
    }
    return newState;
}
