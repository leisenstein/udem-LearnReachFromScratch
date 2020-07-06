import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const buttonText = 'Submit'
  const style = {backgroundColor:'red', color:'white'}
  return (
    <div>
      <label htmlFor="name" className="label">Enter EMail</label>
      <input id="name" type="text" />
      <button style={style}>{ buttonText }</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
