import React from 'react';
import {Container, Col, Row} from 'reactstrap';

/* Component */
import SideTab from '../../components/SideTab';
import Contents from './Contents';

const Chapter = ({location, match}) => {
  let options = [
    {
      route: true,
      title: 'Basic',
      items: [
        {text: 'Concept', href: `${match.url}`},
        {text: 'Process', href: `${match.url}#process`}
      ]
    },
    {
      route: true,
      title: 'Quick Start',
      items: [
        {text: 'Collect External Data', href: `${match.url}/quickstart/step1`},
        {text: 'Parse Data', href: `${match.url}/quickstart/step2`},
        {text: 'Send Data to Processor', href: `${match.url}/quickstart/step3`},
      ]
    },
    {
      route: true,
      title: 'Node',
      items: [
        {text: 'Types of Nodes', href: `${match.url}/node/typeofnodes`},
        {text: 'Basic Nodes', href: `${match.url}/node/basicnode`},
        {text: 'Config Nodes', href: `${match.url}/node/confignode`},
        {text: 'ADP Nodes', href: `${match.url}/node/adpnode`},
        {text: 'Installing Add-on Nodes', href: `${match.url}/node/installingaddonnode`}
      ]
    },
    {
      route: true,
      title: 'Flow',
      items: [
        {text: 'Flow', href: `${match.url}/flow/simpleflow`},
        {text: 'Sub Flow', href: `${match.url}/flow/subflow`},
        {text: 'Copy & Paste Flow', href: `${match.url}/flow/copypasteflow`},
        {text: 'Import & Export Flow', href: `${match.url}/flow/importexportflow`}
      ]
    },
    {
      title: 'Advanced Guide',
      items: [
        {text: 'Confluence page', href: `https://n3n-us.atlassian.net/wiki/spaces/teamdev/pages/84061742/ADP+Web+Service`},
        {text: 'Dataengine PDF manual', href: '#'}
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
          <SideTab options={options} match={match}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Chapter;
