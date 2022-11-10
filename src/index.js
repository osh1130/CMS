import ReactDOM from 'react-dom'
import Router from './router/index.jsx'
import 'antd/dist/antd.css';
import "./assets/base.less"
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Router  />
    </Provider>,
    document.getElementById('root')
)
