import shortid from "shortid"
const Form=({todo,setTodo,todoList,setTodoList})=>{

    const handleChange=(event)=>{
        setTodo(event.target.value)
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setTodoList([...todoList,{name:todo,id:shortid.generate()}])
        setTodo("")
    }
    return(
        <div class="formbox" onSubmit={handleSubmit}>
            <form>
                <input onChange={handleChange} value={todo} class="inputtag" placeholder="Add todo item"></input>
                <button class="addbtn" type="submit">ADD</button>
            </form>
        </div>
    )
}
export default Form