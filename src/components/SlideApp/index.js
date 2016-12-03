import 'prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-okaidia.css'
import React from 'react'
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit, Link, // eslint-disable-line
  Heading, Image, Layout, ListItem, List, Quote, Spectacle, Slide, Text // eslint-disable-line
} from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import './style.scss'

// Code examples
import Person from '../examples/Person'
import IfComponent from '../examples/IfComponent'
import Repetition from '../examples/Repetition'

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
                source={require('!!raw!../examples/Person')}
                style={{
                  margin:"2em auto",
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
      <Slide>
        <Heading size={2}>
          If else
        </Heading>
        <Layout>
          <Appear>
            <Fill>
              <CodePane
                lang='jsx'
                source={require('!!raw!../examples/IfComponent')}
                style={{
                  margin:"2em auto",
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
              <IfComponent number={2} />
            </Fill>
          </Appear>
        </Layout>
      </Slide>
      <Slide>
        <Heading size={2}>
          Repetition
        </Heading>
        <Layout>
          <Appear>
            <Fill>
              <CodePane
                lang='jsx'
                source={require('!!raw!../examples/Repetition')}
                style={{
                  margin:"2em auto",
                  fontSize: '1.2rem',
                  minWidth: false
                }}/>
            </Fill>
          </Appear>
          <Appear style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left'
          }}>
            <Fill>
              <Repetition list={['One', 'Two', 'Three']} />
            </Fill>
          </Appear>
        </Layout>
      </Slide>
      <Slide>
        <Heading size={2}>
          Comparisons
        </Heading>
      </Slide>
      <Slide>
        <Heading size={2}>
          Angular
        </Heading>
        <List>
          <Appear><ListItem>Too much boilerplates</ListItem></Appear>
          <Appear><ListItem>Controller could introduce messes</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={2}>
          React
        </Heading>
        <List>
          <Appear><ListItem>Components</ListItem></Appear>
          <Appear><ListItem>Flux (Architecture)</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={1} fit>
          What you need to know
        </Heading>
        <Heading size={1} fit margin='0.3em 0 0 0'>
          To be able to develop in React
        </Heading>
        <List>
          <Appear><ListItem>HTML</ListItem></Appear>
          <Appear><ListItem>CSS</ListItem></Appear>
          <Appear><ListItem>JavaScript</ListItem></Appear>
          <Appear><ListItem>ES2015 (ES6)</ListItem></Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={2} fit>
          ES2015 is now
        </Heading>
        <Appear>
          <Heading size={2} fit>
            with awesome features
          </Heading>
        </Appear>
      </Slide>
    </Deck>
  </Spectacle>
)

export default SlideApp
