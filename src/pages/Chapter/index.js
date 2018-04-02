import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap';

/* Component */
import SideTab from '../../components/SideTab';
import Contents from './Contents';

/* document */
import pdf from '../../libs/WIZEYE_V2.0_ADMIN_USER_GUIDE_v1.5_Data관리.pdf';

class Chapter extends Component {
  render() {
    let options = [
      {
        route: true,
        title: 'Basic',
        items: [{text: 'Concept & Process', href: `${this.props.match.url}`}]
      },
      {
        route: true,
        title: 'Quick Start',
        items: [
          {text: '1. Collect External Data', href: `${this.props.match.url}/quickstart/step1`},
          {text: '2. Parse Data', href: `${this.props.match.url}/quickstart/step2`},
          {text: '3. Send Data to Processor', href: `${this.props.match.url}/quickstart/step3`},
          {text: '4. Aggregate Data', href: `${this.props.match.url}/quickstart/step4`}
        ]
      },
      // {
      //   route: true,
      //   title: 'Node',
      //   items: [
      //     {text: 'Types of Nodes', href: `${match.url}/node/typeofnodes`},
      //     {text: 'Basic Nodes', href: `${match.url}/node/basicnode`},
      //     {text: 'Config Nodes', href: `${match.url}/node/confignode`},
      //     {text: 'ADP Nodes', href: `${match.url}/node/adpnode`},
      //     {text: 'Installing Add-on Nodes', href: `${match.url}/node/installingaddonnode`}
      //   ]
      // },
      // {
      //   route: true,
      //   title: 'Flow',
      //   items: [
      //     {text: 'Flow', href: `${match.url}/flow/simpleflow`},
      //     {text: 'Sub Flow', href: `${match.url}/flow/subflow`},
      //     {text: 'Copy & Paste Flow', href: `${match.url}/flow/copypasteflow`},
      //     {text: 'Import & Export Flow', href: `${match.url}/flow/importexportflow`}
      //   ]
      // },
      // {
      //   route: true,
      //   title: 'Processor',
      //   items: [
      //     {text: 'Processor Server Flow', href: `${match.url}/flow/subflow`},
      //     {text: 'RESTful Service', href: `${match.url}/flow/importexportflow`},
      //     {text: 'Websocket Service', href: `${match.url}/flow/copypasteflow`},
      //     {text: 'DB Schema', href: `${match.url}/flow/importexportflow`},
      //   ]
      // },
      // {
      //   title: 'Advanced Guide',
      //   items: [
      //     {text: 'Confluence page', href: `https://n3n-us.atlassian.net/wiki/spaces/teamdev/pages/84061742/ADP+Web+Service`},
      //     {text: 'Dataengine PDF manual', href: '#'}
      //   ]
      // }
      {
        title: 'Advanced Guide',
        items: [
          {text: 'Editor/Runtime', href: `https://n3n-us.atlassian.net/wiki/spaces/teamdev/pages/84061742/ADP+Web+Service`},
          {text: 'Processor', href: 'https://n3n-us.atlassian.net/wiki/spaces/teamdev/pages/440565764/Processor+Server+Guide'},
          {text: 'Dataengine PDF manual', href: pdf}
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
            <SideTab options={options} match={this.props.match} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chapter;
