import React from 'react';
import {Row} from 'reactstrap';
import {Link, Route} from 'react-router-dom';
import Highlight from 'react-highlight';

/* components */
import InnerImg from '../../../components/InnerImg';

/* images */
import InputCategory from '../../../img/input_category.png';
import StorageCategory from '../../../img/storage_category.png';
import FunctionCategory from '../../../img/function_category.png';
import ProcessCategory from '../../../img/process_category.png';

import HttpNodeImg from '../../../img/http_node.png';
import EditNodeImg from '../../../img/edit_node.png';
import HttpResImg from '../../../img/http_response.png';
import NodeLinkImg from '../../../img/node_link.png';
import AddDebugImg from '../../../img/add_debug.png';
import DebugOutputImg from '../../../img/debug_output.png';
import ADPLog from '../../../img/adp_log.png';
import LinkFunction from '../../../img/link_function.png';
import ResultImg from '../../../img/result.png';
import ObjectTypeEditorWindow from '../../../img/objectTypeEditorWindow.png';
import LinkObj from '../../../img/link_obj.png';


/* code */
import functionCode from '../../../libs/code/1.functionCode.js';

const QuickStart = ({match}) => (
  <div className="contentbox">
    <h2>QuickStart</h2>
    <hr />
    <Route exact path={`${match.url}/step1`} component={MakeSimpleFlow} />
    <Route path={`${match.url}/step2`} component={DataParse} />
    <Route path={`${match.url}/step3`} component={SendADP} />
  </div>
);

const MakeSimpleFlow = () => (
  <Row>
    <div className="inner_contentbox">
      <h4 className="subtitle">Make Simple Process</h4>
      <p>
        유효한 Flow를 만들기 위해선 <Link to="/chapter#process">Basic</Link>에서 살펴본 Process를 구성해야합니다.
        <br />
        <br />
        1. 외부 데이터를 수집하고,<br />
        2. 데이터를 Parsing 하고,<br />
        3. ADP로 데이터를 보내야 합니다. <br />
        <br />
        Data Engine은 각 Node들을 카테고리로 구분하여, 적절하게 사용할 수 있도록 구성되어있습니다.{' '}
      </p>

      <hr />
      <p className="lead">Step 1. Collect External Data</p>
      <InnerImg src={InputCategory} text={'Input Category'} height={100} />
      <InnerImg src={StorageCategory} text={'Storage Category'} height={100} />
      <p>
        1) <b>외부데이터의 수집</b>을 위해 필요한 기본적인 Node 카테고리는 Input과 Storage입니다.<br />
        사용자는 Input 카테고리의 Node들을 활용해, 외부 데이터를 입력 받을 라우터를 만들거나 직접 입력할 데이터를 구성할 수 있습니다.<br />
        <br />
        이번 Chapter에선 http Node를 통해 외부에서 데이터를 받는 플로우를 구현해보겠습니다.<br />
      </p>
      <InnerImg src={HttpNodeImg} text="http node" height={60} border />
      <p>모든 Node는 하단의 Info에 Node의 Type과 ID, Property들의 대한 설명이 붙어있습니다. http Node의 경우 다음과 같은 설명이 있습니다.</p>
      <blockquote>
        Provides an input node for http requests, allowing the creation of simple web services.<br />
        <br />
        The resulting message has the following properties:<br />
        msg.req : http request<br />
        msg.res : http response<br />
        <br />
        For POST/PUT requests, the body is available under msg.req.body. This uses the Express bodyParser middleware to parse the content to a JSON
        object.<br />
        <br />
        By default, this expects the body of the request to be url encoded:<br />
        <code>foo=bar&this=that</code>
        <br />
        <br />
        To send JSON encoded data to the node, the content-type header of the request must be set to application/json.
      </blockquote>
      <p>
        간단하게 정리하자면, http Node는 간단한 웹서비스를 만들 수 있게 해주는 Node입니다. 내부에서 request나 response 객체에 대한 정보까지도 얻을 수 있습니다. 하지만 여기선 그냥 해당 url로 들어온 값을 다음 Node로 넘겨줄 수
        있다는 정도만 기억하세요. <br />
        <u style={{color: 'red', fontSize: '.9rem'}}>* 처음 보는 Node를 만나면 꼭 Info를 읽어보세요</u>
        <br />
        <br />
        다음은 실제 Node의 편집화면입니다.
      </p>
      <InnerImg src={EditNodeImg} text="edit http in node" border />
      <p>
        간단하게 구현하기 위하여, 예제에선 POST 방식을 통해 데이터를 전달 받겠습니다. 받을 Url 까지 설정해주면 편집 작업은 끝입니다. Name은 Node의 이름으로서 필수요소는 아닙니다. 추가적으로 http request가 마무리 될 수 있도록
        Output 카테고리에서 http response Node를 드래그 하여 연결해주세요. 추가적인 설정은 필요 없습니다.
      </p>
      <InnerImg src={HttpResImg} text="http response node" border height={60} />
      <InnerImg src={NodeLinkImg} text="node link to node" height={60} border style={{marginLeft: '10px'}} />
      <p>
        이제 설정을 서버로 전달해주기 위해 Editor 우측 상단의 <span className="btn-deploy">Deploy</span> 버튼을 눌러주세요.
      </p>
      <hr />
      <p>
        정상적으로 설정되었는지 확인하기 위해 Chrome App인 Postman을 통해 JSON 데이터를 전송해보겠습니다.<br />
        요청할 URL은 페이지의 url에 Data Engine의 port인 1880을 붙이고 추가한 url을 추가해주시면 됩니다. <br />
        예제에선 <code>http://[wizeye page url]:1880/test</code>가 되겠네요.<br />
        <br />
        Node로 들어온 데이터를 확인하기 위해서 사용자는 Output 카테고리에 있는 Debug Node를 활용할 수 있습니다. http request Node에 Debug Node를 연결해주세요. 다시{' '}
        <span className="btn-deploy">Deploy</span> 버튼을 눌러주세요.<br />
      </p>
      <InnerImg src={AddDebugImg} text="Debug node link to http request node" height={150} border />
      <InnerImg src={DebugOutputImg} text="Debug node output" height={150} border style={{marginLeft: '10px'}} />
      <p>사용자는 Editor 하단에 있는 debug 탭을 통해 Postman을 통해 전송한 JSON 객체가 무사히 넘어온걸 확인할 수 있습니다.</p>
    </div>
  </Row>
);

const DataParse = ({match}) => (
  <Row>
    <div className="inner_contentbox">
      <p className="lead">Step 2. Data Parse</p>
      <p>
        <Link to={'/chapter/quickstart/step1'}>Step 1. Collect External Data</Link>에선 JSON 객체를 받아서 Data Engine에서 확인해보았습니다. 하지만 만약 받아온 데이터가 특정 형식으로 잘
        정리된 파일이 아닌 경우엔 추가적인 Parsing이 필요합니다.
      </p>
      <InnerImg src={ADPLog} text={'adp log message'} />
      <p>
        위의 터미널 화면은 ADP가 데이터를 전달 받았을 때 db에 저장하기까지의 시간입니다. 이전 예제와 달리 규칙성은 있으나 객체화되어있는 데이터셋이 아닙니다. Sequence 단위로 데이터를 배열화하고 Sequence 내부의 개별 Push Time과 그
        값의 평균을 저장하는 객체를 생성해야하는 작업을 해야한다고 가정하겠습니다.
      </p>
      <p>이를 구현하기 위해 사용자는 Function 카테고리의 Node들을 활용할 수 있습니다.</p>
      <InnerImg src={FunctionCategory} text={'Function Category'} height={100} />
      <p>
        Function 카테고리의 Node들은 사용자에게 직접적으로 스크립트를 쓰거나 간접적으로 이를 구현할 수 있도록 도와줍니다. 이 중 Function Node는 직접적으로 사용자가 스크립트를 작성해서 데이터를 커스터마이징할 수 있도록 해줍니다. 만약
        사용자가 자바스크립트 숙련자라면 다른 Node의 기능을 익힐 필요 없이 Function Node를 활용하면 됩니다.
        <br />
        <br />
        예제에선 Function Node를 활용해 원하는 형태를 구현해보겠습니다.
      </p>
      <InnerImg src={LinkFunction} height={250} text={'link to function'} /> <Highlight language="javascript">{functionCode}</Highlight>
      <p className="img_description">code in function node</p>
      <InnerImg src={ResultImg} text={'result'} />
      <p>
        {' '}
        원하는 결과값을 얻어냈습니다. <br />예제에선 Function Node를 활용하여 처리했지만, Function 카테고리에는 코드를 줄일 수 있도록 활용할 수 있는 Node들이 존재합니다. 사용자의 편의대로 사용하시면 됩니다.{' '}
      </p>
      <p> 추후 코드 타이핑을 최소화할 수 있는 방향으로 Function Node들이 개발될 예정입니다. </p>
    </div>
  </Row>
);

const SendADP = () => (
  <Row>
    <div className="inner_contentbox">
      <h4 className="subtitle">Step 3. Send Data to Processor</h4>
      <p>
        지난 Step에선 1) <Link to={'/chapter/quickstart/step1'}>외부에서 데이터를 수집하고</Link>, 2)<Link to={'/chapter/quickstart/step2'}> 적절한 데이터의 모양으로 처리</Link>해주었습니다.
        실제로 이 데이터를 사용하려면 사용할 솔루션으로 데이터를 전송해 주어야합니다.<br />
        <br /> Data Engine은 자체 Processor 서버를 통하여 데이터를 DB에 저장하고, 처리된 데이터를 연결된 서버로 전송해줍니다. Data Engine Editor는 이를 위한 Node를 갖고 있습니다.<br />
      </p>
      <InnerImg src={ProcessCategory} text={'process category'} height={350} />
      <p>
        바로 Process 카테고리의 Node들입니다. <br /><br />
        Process Node들은 외부에서 데이터를 수집하는 data receiver, processor로 들어온 데이터를 전달해주는 <b>object type node</b>, 형성된 object들을 군집화 시켜주는 <b>aggregate node</b>,
        연결된 개별 Object들을 확인할 수 있게 해주는 <b>preview node</b>로 구성되어있습니다.<br/>
        예제에선 object type node를 통해 processor에서 object type을 형성하게 하고, 데이터를 보내 preview에서 형성된 object를 확인해보겠습니다.
      </p>
      <InnerImg src={LinkObj} height={200} text='link to object type node' border/>
      <InnerImg src={ObjectTypeEditorWindow} height={400} text={'object type node editor'} border/>
      <p>이전 step에서 만들었던 function node를 object type node에 이어주고 object type node를 열어봅시다.</p>
    </div>
  </Row>
);

export default QuickStart;
