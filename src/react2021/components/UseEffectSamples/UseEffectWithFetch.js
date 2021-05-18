// Source: https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=2
import { useEffect, useState } from 'react';

const UseEffectWithFetch = (props) => {
    console.log('rendered');
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('useEffect called');
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])  // call this useEffect only if resourceType changes

    return (
        <div>
            hello
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
            <h1>{resourceType}</h1>
            {items.map((item, index) => {
                return (
                    <pre key={index}>{JSON.stringify(item)}</pre>
                )
            })}
        </div>
    )

};

export default UseEffectWithFetch;