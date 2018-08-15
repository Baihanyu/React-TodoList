import {  takeEvery ,put} from 'redux-saga/effects'
import {GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreator' 

function*  getInitList(){
    console.log('abc');

    try {
        const res = yield  axios.get('https://www.easy-mock.com/mock/5b72443480789f4807c6fd02/todolist/todolist');
        const action = initListAction(res.data);
        console.log(action)
        yield put(action);  //  put  提交action
    }catch(e){
        console.log('请求失败')
    }
    


    // axios.get('https://www.easy-mock.com/mock/5b72443480789f4807c6fd02/todolist/todolist')
    //   .then((res)=>{
    //     const data = res.data;
    //     const action = initListAction(data);
    //     console.log(action)  
    // })
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;