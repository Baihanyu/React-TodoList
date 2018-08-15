import React , { Component } from 'react';
import { connect } from 'react-redux'



class TodoList extends Component { 
    render(){
        const { inputValue , changeInputValue , handleClick , list} = this.props; 
        return (
            <div>
                <div>
                    <input type="text" value = { inputValue } onChange = { changeInputValue }/>
                    <button onClick = { handleClick }>提交</button>
                </div>
                <ul>
                    {
                        list.map((item) => {
                            return <li>{ item }</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    handleInputChange(e){
        console.log(e.target.value)
    }   
    
}

const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = {
                type:"change_input_value",
                value:e.target.value
            }
            dispatch(action)
        },

        handleClick(){
            const action = {
                type:"add_item",
            }
            dispatch(action)
        }
    }
}

// connect做链接的意思
export default connect(mapStateToProps ,mapDispatchToProps)(TodoList)