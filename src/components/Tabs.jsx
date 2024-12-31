
export function Tabs({todos, selectedTab, setSelectedTab}) {
    const tabs = ['All', 'Open', 'Complete'];


    return(
        <nav className="tab-container">
            {tabs.map((tab, i) => {
                const numOfTasks = tab === 'All' ? 
                todos.length : 
                tab === 'Open' ?
                todos.filter(todo => !todo.complete).length :
                todos.filter(todo => todo.complete).length;
                
                return(
                    <button onClick={() => {setSelectedTab(tab)}} key={i} className={"tab-button "
                        + (tab === selectedTab ? ' tab-selected' : ' ')
                    }>
                        <h4>{tab}({numOfTasks})</h4>
                    </button>   
                )
            })}
            <hr />
        </nav>
    )
}