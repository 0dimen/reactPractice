import { useState } from "react";

const initialItems = [
    {title: 'pretzels', id:0},
    {title: 'crispy seaweed', id:1},
    {title: 'granola bar', id: 2},
];

export default function Menu(){
    const [items, setItems] = useState(initialItems);
    // const [selectedItems, setSelectedItems] = useState(items[0]);
    const [selectedId, setSelectedId] = useState(items[0].id);


    const selectedItems = items.find(item =>
        item.id === selectedId);

    function handleItemChange(id, e){
        setItems(items.map(item =>{
            if(item.id === id){
                return {...item, title: e.target.value};
            }else{
                return item;
            }
        }))
    }

    return(
        <>
            <h2>What's your travle snack?</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <input
                            value={item.title}
                            onChange={e => handleItemChange(item.id, e)}
                        />
                        {' '}
                        {/* <button onClick={()=> setSelectedItems(item)}> */}
                        <button onClick={() => setSelectedId(item.id)}>
                            Choose
                        </button>
                    </li>
                ))}
            </ul>

            <p>You picked {selectedItems.title}.</p>
        </>
    );
}