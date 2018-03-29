import React from 'react';
import {Container, Col, Row} from 'reactstrap';

/* Component */
import SideTab from '../../components/SideTab';
import Contents from './Contents';


const About = ({location, match}) => {
  let options = [
    {
      title: "About",
      items: [
        { text: "Data Engine", href:"#about_1_1"},
        { text: "Runtime & Editor", href:"#about_1_2"},
        { text: "Processor", href:"#about_1_3"},
        { text: "Flow-Based Programming", href:"#about_1_4"},
        { text: "Reference", href:"#about_1_5"}
      ]
    }
  ];

  return (
    <Container>
      <Row>
        <Col md="9">
          <Contents />
        </Col>
        <Col>
          <SideTab options={options}/>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
