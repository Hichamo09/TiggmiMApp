import React from 'react'
import { Actions, Scene, Modal } from 'react-native-router-flux'
import HomePage from '../app'

const getScenes = () =>
  Actions.create(
    <Scene key='root'>
      <Modal key='modal_root'>
        <Scene key='pages_root' hideNavBar>
          <Scene
            key='homePage'
            hideNavBar
            component={HomePage}
            initial
            title='Home'
          />
        </Scene>
      </Modal>
    </Scene>
  )

export default getScenes
