import React from 'react';
import {Container, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

/* images */
import Logo from '../img/dataengine_logo.png';

/**
 * Options
 * item, link 
 * props.options = [
    {
      route: boolean,
      title: string,
      items: [
        { text: string, href:string},
        { text: string, href:string},
        { text: string, href:string}
      ]
    }
  ];
 */

const SideTab = (props) => {
  return (
    <Container className="sidebar wiki_container">
        <img src={Logo} height={40} alt={'logo'} style={{marginBottom:'1rem'}}/>
      {props.options.map((option, idx) => (
        <div key={'side_' + idx}>
          {idx > 0 ? <hr /> : null}
          <Nav vertical>
            {option.title && <p key={idx}>{option.title}</p>}
            {option.route && option.items.map((item, idx) => (
              <NavItem key={idx}>
                <Link className="nav-link" to={item.href} key={idx}>
                  {item.text}
                </Link>
              </NavItem>
            ))}
            {!option.route && option.items.map((item, idx) => (
              <NavItem key={idx}>
                <NavLink href={item.href} key={idx}>
                  {item.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      ))}
    </Container>
  );
};

export default SideTab;
