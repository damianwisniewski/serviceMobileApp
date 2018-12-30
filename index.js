/** @format */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/App';
import { Provider } from 'react-redux'
import {name as appName} from './app.json';
import reactStore from './src/reduxStore/reduxStore'

const Redux = () => (
    <Provider store={reactStore()}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
