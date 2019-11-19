import React, {Component} from "react";

class AddTodo extends Component {
    state={
        content: ''
    }

    handleChange = (e)=>{
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo({
            id: Math.random(),
            content: this.state.content
        }
        );
        this.setState({content:""});
    }

    render(){
        return(
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <label>Add todo:</label>
                    <input type="text" onChange={this.handleChange} value= {this.state.content} />
                    <button className="btn waves-effect waves-light blue">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;