import 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-okaidia.css'
import React from 'react'
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit, Link, // eslint-disable-line
  Heading, Image, Layout, ListItem, List, Quote, Spectacle, Slide, Text // eslint-disable-line
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import Person from '../Person/'
import './style.scss'

const theme = createTheme({
  primary: "#4bf"
})

const SlideApp = () => (
  <Spectacle theme={theme}>
    <Deck transition={["slide"]} transitionDuration={500}>
      <Slide>
        <Heading fit>Hello</Heading>
        <Heading fit textColor='black'>I'm Kelvin</Heading>
      </Slide>
      <Slide>
        <Heading fit>
          Introduction to React
        </Heading>
      </Slide>
      <Slide>
        <Heading>
          Agenda
        </Heading>
        <List>
          <Appear><ListItem>Why use React?</ListItem></Appear>
          <Appear><ListItem>What you need to know?</ListItem></Appear>
          <Appear><ListItem>React 101</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading>
          Why use React?
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2}>
          Build complex UI
        </Heading>
        <List>
          <Appear><ListItem>Facebook</ListItem></Appear>
          <Appear><ListItem>Gmail/Inbox</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={2} fit>
          Single-Page Application (SPA)
        </Heading>
        <List>
          <Appear><ListItem>Never refresh</ListItem></Appear>
          <Appear><ListItem>Web apps</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={2}>
          Easy to understand
        </Heading>
        <List>
          <Appear><ListItem>No extra syntax</ListItem></Appear>
          <Appear><ListItem>JSX</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={2}>
          JSX
        </Heading>
        <Layout>
          <Appear>
            <Fill>
              <CodePane
                lang='jsx'
                source={require('!!raw!../Person/index.js')}
                style={{
                  margin:"20px auto",
                  fontSize: '1.2rem',
                  minWidth: false
                }}/>
            </Fill>
          </Appear>
          <Appear style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Fill>
              <Person name='Mahatthana' nickname='Kelvin' />
            </Fill>
          </Appear>
        </Layout>

      </Slide>
    </Deck>
  </Spectacle>
)

export default SlideApp
