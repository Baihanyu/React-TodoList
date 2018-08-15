import { createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({ }):compose;
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// 定义一个store
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;