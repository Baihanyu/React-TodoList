 import { CHANGE_INPUT_VALUE , ADD_TODO_ITEM ,DELETE_TODO_ITEM , INIT_LIST_ACTION} from './actionTypes.js'


// reducer 存储数据 ,再将它导出去
const defaultState = {
    inputValue:'',
    list:[]
};

// reducer 可以接受state 不可以修改state
export default (state = defaultState , action)=>{
    // state指的是上面的数据  action是指传过来方法action
    // console.log(state , action);

     if(action.type === CHANGE_INPUT_VALUE){
         const newState = JSON.parse(JSON.stringify(state));  // 深拷贝复制
         newState.inputValue = action.value;
         return newState;
     }

     if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));  // 深拷贝复制 
        newState.list = action.data;
        return newState;
     }

     if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));  // 深拷贝复制 
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
     }

     
     if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));  // 深拷贝复制 
        newState.list.splice(action.index,1);
        return newState;
     }

     

 

 


    return state
}