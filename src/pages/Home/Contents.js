import React from 'react';
import {Container, Jumbotron, Button, Badge} from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from '../../img/dataengine_logo.png';

/* setting */
import {version as GuideVersion} from '../../../package.json';

/**
 * Home Contents 1 - Jumbotron
 */
export const MainDoor = () => (
  <div>
    <h5 className="float-right text-right">
      <Badge color="info">Flow Editor</Badge>
      <Badge color="info">Runtime Server</Badge>
      <Badge color="info">Processor Server</Badge>
      <br />

      <Badge color="secondary">Node-RED</Badge>
      <Badge color="dark">WIZEYE</Badge>
      <Badge color="success">v {GuideVersion}</Badge>
    </h5>
    <Jumbotron className="guide_jumbotron">
      <img src={Logo} className="logo" width={200} alt={'logo'} />
      <h1 className="display-3">Data Engine</h1>
      <p className="lead">You can easily make data flow using Data Engine</p>
      <hr className="my-2" />
      <p> The flow-based programming tool based on Node-RED</p>
      <p className="lead">
        <Button href="https://bitbucket.org/n3n_us/dataengine" outline color="secondary">
          View on Bitbucket
        </Button>
        <Link className="btn btn-secondary" to="/chapter">
          Learn More
        </Link>
      </p>
    </Jumbotron>
  </div>
);

/**
 * Home Contents 2 - Installation Guide
 */
export const Installation = () => (
  <Container className="installation_container">
    <div className="contentbox">
      <h2>Installation</h2>
      <hr className="white" />
      <br />
      <h4 className="subtitle">Docker Image를 통한 통합 설치</h4>
      <p>
        1. docker 및 docker-compose를 설치한다.<br />
        2. <a href="https://n3n-us.atlassian.net/wiki/spaces/teamdev/pages/62455815/WIZEYE+2.0+Docker+Compose">사내 Confluenct 페이지 </a>를 참조해서
        docker-compose.yaml을 파일을 작성한다.<br />
        3. 사내 docker 계정으로 로그인 후 <code>docker-compose -f docker-compose.yaml pull</code> 명령어를 통해 설치한다.<br />
        4. <code>docker-compose -f docker-compose.yaml up -d</code> 명령을 통해 Container를 실행한다.<br />
        5. <a href="localhost/builder">Buider 페이지</a>로 접속하여 사이트를 생성한다.<br />
      </p>
      <br />
      <h4 className="subtitle">Source를 통한 설치</h4>
      <p>
        1. Git 도구를 통해 <a href="https://bitbucket.org/n3n_us/dataengine">Data Engine Bitbucket 페이지</a>에서 Source를 다운 받는다.<br />
        2. 생성된 Directory에서 <code>npm install</code> 명령어를 통해 dependency를 설치한다.<br />
        3. Local 환경에서 개발 시, Grunt가 필요하므로 <code>sudo npm install -g grunt-cli</code>를 통해 grunt를 설치한다.<br />
        4. dataengine 폴더 내부에 있는 test 폴더를 삭제한다.<br />
        5. root에 있는 settings.js를 열어 docker proxy(adp, mongodb1) 주소를 localhost로 수정한다.<br />
        6. <code>grunt dev</code> 명령을 통해 dataengine을 실행한다.<br />
        <br />
      </p>
    </div>
  </Container>
);
