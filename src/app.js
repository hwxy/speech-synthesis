
import { useLaunch } from '@tarojs/taro';
import { Provider } from 'react-redux';
import configStore from './redux';
import './app.scss';

const store = configStore()

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default App
