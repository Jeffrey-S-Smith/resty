import React from 'react';
import  "./results.scss";
import "../../app.scss"
import { prettyPrintJson } from 'pretty-print-json';

const Results = (props) => {
  return (
    <section>
      <pre id='account' className='json-container'>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
