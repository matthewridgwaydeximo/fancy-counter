import { useState } from "react";
import CountButtons from "./CountButtons";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <Title />
            <Counter count={count} />
            <ResetButton />
            <CountButtons setCount={setCount} />
        </div>
    );
}
