import React from 'react'
import classNames from 'classnames'

function isStateless(component) {
  return !component.prototype.render
}

const AcceptStyleAndClassName = WrappedComponent => {
  let NewWrappedComponent = WrappedComponent
  if (isStateless(WrappedComponent)) {
    NewWrappedComponent = class extends React.Component {
      render() {
        return WrappedComponent({ ...this.props })
      }
    }
  }

  class EnhancedComponent extends NewWrappedComponent {
    // Display correct ReactElement name in React devtools
    static displayName = WrappedComponent.displayName || WrappedComponent.name

    render() {
      const element = super.render()
      const enhancedElement = React.cloneElement(element, {
        style: {
          ...(element.props.style || {}),
          ...(this.props.style || {})
        },
        className: classNames(element.props.className, this.props.className)
      })

      return enhancedElement
    }
  }

  return EnhancedComponent
}

export default AcceptStyleAndClassName
