import { sculptureList } from "./data";
import {useState} from 'react';


export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    function handleClick(){
        setIndex(index + 1);
    }

    let sculpture = sculptureList[index];
    
    return(
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>{sculpture.name} by {sculpture.artist}</h2>
            <h3>({index+1}/12)</h3>

            <button onClick={handleMoreClick}>
                {showMore? 'Hide' : 'Show'} More
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src = {sculpture.url}
                alt = {sculpture.alt}
            />
            

        </>
    );
}