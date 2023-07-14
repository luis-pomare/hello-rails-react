import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setGreeting } from '../actions/greetingActions';

function App() {
  const greeting = useSelector(state => state.greeting.text);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/greeting/api')
      .then(response => response.json())
      .then(data => {
        dispatch(setGreeting(data.text));
      })
      .catch(error => {
        console.error(error);
      });
  }, [dispatch]);

  return (
    <h1>
      {greeting}
    </h1>
  );
}

const mapStateToProps = (state) => ({
  greeting: state.greeting.text,
});

export default connect(mapStateToProps)(App);
