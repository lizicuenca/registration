import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils'
import configureStore from '../store/configureStore'

import VerifyRegistration from './VerifyRegistration'

describe('VerifyRegistration', () => {

  it('displays info from state', () => {
    const state = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }

    const store = configureStore()
    store.setState(state)

    const component = renderIntoDocument(
      <VerifyRegistration store={store}/>
    )

    const renderedDOM = ReactDOM.findDOMNode(component)

    const userName = renderedDOM.querySelector('#userName')
    expect(userName).toBeDefined()
    expect(userName.textContent).toEqual(state.userName)

    const email = renderedDOM.querySelector('#email')
    expect(email).toBeDefined()
    expect(email.textContent).toEqual(state.email)

  })

})