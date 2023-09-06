import { createContext } from 'react';

/*
context의 사용 사례
    - 테마 지정
    - 현재 계정 정보
    - 라우팅
    - 상태 관리

context 사용법
    1. Create and export it with export const MyContext = createContext(defaultValue).
    2. Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
    3. Wrap children into <MyContext.Provider value={...}> to provide it from a parent.
*/

export const LevelContext = createContext(1);
