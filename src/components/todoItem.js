import React from 'react';

export default class TodoItem extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state ={
            edit :false,
            newTodoItem:""
        }
        this.removeTodo=this.removeTodo.bind(this);
        this.completeTodo=this.completeTodo.bind(this);
        this.enableEdit=this.enableEdit.bind(this);
        this.disableEdit=this.disableEdit.bind(this);
        this.onSave=this.onSave.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    removeTodo(id) {
        this.props.removeTodo(id);
    }
    completeTodo(id){
        this.props.completeTodo(id);
        this.disableEdit()
    }
    enableEdit(){
        this.setState({edit: true,
            newTodoItem:this.props.todo.text
        })
    }
    disableEdit(){
        this.setState({edit:false})
    }
    onSave(){
        this.props.onSave(this.props.todo.id,this.state.newTodoItem)
        this.disableEdit()
    }
    onSubmit = (event) =>  {
        event.preventDefault()
    }
    onChange(e){
        e.preventDefault();
        this.setState({newTodoItem: e.target.value})
    }
    render() 
    {
        return(<form className="todo-form" onSubmit={this.onSubmit}>
        {
            this.state.edit ? 
            <div>
                <button onClick={this.onSave}>Save</button>
                <button onClick={this.disableEdit}>Cancel</button>
            </div>: !this.props.todo.completed ?
            <div>
                <button onClick={this.enableEdit}>Edit</button>
            </div>:null
        }
        {
            !this.state.edit? <button onClick={ (e)=>this.removeTodo(this.props.id)}>x</button>:null
        }
        {
            this.state.edit? <input type="text" className="edit-todo" value={this.state.newTodoItem} onChange={this.onChange} />:null
        }
        {
            !this.state.edit? <p> {!this.props.todo.completed ? this.props.todo.text : <del>{this.props.todo.text}</del>}</p>:null
        }
        </form> )
    }
}