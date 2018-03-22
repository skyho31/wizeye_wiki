import React from 'react';
import {Container, Row} from 'reactstrap';

/* Component */
import InnerImg from '../../components/InnerImg';

/* Images */
import JSlogo from '../../img/js.png';
import NodeRED from '../../img/nodered.png';
import ClientSide from '../../img/clientside.png';
import ServerSide from '../../img/serverside.png';

const Contents = () => (
  <Container className="wiki_container">
    <div className="contentbox">
      <h2>About</h2>
      <hr />
      <DataEngine />
      <RuntimeEditor />
      <FlowBasedContents />
      <Reference />
    </div>
  </Container>
);

/**
 * about 1 - DataEngine이란?
 */
const DataEngine = () => (
  <Row>
    <div id="about_1_1" className="inner_contentbox">
      <h4 className="subtitle">1. Data Engine</h4>
      <InnerImg src={JSlogo} text={'1) Javascript'} height={150} />
      <InnerImg src={NodeRED} text={'2) Node-RED'} height={150} />
      <p>
        <b>Data Engine은 Node-RED를 기반으로 만든 ADP(Advanced Data Platform) Editor 입니다.</b>
        <br /> Data Engine은 ADP로 향하는 모든 외부 데이터를 수집하여, ADP에 맞는 형태로 데이터를 가공해줍니다. 기존의 데이터 콜렉터들과는 달리 외부데이터를 가공하기 위해 코드를 복잡하게 사용하지 않아도 되며, 기본 제공되는 Node 및
        npm 환경을 통한 Node의 확장을 통해 손쉽게 데이터를 원하는 형태로 가공할 수 있습니다.<br />
        <br />
        사용자가 Javascript에 익숙할 경우, 개별 Node의 사용법을 익힐 필요 없이 function Node를 통해 직접 커스터마이징도 할 수 있습니다.
      </p>
    </div>
  </Row>
);

/**
 * about 2 - Runtime & Editor
 */
const RuntimeEditor = () => (
  <Row>
    <div id="about_1_2" className="inner_contentbox">
      <h4 className="subtitle">2. Runtime & Editor</h4>
      <InnerImg src={ClientSide} text={'1) data flow editor'} />
      <InnerImg src={ServerSide} text={'2) data engine runtime'} width={350} />
      <p>
        <b>Data Engine은 크게 Server-side인 Runtime과 Client-side인 Editor로 구성됩니다.</b>
        <br />
        Editor의 기본 단위인 개별 node는 Runtime과 Restful API 및 Websocket으로 연결되어있으며, 사용자는 서버 내부의 코드를 직접 들여다볼 필요 없이, flow의 흐름만으로 비지니스 로직을 제어할 수 있습니다. 또한 debug
        node 등을 통해 Runtime을 실시간으로 감시할 수 있음은 물론 script를 사용해야하는 경우 내부에 ace-editor가 사용되어 추가적인 IDE 없이도 오류 없이 코딩할 수 있습니다.
      </p>
    </div>
  </Row>
);

/**
 * about 3 - Flow-based Programming
 */

const FlowBasedContents = () => (
  <Row>
    <div id="about_1_3" className="inner_contentbox">
      <h4 className="subtitle">3. Flow-based programming</h4>
      <p>
        Invented by J. Paul Morrison in the 1970s, flow-based programming is a way of describing an application’s behavior as a network of
        black-boxes, or “nodes” as they are called in Node-RED. Each node has a well-defined purpose; it is given some data, it does something with
        that data and then it passes that data on. The network is responsible for the flow of data between the nodes.<br /> <br />
        It is a model that lends itself very well to a visual representation and makes it more accessible to a wider range of users. If someone can
        break down a problem into discrete steps they can look at a flow and get a sense of what it is doing; without having to understand the
        individual lines of code within each node.
      </p>
    </div>
  </Row>
);

const Reference = () => (
  <Row>
    <div id="about_1_4" className="inner_contentbox">
      <h4 className="subtitle">4. Reference</h4>
      <p>
        Node-RED (<a href="https://nodered.org/">https://nodered.org/</a>)<br/>
        Flow-based Programming(<a href="https://en.wikipedia.org/wiki/Flow-based_programming">https://en.wikipedia.org/wiki/Flow-based_programming</a>)<br/>
        Confluence 분석 문서(<a href="https://n3n-us.atlassian.net/wiki/spaces/teamdev/pages/84061742/ADP+Web+Service">https://n3n-us.atlassian.net/wiki/spaces/teamdev/pages/84061742/ADP+Web+Service</a>)<br/>
      </p>
    </div>
  </Row>
);

export default Contents;
