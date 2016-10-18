/* global describe it */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AcceptStyleAndClassName from '../AcceptStyleAndClassName'

describe('AcceptStyleAndClassName', () => {
  it('should be function', () => {
    expect(typeof AcceptStyleAndClassName).to.equal('function')
  })

  it('should merge style prop', () => {
    const parentStyle = {
      color: 'red'
    }
    const EnhancedComponent = AcceptStyleAndClassName(createComponent(<div style={parentStyle} />))
    const style = {
      width: 1
    }

    const wrapper = shallow(<EnhancedComponent style={style} />)

    expect(wrapper.props().style).to.include({ ...parentStyle, ...style })
  })

  it('should override style prop', () => {
    const parentStyle = {
      color: 'red'
    }
    const EnhancedComponent = AcceptStyleAndClassName(createComponent(<div style={parentStyle} />))
    const style = {
      color: 'white'
    }
    const wrapper = shallow(<EnhancedComponent style={style} />)
    expect(wrapper.props().style).to.deep.equal(style)
  })

  it('should use style from enhanced component if wrapped component doesn\'n contain style', () => {
    const EnhancedComponent = AcceptStyleAndClassName(createComponent(<div />))
    const style = {
      color: 'white'
    }
    const wrapper = shallow(<EnhancedComponent style={style} />)
    expect(wrapper.props().style).to.deep.equal(style)
  })

  it('should merge class names', () => {
    const parentClassName = 'parent'
    const EnhancedComponent = AcceptStyleAndClassName(createComponent(<div className={parentClassName} />))
    const className = 'child'
    const wrapper = shallow(<EnhancedComponent className={className} />)
    expect(wrapper.props().className).to.equal(`${parentClassName} ${className}`)
  })

  it('should use class names from enhanced component if wrapped component doesn\'n contain class name', () => {
    const EnhancedComponent = AcceptStyleAndClassName(createComponent(<div />))
    const className = 'child'
    const wrapper = shallow(<EnhancedComponent className={className} />)
    expect(wrapper.props().className).to.equal(className)
  })
})

function createComponent(reactElement) {
  return class extends React.Component {
    render() {
      return reactElement
    }
  }
}
