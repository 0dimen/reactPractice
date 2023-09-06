import { useContext } from "react";
import { LevelContext } from "./LevelContext";

// 실제로는 LevelContext.Provider가 없어도 정상적으로 작동했다.
// const level을 지정할 경우, Page에서 설정한 level의 값은 효과를 미치지 않는다.

export default function Section({children}){
    const level = useContext(LevelContext);
    return(
        <section className="section">
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}