import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  todoListReducer,
  todoNewReducer,
  todoUpdateReducer,
  todoUserListReducer,
} from './reducers/todoReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
  todoList: todoListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  todoUpdate: todoUpdateReducer,
  todoUserList: todoUserListReducer,
  todoNew: todoNewReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
