import ReactDOM from 'react-dom'
import Router from './router'
import 'antd/dist/antd.css';
import "./assets/base.less"
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
)
