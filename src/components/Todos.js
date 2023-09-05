import React from 'react'
import { UseSelector} from 'react-redux'

function Todos(){
    const todos=useSelector(state=>state.todos)
    return(
        <div>Todos</div>
    )
}

export default Todos