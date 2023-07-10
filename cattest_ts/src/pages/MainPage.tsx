import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import CatImage from '../assets/cat/cat.jpg';

function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/question');
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <ContentsWapper>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            className="rounded-circle"
            src={CatImage}
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
        <Desc>내가 집사가 돼서 고양이를 키운다면..?</Desc>
        <Button
          className="btn-danger"
          onClick={handleClickButton}
          style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
        >
          테스트 시작하기
        </Button>
      </ContentsWapper>
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fffacd;
  font-family: 'YeongdeokSnowCrab';
`;

const Header = styled.div`
  background-color: #ffa07a;
  font-size: 40pt;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'YeongdeokSnowCrab';
`;

const ContentsWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20pt;
`;

const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 20pt;
`;
