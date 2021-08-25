import React from 'react'

const ToDoList = () => {
    return (
        <div>
            {ToDoList.map(todo=>{
                return(
                    <ToDo todo={todo}/>
                )
            })}
        </div>
    )
}

export default ToDoList
