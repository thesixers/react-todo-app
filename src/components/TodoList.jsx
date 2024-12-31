import { TodoCards } from "./TodoCards";

export function TodoList(props) {
    const {todos, selectedTab} = props

    let todoArray = selectedTab === 'All' ? 
    todos :
    selectedTab === 'Open' ?
    todos.filter(item => !item.complete) :
    todos.filter(item => item.complete)
    
    return(
        <>
            {
                todoArray.map((todo, i) => {
                    return(
                        <TodoCards 
                            key={i} 
                            todoIndex={todos.findIndex(val => val.input === todo.input)} 
                            todo={todo}
                            {...props}
                        />
                    )
                })
            }
        </>
    )
}