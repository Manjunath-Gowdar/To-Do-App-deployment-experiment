import React from 'react'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'
import { userListTodos } from '../actions/todoAction.js'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userLogin)

  const todoUserList = useSelector((state) => state.todoUserList)
  const { loading, error, userTodos } = todoUserList

  const handleClick = () => {
    dispatch(userListTodos(userInfo._id))
  }

  return (
    <>
      {userInfo && (
        <>
          <h2>Welcome {userInfo.name}</h2>
          <button onClick={handleClick}>Show All My Todos</button>
          <br />
          <span style={{ paddingTop: '20px' }}>&nbsp; </span>
        </>
      )}
      {!userInfo && <h1>Login To see your To-do's</h1>}
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : userTodos ? (
        <>
          {userTodos.map((todo) => (
            <span key={todo._id}>
              <Todo todo={todo} />
              <br />
            </span>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default HomeScreen
