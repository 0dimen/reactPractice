import { useState } from "react";

export default function CounterApp(){
    const [showB, setShowB] = useState(true);
    
    // show &&을 통해 태그가 사라지면 관련 정보도 모두 사라진다.
    return(
        <div>
            <Counter/>
            {showB && <Counter/>}
            <label>
                <input
                    type="checkbox"
                    checked = {showB}
                    onChange = {e=> {
                        setShowB(e.target.checked)
                    }}
            />
            Render the second counter
            </label>
        </div>
    );
}

function Counter(){ // Counter를 default function 내부에 정의하면, 매번 값이 새로 rendering 된다.
    const[score, setScore] = useState(0);
    const[hover, setHover] = useState(false);

    let className = 'counter';
    if(hover){
        className += ' hover';
    }

    return(
        <div
            className = {className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score+1)}>
                Add one
            </button>
        </div>
    );
}

