import React ,{ Component} from 'react';
import 'antd/dist/antd.css';
import store  from './store/index.js'


// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
import {getInitList, getInputChangeAction , getAddItemAction ,getDeleteItemAction , initListAction} from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component{
  constructor(props){
    super(props);
    // 拿过来公用的数据 redux提供的方法 store.getState()
    // console.log(store.getState());
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this)

    // 订阅  只要store发生改变，就会执行里面的函数
     store.subscribe(this.handleStoreChange);
  }

  render(){
    return(
      <TodoListUI 
          inputValue = { this.state.inputValue }
          list = { this.state.list }
          handleInputChange = { this.handleInputChange }
          handleBtnClick = { this.handleBtnClick }
          handleItemClick = {this.handleItemClick}
      />
    )
  }

  componentDidMount(){
    // axios.get('https://www.easy-mock.com/mock/5b72443480789f4807c6fd02/todolist/todolist')
    //   .then((res)=>{
    //     const data = res.data;
    //     const action = initListAction(data);
    //      console.log(action)
    //     store.dispatch(action);
    // })
    const action = getInitList();
    store.dispatch(action)
  }

  handleInputChange(e){
      // console.log(e.target.value);
      // const action = {
      //   type:CHANGE_INPUT_VALUE,
      //   value:e.target.value
      // }
      const action = getInputChangeAction(e.target.value);
      store.dispatch(action)
  }

  handleStoreChange(){
      // 同步reducer返回过来的数据数据 重新渲染
      this.setState(store.getState());
  }

  handleBtnClick(){
    // const action = {
    //   type :ADD_TODO_ITEM
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemClick(index){
    // const action = {
    //   type :DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index);
    store.dispatch(action)
  }




}
export default TodoList
