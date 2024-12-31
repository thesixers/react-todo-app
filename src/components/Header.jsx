

function Header(props) {
    const { todos } = props;

    let todoLength = todos.length;

    const isTaskPlural = todoLength === 1;
    
    const taskorTasks = isTaskPlural ? "task" : "tasks";



    return( 
        <div className="text-gradient">You have {todoLength} number of open todo {taskorTasks}</div>
    )
}


export default Header;
