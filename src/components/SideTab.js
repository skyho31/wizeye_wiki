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
  const Tag = props.route ? Link : NavLink;

  return (
    <Container className="sidebar wiki_container">
        <img src={Logo} height={40} alt={'logo'} style={{marginBottom:'1rem'}}/>
      {props.options.map((option, idx) => (
        <div key={'side_' + idx}>
          {idx > 0 ? <hr /> : null}
          <Nav vertical>
            {option.title && <p key={idx}>{option.title}</p>}
            {option.items.map((item, idx) => (
              <NavItem key={idx}>
                <Tag to={props.route && item.href} href={!props.route && item.href} key={idx}>
                  {item.text}
                </Tag>
              </NavItem>
            ))}
          </Nav>
        </div>
      ))}
    </Container>
  );
};

export default SideTab;
