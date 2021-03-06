import { CHANGE_INPUT_VALUE , ADD_TODO_ITEM ,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes.js'
import axios from 'axios'
export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value:value
})

export const getAddItemAction = () => ({
    type:ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type:DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type:INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
            axios.get('https://www.easy-mock.com/mock/5b72443480789f4807c6fd02/todolist/todolist')
                .then((res)=>{
                    const data = res.data;
                    const action =initListAction(data);
                    dispatch(action)
                    // console.log(data)
                    // store.dispatch(action);
    })
    }
}

