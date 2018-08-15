import React ,{ Component ,Fragment} from 'react';
import Todo from './Todo'


class App extends Component{
  constructor(){
    super();
    // 组建的状态   当组件state或则props发生改变的时候m,render函数就会重新执行
    this.state = {
      inputValue :'',
      list:[]
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  render(){
    return(
      <Fragment>
        <div>
            <input  
              value = { this.state.inputValue } 
              onChange = { this.handleInputChange }
            />
            <button onClick = { this.handleBtnClick }>提交</button>
        </div>
        <ul>
            {
              this.state.list.map((item,index)=>{
                return(
                  // <li 
                  //     key={index} onClick={ this.handleItemDelete.bind(this,index) } > { item }
                  // </li>
                  <li key={index}>
                      <Todo 
                        content = { item } 
                        index= {index} 
                        handleItemDelete = {this.handleItemDelete}
                      />
                  </li>
                )
              })
            }
        </ul>

        
      </Fragment>
    )
  }

  handleInputChange(e){
    console.log(e.target.value);
    this.setState({
      inputValue : e.target.value
    })
  };

  handleBtnClick(){
    this.setState({
      // 之前的数组展开  在重组
      //list :[...this.state.list ,this.state.inputValue]
      list:[...this.state.list , this.state.inputValue],
      inputValue:''
    })
  };

  handleItemDelete(index){
      const list = [...this.state.list];
      list.splice(index,1);
      this.setState({
       //  list:list
       list
      })
  }

}

export default App
