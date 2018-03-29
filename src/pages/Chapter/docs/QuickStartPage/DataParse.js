import React from 'react';
import {Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';

/* components */
import InnerImg from '../../../../components/InnerImg';

/* images */
import FunctionCategory from '../../../../img/function_category.png';
import ADPLog from '../../../../img/adp_log.png';
import LinkFunction from '../../../../img/link_function.png';
import ResultImg from '../../../../img/result.png';

/* code */
import functionCode from '../../../../libs/code/1.functionCode.js';

const DataParse = ({match}) => (
  <Row>
    <div className="inner_contentbox">
      <h4 className="subtitle">Step 2. Parse Data</h4>
      <p>
        <Link to={'/chapter/quickstart/step1'}>Step 1. Collect External Data</Link>에선 JSON 객체를 받아서 Data Engine에서 확인해보았습니다. 하지만 만약 받아온 데이터가 특정 형식으로 잘
        정리된 파일이 아닌 경우엔 추가적인 Parsing이 필요합니다.
      </p>
      <InnerImg src={ADPLog} text={'processor log message'} />
      <p>
        위의 터미널 화면은 processor가 데이터를 전달 받았을 때 db에 저장하기까지의 시간입니다. 이전 예제와 달리 규칙성은 있으나 객체화되어있는 데이터셋이 아닙니다. Sequence 단위로 데이터를 배열화하고 Sequence 내부의 개별 Push
        Time을 저장하는 객체를 생성해야하는 작업을 해야한다고 가정하겠습니다.
      </p>
      <p>이를 구현하기 위해 사용자는 Function 카테고리의 Node들을 활용할 수 있습니다.</p>
      <InnerImg src={FunctionCategory} text={'Function Category'} height={100} />
      <p>
        Function 카테고리의 Node들은 사용자에게 직접적으로 스크립트를 쓰거나 간접적으로 이를 구현할 수 있도록 도와줍니다. 이 중 Function Node는 직접적으로 사용자가 스크립트를 작성해서 데이터를 커스터마이징할 수 있도록 해줍니다. 만약
        사용자가 자바스크립트 숙련자라면 다른 Node의 기능을 익힐 필요 없이 Function Node를 활용하면 됩니다.
        <br />
        <br />
        예제에선 Function Node를 활용해 원하는 형태를 구현해보겠습니다.<br />
      </p>
      <InnerImg src={LinkFunction} height={250} text={'link to function'} /> <Highlight language="javascript">{functionCode}</Highlight>
      <p className="img_description">code in function node</p>
      <InnerImg src={ResultImg} text={'result'} />
      <p>
        원하는 결과값을 얻어냈습니다. <br />예제에선 Function Node를 활용하여 처리했지만, Function 카테고리에는 코드를 줄일 수 있도록 활용할 수 있는 Node들이 존재합니다. 사용자의 편의대로 사용하시면 됩니다.{' '}
      </p>
      <p> 추후 코드 타이핑을 최소화할 수 있는 방향으로 Function Node들이 개발될 예정입니다. </p>
    </div>
  </Row>
);

export default DataParse;
