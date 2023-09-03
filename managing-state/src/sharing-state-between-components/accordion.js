import { useState } from "react";

export default function Accordion(){
    const [activeIndex, setActiveIndex] = useState(0);
    
    return(
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                panelIndex={0}
                title = "About"
                isActive={activeIndex === 0}
                onShow = {()=> setActiveIndex(0)}>
                    With a population...
            </Panel>
            <Panel
                panelIndex={1}
                title="Etymology"
                isActive={activeIndex === 1}
                onShow = {() => setActiveIndex(1)}
            >
                About etymology...
            </Panel>
            <Panel
                panelIndex={2}
                title="Third"
                isActive={activeIndex === 2}
                onShow = {() => setActiveIndex(2)}
                >
                    Third...
                </Panel>
        </>
    )
}

function Panel({
    panelIndex,
    title,
    isActive,
    onShow,
    children,
}){
    return(
        <>
            <h3>{title}</h3>
            {isActive ? 
                (<p>{children}</p>)
                :<button onClick={onShow}>Show</button>
            }
        </>
    )
}