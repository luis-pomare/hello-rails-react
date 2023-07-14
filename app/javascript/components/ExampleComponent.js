import React from 'react';
import { connect } from 'react-redux';
import { exampleAction } from '../actions/exampleActions'; // Import your action creators here

const ExampleComponent = ({ data, exampleAction }) => {
  const handleClick = () => {
    exampleAction('Some data');
  };

  return (
    <div>
      <h1>Example Component</h1>
      <button onClick={handleClick}>Dispatch Action</button>
      <p>Data from Redux store: {data}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.example.data,
});

export default connect(mapStateToProps, { exampleAction })(ExampleComponent);
