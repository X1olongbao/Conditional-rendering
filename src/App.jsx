import React from "react"
import Joke from "./Joke.jsx"
import jokesData from "./JokesData.js"
import Messages from "./messages.jsx"

export default function App() {
  const [view, setView] = React.useState('jokes')
  const jokeElements = jokesData.map((joke) => (
    <Joke key={joke.id}
          punchline={joke.punchline} 
          setup={joke.setup}
          />
  ))

  return (
    <>
      {view === 'jokes' ? (
        <div className="jokes-container">
          <h1 className="title">Punchline</h1>
          {jokeElements}
        </div>
      ) : (
          <Messages />
      )}

      <button
        className={`nav-button ${view === 'messages' ? 'nav-button--messages' : ''}`}
        onClick={() => setView(view === 'jokes' ? 'messages' : 'jokes')}
      >
        {view === 'jokes' ? 'Go to Messages' : 'Back to Jokes'}
      </button>
    </>
  )
}