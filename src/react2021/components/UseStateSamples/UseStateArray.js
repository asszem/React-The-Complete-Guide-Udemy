import { useState } from 'react';

function UseStateArray() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");

    const addItem = event => {
        event.preventDefault();
        setItems([
            ...items,
            {
                id: items.length,
                name: itemName
            }
        ]);
        setItemName("");
    };

    return (
        <div>
            <h3>Use State Array</h3>

            <form onSubmit={addItem}>
                <label>
                    <input
                        name="item"
                        type="text"
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}
                    />
                </label>
            </form>
            <ul>
                {items.map(item => (
                    <li key={item.id}>#{item.id} {item.name}</li>
                ))}
            </ul>
        </div>
  );
}

export default UseStateArray;