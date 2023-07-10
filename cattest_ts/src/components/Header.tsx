import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap';
import { QuestionData } from '../stores/Question/QuestionData';

interface Props {
  type: string;
  questionNo: number;
}

function Header(props: Props) {
  return (
    <>
      {props.type === 'progress' ? (
        <ProgressWrapper>
          <ProgressBar
            now={Math.round((props.questionNo / QuestionData.length) * 100)}
            label={`${Math.round(
              (props.questionNo / QuestionData.length) * 100,
            )}%`}
            style={{ width: '100%', height: '30px' }}
          />
        </ProgressWrapper>
      ) : (
        <TitleWrapper style={{ backgroundColor: '#ffa07a' }}>
          예비집사 판별기
        </TitleWrapper>
      )}
    </>
  );
}

export default Header;

const ProgressWrapper = styled.div`
  font-size: 40pt;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'YeongdeokSnowCrab';
  padding: 20px 20px 20px 20px;
`;

const TitleWrapper = styled.div`
  background-color: #ffa07a;
  font-size: 40pt;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'YeongdeokSnowCrab';
`;
