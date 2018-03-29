import React from 'react';
import {Route} from 'react-router-dom';

/* page */
import MakeSimpleFlow from './MakeSimpleFlow';
import DataParse from './DataParse';
import SendADP from './SendADP';
import AggregateData from './AggregateData';


const QuickStart = ({match}) => (
  <div className="contentbox">
    <h2>QuickStart</h2>
    <hr />
    <Route exact path={`${match.url}/step1`} component={MakeSimpleFlow} />
    <Route path={`${match.url}/step2`} component={DataParse} />
    <Route path={`${match.url}/step3`} component={SendADP} />
    <Route path={`${match.url}/step4`} component={AggregateData} />
  </div>
);

export default QuickStart;
