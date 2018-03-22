import React from 'react';
import {Row} from 'reactstrap';

/* Component */
import InnerImg from '../../../components/InnerImg';

/* Image */
import NodeImg from '../../../img/node.png';
import FlowImg from '../../../img/flow.png';
import ProcessImg from '../../../img/process.png';

const Basic = () => (
  <div className="contentbox">
    <h2>Basic</h2>
    <hr />
    <Concept />
    <Process />
  </div>
);

/**
 * Basic 1 - Node & Flow
 */
const Concept = () => (
  <Row>
    <div className="inner_contentbox">
      <h4 className="subtitle">Concept</h4>
      <p>
        Data Engine을 사용하기 위해, 사용자는 두 가지 개념에 익숙해져야합니다. <br />Node와 Flow입니다.<br />
        <br />
        <img src={NodeImg} height={70} alt="node" /> Node는 Data Engine에서 원하는 데이터를 만들기 가장 기본 단위입니다.<br />
        <img src={FlowImg} height={70} alt="flow" /> Flow는 Editor 상에서 Node들을 그릴 수 있는 일종의 Palette입니다. <br />
        <br />
        사용자는 이 두가지 개념으로 외부 데이터로부터 원하는 데이터 셋을 쉽게 생성할 수 있습니다.<br />
        각 개별 Node는 특정 한 가지 기능을 수행해서 결과값을 내주는 일종의 black box입니다. 사용자는 단순히 Node를 Flow에 올려놓고 이어줌으로서 사용자는 조금 더 복잡한 기능을 수행하는 일종의 복합 Node를 생성할 수 있게 됩니다.
        <br />
        <br />
        사용자는 Flow를 완성하고 Server에 Deploy하는 것만으로 원하는 데이터를 Wizeye에 전달할 수 있습니다. <br />
        이 모든게 IDE가 아닌 Data Engine의 UI Editor에서 일어나는 일입니다.
      </p>
    </div>
  </Row>
);

/**
 * Basic 2 - Process
 */
const Process = () => (
  <Row>
    <div id="process" className="inner_contentbox">
      <h4 className="subtitle">Process</h4>
      <p>
        Data Engine은 N3N의 솔루션인 Wizeye에 특정 형태의 데이터셋을 전달하기 위한 목적으로 설계되었습니다.<br />
      </p>
      <InnerImg src={ProcessImg} alt="process" height={100} text={'Data Engine Process (collect & parse & send)'} />
      <p>
        이는 Data Engine이 <br />
        1) 외부 데이터를 수집하고 <br />
        2) Wizeye에 맞는 형태의 데이터로 가공하고<br />
        3) Wizeye로 제공해야 함을 의미합니다. <br />
      </p>
      <p>
        위와 같은 Process를 제공하기 위하여, Data Engine은 Data를 수집하기 위한 Input Node, 들어온 Data를 가공할 수 있는 각종 function Node, 그리고 결과값을 Wizeye에서 사용할 수 있도록 ADP에 전송해줄 ADP
        Node를 포함하고 있습니다.<br />
        <br />
      </p>
    </div>
  </Row>
);

export default Basic;
