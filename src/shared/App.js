import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, About, Chapter} from 'pages';
import Menu from '../components/Menu';
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/chapter" component={Chapter} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

const Footer = () => (
  <div>
    <p className="footer text-center">© 2018 N3N. All Rights Reserved.</p>
  </div>
);

export default App;
