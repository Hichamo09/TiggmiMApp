import React from 'react'
import { Actions, Scene, Modal } from 'react-native-router-flux'
import routes from './routes';

import Login from '../modules/login'

const getScenes = () =>
  Actions.create(
    <Scene key='root' hideNavBar>
      <Modal key='modal_root'>
        <Scene key='pages_root' hideNavBar hideTabBar>
          <Scene key={routes.Login} hideNavBar hideTabBar component={Login} initial />
        </Scene>
      </Modal>
    </Scene>
  )

export default getScenes
