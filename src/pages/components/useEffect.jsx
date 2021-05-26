import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UseEffect = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, [time]);
  return <Time>{time}</Time>;
};

export default UseEffect;

const Time = styled.span`
  color: red;
`;

/*
# useEffect(callback, arr)

1. useEffect(()=> {})   :의존성 배열이 없으면, 모든 상태변화를 감지
2. useEffect(()=> {},[])    :의존성 배열이 있고 상태값이 없으면, 해당하는 상태를 지켜보지 않음(1번만 코드블럭 실행)
3. uesEffect(()=> {},[time])    :의존성 배열도 있고 상태값도 있으면, 해당하는 상태값을 지켜보고 업데이트가 되면 코드블럭 실행

-배열 내에 여러 개의 상태값이 있다면 그중의 단 하나만 다를지라도 리액트는 effect를 재실행
*/
