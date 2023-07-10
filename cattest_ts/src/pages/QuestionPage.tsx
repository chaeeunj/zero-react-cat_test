import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { QuestionData } from '../stores/Question/QuestionData';
import Header from '../components/Header';

function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = React.useState(0);

  const handleClickAnswer = () => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="btn-warning"
            style={{ marginRight: '20px' }}
            onClick={handleClickAnswer}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button className="btn-warning">
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWapper>
    </Wrapper>
  );
}

export default QuestionPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fffacd;
  font-family: 'YeongdeokSnowCrab';
`;

const ContentsWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 25pt;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    font-size: 18pt;
  }
`;
