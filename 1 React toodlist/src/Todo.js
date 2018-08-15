import React ,{ Component } from 'react';
// import PropTypes from 'prop-types'

class Todo extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    render(){
        const {content} =  this.props ;
        return(
            <div onClick={ this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick(){
      // alert(this.props.index);
      // 简化
      // this.props.handleItemDelete(this.props.index)
      const { handleItemDelete ,index} =  this.props ;
      handleItemDelete(index)
    }
}

//   // 数据类型验证
//   Todo.propTypes = {
//     test:PropTypes.string.isRequired,  // isRequired 强制传值
//     content:PropTypes.oneofType(PropTypes.number,PropTypes.string), // 数字或字符串类型
//     handleItemDelete:PropTypes.func,
//     index:PropTypes.number
//   }

//   //默认值
//   Todo.defaultProps ={
//      test:'hello  world' 
//   }

export default Todo