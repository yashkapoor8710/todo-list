import React from 'react';

export default class TodoInput extends React.Component 
{
    constructor(props) 
    {
        super(props)
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ value: e.target.value });
    }

    onSubmit = (event) =>  {
        event.preventDefault()
    }

    addTodo(todo) 
    {
        if (todo) 
        {
            this.props.addTodo(todo);
            this.setState({ value: '' });
        }
    }
    render()
    {
        return (<form className="todo-form" onSubmit={this.onSubmit}>
            <input type="text" value={ this.state.value } onChange={ this.handleChange }/>
            <input type="submit" value="Add" onClick={()=>this.addTodo(this.state.value) }/>
            </form>
        );
    }
}