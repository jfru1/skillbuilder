import { createStore } from 'redux'
import rootReducer from './reducers/index'

// How would I take out for production
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store
