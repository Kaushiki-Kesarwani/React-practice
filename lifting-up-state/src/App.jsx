import Toggle from './toggle';
import { useState } from 'react'
import './App.css'

function App() {
const [show, setShow] = useState(0);

  return (
    <main className="page">
      <section className="panel">
        <p className="eyebrow">Learning React</p>
        <h1>Core Concepts</h1>
        <p className="subtitle">
          Click a topic to reveal a quick explanation.
        </p>

        <div className="topics">
          <Toggle title="React" show={show === 0} setShow={() => setShow(0)}>
            React is a popular, open-source JavaScript library used for building user interfaces (UIs), especially for fast and interactive single-page apps.
          </Toggle>

          <Toggle title="Virtual DOM" show={show === 1} setShow={() => setShow(1)}>
            The Virtual DOM is a lightweight in-memory copy of the real DOM. React compares changes in it first, then updates only what is necessary in the browser.
          </Toggle>

          <Toggle title="Components" show={show === 2} setShow={() => setShow(2)}>
            Components are reusable building blocks in React. They help you split UI into smaller parts, making code easier to manage and maintain.
          </Toggle>

          <Toggle title="JSX" show={show === 3} setShow={() => setShow(3)}>
            JSX lets you write HTML-like syntax inside JavaScript, which makes React UI code easier to read and structure.
          </Toggle>

          <Toggle title="Props" show={show === 4} setShow={() => setShow(4)}>
            Props are read-only values passed from parent to child components to customize content and behavior.
          </Toggle>

          <Toggle title="State" show={show === 5} setShow={() => setShow(5)}>
            State stores changing data inside a component. When state updates, React re-renders that part of the UI.
          </Toggle>

          <Toggle title="Hooks" show={show === 6} setShow={() => setShow(6)}>
            Hooks are special functions like useState and useEffect that let function components use React features.
          </Toggle>

          <Toggle title="useEffect" show={show === 7} setShow={() => setShow(7)}>
            useEffect is used for side effects such as API calls, timers, and syncing component logic with external systems.
          </Toggle>

          <Toggle title="Conditional Rendering" show={show === 8} setShow={() => setShow(8)}>
            Conditional rendering shows different UI based on conditions using if statements, ternary operators, or logical AND.
          </Toggle>

          <Toggle title="Lists and Keys" show={show === 9} setShow={() => setShow(9)}>
            Lists are rendered with map(), and keys help React identify each item so updates are efficient and stable.
          </Toggle>

          <Toggle title="Controlled Components" show={show === 10} setShow={() => setShow(10)}>
            In controlled components, form inputs are linked to React state, so input values are managed from JavaScript.
          </Toggle>

          <Toggle title="Lifting State Up" show={show === 11} setShow={() => setShow(11)}>
            Lifting state up means moving shared state to a common parent so multiple child components stay synchronized.
          </Toggle>

          <Toggle title="Context API" show={show === 12} setShow={() => setShow(12)}>
            Context API allows you to share data across many components without passing props manually through every level.
          </Toggle>

          <Toggle title="Custom Hooks" show={show === 13} setShow={() => setShow(13)}>
            Custom hooks let you extract reusable logic into functions, keeping components cleaner and more maintainable.
          </Toggle>
        </div>
      </section>
    </main>
  )
}

export default App
