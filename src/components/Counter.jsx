import {useState} from "preact/hooks";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div class="my-4">
            <p>Count: {count}</p>
            <button class="p-2 border-2 rounded-md mr-2"
                    onClick={() => setCount(count + 1)}>Increment
            </button>
            <button class="p-2 border-2 rounded-md"
                    onClick={() => setCount(count - 1)}>Decrement
            </button>
        </div>
    );
}