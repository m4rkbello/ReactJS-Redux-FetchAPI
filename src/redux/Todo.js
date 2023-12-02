import React, { useEffect } from 'react'
//import the dispatch, useSelector
import { useDispatch, useSelector } from 'react-redux'
//add the fetchTodo
import { fetchTodo } from './todoSlice'


function Todo() {
    //add dispatch
    const dispatch = useDispatch()
    //kuhaon ang data na 
    const data = useSelector(state => state.todo)
     
    //add useEffect
    useEffect(() => {
        dispatch(fetchTodo());
    }, [])
    
    
    
    //para makita ang data ug gi fetch ba
    
    console.log(data)

  return (
    <div>

      {
        data.isLoading ? <h1>HELLO!</h1> :
        data.data.map((Todo) => {
            return <p key={Todo.id}>{Todo.title}</p>
        })
      }

    </div>
  )
}

export default Todo
