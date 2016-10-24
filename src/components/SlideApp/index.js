import React from 'react'
import EditorApp from '../../containers/EditorApp'
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit, // eslint-disable-line
  Heading, Image, Layout, ListItem, List, Quote, Spectacle, Slide, Text // eslint-disable-line
} from 'spectacle'

const SlideApp = () => (
  <Spectacle>
    <Deck>
      <Slide>
        <Text>Hello</Text>
      </Slide>
      <Slide>
        <div style={{
          width: '700px',
          height: '400px',
          fontSize: 16
        }}>
          <EditorApp />
        </div>
      </Slide>
    </Deck>
  </Spectacle>
)

export default SlideApp
