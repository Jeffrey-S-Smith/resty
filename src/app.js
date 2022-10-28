import React, { useState, useEffect, useReducer } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  loading: false,
  results: null,
  history: [],
  request: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'begin':
      return { ...state, request: payload, loading: true }
    default:
      return state;
  }
};


const App = () => {

  // let [data, setData] = useState(null);
  // let [requestParams, setRequestParams] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApiReducer = async (searchQuery) => {
    const action = {
      type: "begin",
      payload: searchQuery,
    }
    dispatch(action);
  }

  const fetchData = (requestParams) => {
    console.log(requestParams);
    fetch(requestParams.url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })

  }

  useEffect(() => {
    if (state.loading === true && state.request.method && state.request.url) {
      fetchData(state.request);
    }

  }, [requestParams]);

  const callApi = async (requestParams) => {

    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData(data);
    await setRequestParams(requestParams);
    await fetchData(requestParams);
  }


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApiReducer} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;

// import React from 'react';
// import './app.scss';

// // Let's talk about using index.js and some other name in the component folder
// // There's pros and cons for each way of doing this ...
// import Header from './components/header';
// import Footer from './components/footer';
// import Form from './components/form';
// import Results from './components/results';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
