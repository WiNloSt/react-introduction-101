import React from 'react'
import style from './style.scss'
import { Observable } from 'rxjs'

class Resizer extends React.Component {
  componentDidMount() {
    const { resizer } = this.refs
    const mousedown$ = Observable.fromEvent(resizer, 'mousedown')
    const mouseup$ = Observable.fromEvent(document, 'mouseup')
    const mousemove$ = Observable.fromEvent(document, 'mousemove')
    const mousedrag$ = mousedown$.flatMap(() =>
      mousemove$
        .map(mm => {
          mm.preventDefault()
          return mm
        })
        .takeUntil(mouseup$)
    )

    const touchstart$ = Observable.fromEvent(resizer, 'touchstart')
    const touchend$ = Observable.fromEvent(document, 'touchend')
    const touchmove$ = Observable.fromEvent(document, 'touchmove')
    const touchdrag$ = touchstart$.flatMap(() =>
      touchmove$
        .map(tm => {
          tm.preventDefault()
          return tm.targetTouches[0]
        })
        .takeUntil(touchend$)
    )

    const drag$ = mousedrag$.merge(touchdrag$)

    this.subscription = drag$.subscribe(mdrag =>
      this.props.setResizerPosition(mdrag.clientX / screen.availWidth * 100)
    )
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  render() {
    return (
      <div
        ref='resizer'
        className={style.resizer}
        style={{ left: this.props.left }}/>
    )
  }
}

export default Resizer
