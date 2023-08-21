import { sculptureList } from "./data";

export default function Gallery(){
    let index = 0;

    function handleClick(){
        index = index + 1;
    }

    let sculpture = sculptureList[index];
    
    return(
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>{sculpture[index].name}</h2>
            <h3>({index+1}/12)</h3>

        </>
    );
}