import React from 'react';

import './form.scss';

class Form extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    this.props.handleApiCall(formData);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }
}

export default Form;

// import React, { useState } from 'react';

// import './form.scss';

// const Form = (props) => {

//   let [method, setMethod] = useState('');
//   let [url, setUrl] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method,
//       url,
//     };
//     props.handleApiCall(formData);
//   }

//   const onChange = (e) => {
//     let {name, value} = e.target;
//     if (name === 'url') setUrl(value);
//     if (name === 'get' && checked) setMethod(value);
//     if (name === 'post' && checked) setMethod(value);
//     if (name === 'put' && checked) setMethod(value);
//     if (name === 'delete' && checked) setMethod(value);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label >
//           <span>URL: </span>
//           <input name='url' type='text' onChange={onChange}/>
//         </label>
//         <label className="methods">
//           <input type="radio" name="get" id="get" onChange={onChange}>GET</input>
//           <input type="radio" name="post" id="post" onChange={onChange}>POST</input>
//           <input type="radio" name="put" id="put" onChange={onChange}>PUT</input>
//           <input type="radio" name="delete" id="delete" onChange={onChange}>DELETE</input>
//         </label>
//         <button type="submit">GO!</button>
//       </form>
//     </>
//   )
// }

// export default Form;
