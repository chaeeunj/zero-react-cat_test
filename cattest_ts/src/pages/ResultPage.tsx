import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResultData } from '../stores/Result/ResultData';
import Header from '../components/Header';
import { IResult } from '../stores/Result/types';

function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti'); // 집사의 mbti
  const TestResult = ResultData.find((cat: IResult) => cat.best === mbti);

  return (
    <>
      <Wrapper>
        <Header type="title" questionNo={0} />
        <ContentsWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image
              className="rounded-circle"
              src={TestResult?.image}
              width={350}
              height={350}
            />
          </ResultImage>
          <Desc>
            {TestResult?.best}형 예비집사님과 찰떡궁합인 고양이는{' '}
            {TestResult?.name}입니다.
          </Desc>
          <Desc>
            {TestResult?.name} 고양이는 {TestResult?.desc}
          </Desc>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

export default ResultPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fffacd;
  font-family: 'YeongdeokSnowCrab';
`;

const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  padding: 20px 60px 20px 60px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 25pt;
`;

const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 15pt;
`;
