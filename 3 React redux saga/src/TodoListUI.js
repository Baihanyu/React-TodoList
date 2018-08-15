import React from 'react';
import { Input ,Button,List } from 'antd';

    const TodoListUI = (props) => {
        return(
            <div>
                <div style={{margin:'10px'}}>
                    <Input
                        value = { props.inputValue }
                        placeholder="TotoList" 
                        style={{ width:'300px',marginRight:'10px' }}
                        onChange= { props.handleInputChange }
                    />
                    <Button type="primary" onClick = { props.handleBtnClick }>提交</Button>
                </div>
                <List
                style={{ width:'300px',marginRight:'10px' }}
                bordered
                dataSource={ props.list }
                renderItem={(item,index) => (<List.Item onClick = { () => {props.handleItemClick(index)} }>{item}</List.Item>)}
                />
            </div>
        )
    }



// class TodoListUI extends Component{
//     render(){
//         return(
//             <div>
//                 <div style={{margin:'10px'}}>
//                     <Input
//                         value = { this.props.inputValue }
//                         placeholder="TotoList" 
//                         style={{ width:'300px',marginRight:'10px' }}
//                         onChange= { this.props.handleInputChange }
//                     />
//                     <Button type="primary" onClick = { this.props.handleBtnClick }>提交</Button>
//                 </div>
//                 <List
//                 style={{ width:'300px',marginRight:'10px' }}
//                 bordered
//                 dataSource={ this.props.list }
//                 renderItem={(item,index) => (<List.Item onClick = { (index) => {this.props.handleItemClick(index)} }>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI