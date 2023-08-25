import { useState } from "react";

let nextId = 0;

export default function List(){
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    function handleClick(){
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0, insertAt),
            {id: nextId++, name: name},
            ...artists.slice(insertAt)
        ];

        setArtists(nextArtists);
        setName('');
    }

    return(
        <>
            <h1>Inspiring sculptors: </h1>
            <input
                value={name}
                onChange={e=> setName(e.target.value)}
                />
            <button onClick={handleClick}>Add</button>
            <ul>
                {artists.map(artist =>(
                    <li key={artist.id}>{artist.id}{artist.name}
                    <button onClick={()=>
                        setArtists(
                            artists.filter(a=>
                                a.id !== artist.id)
                        )
                    }>delete
                    </button></li>
                ))}
            </ul>
        </>
    )
}