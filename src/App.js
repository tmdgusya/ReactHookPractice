import './App.css';
import React, { useState } from "react";
import styled from 'styled-components';

const App = () => {

  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>'
        <Page />
    </div>
  );
}

const PageBar = styled.ul`
    list-style: none;
    padding-left: 30px;
`

const PageNumber = styled.li`
    float: left;
    margin-left: 10px;
`


const Page = () => {
    const [bar, setBar] = useState([1,2,3,4,5]);

    const pageUp = () => setBar(
        bar.map(page => page + 1)
    )

    const pageDown = () => setBar(
        bar.map(page => page - 1)
    )

    return (
        <div className="Page">
            <PageBar key={bar.toString()}>
                <PageNumber><button onClick={pageDown}>{'<<'}</button></PageNumber>
                <PageNumber>{bar}</PageNumber>
                <PageNumber><button onClick={pageUp}>{'>>'}</button></PageNumber>
            </PageBar>
        </div>
    )
}

export default App;
