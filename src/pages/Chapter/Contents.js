import React from 'react';
import {Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

/* Component */
import {
  BasicPage, NodePage, FlowPage, Adv_guidePage, QuickStartPage
} from './docs';


const Contents = () => (
  <Container className="wiki_container">
    <Switch>
      <Route exact path={"/chapter"} component={BasicPage}/>
      <Route path={"/chapter/quickstart"} component={QuickStartPage}/>
      <Route path={"/chapter/node"} component={NodePage}/>
      <Route path={"/chapter/flow"} component={FlowPage}/>
      <Route path={"/chapter/advanced_guide"} component={Adv_guidePage}/>
    </Switch>
  </Container>
);

export default Contents;
