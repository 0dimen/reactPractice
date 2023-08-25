import { useState } from "react";
import { useImmer} from 'use-immer';

let nextId = 3;

const initialList = [
    {id: 0, title: 'Big Bellies', seen: false},
    {id: 1, title: 'Lunar Landscape', seen: false},
    {id: 2, title: 'Terracotta Army', seen: true},
];

export default function BucketList(){
    const [myList, updateMyList] = useImmer(initialList);
    const [yourList, updateYourList] = useImmer(initialList);

    function handleToggleMyList(artworkId, nextSeen){
        updateMyList(draft =>{
            const artwork = draft.find(a =>
                a.id === artworkId);
            artwork.seen = nextSeen;
        })
    }

    function handleToggleYourList(artworkId, nextSeen){
        updateYourList(draft =>{
            const artwork = draft.find(a=>
                a.id === artworkId);
            artwork.seen = nextSeen;
        });
    }

    return(
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList}
            />
            <h2>Your list of art to see</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList}
                />
        </>
    )
}

// export default function BucketList(){
//     const [myList, setMyList] = useState(initialList);
//     const [yourList, setYourList] = useState(initialList);

//     function handleToggleMyList(artworkId, nextSeen){
//         setMyList(myList.map(artwork => {
//             if(artwork.id === artworkId){
//                 return {...artwork, seen: nextSeen};
//             }else
//                 return artwork;
//         }));
//     }

//     function handleToggleYourList(artworkId, nextSeen){
//         setYourList(yourList.map(artist => {
//             if(artist.id === artworkId)
//                 return {...artist, seen: nextSeen};
//             else
//                 return artist;
//         }));
//     }

//     return(
//         <>
//             <h1>Art BucketList List</h1>
//             <h2>My list of art to see:</h2>
//             <ItemList
//                 artworks={myList}
//                 onToggle={handleToggleMyList}
//                 />
//             <h2>Your list of art to see:</h2>
//             <ItemList
//                 artworks={yourList}
//                 onToggle={handleToggleYourList}
//                 />
//         </>
//     )
// }

function ItemList({artworks, onToggle}){
    return(
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e=> {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                            />
                            {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    )
}