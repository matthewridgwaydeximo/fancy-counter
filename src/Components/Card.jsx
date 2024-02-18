import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <Title />
            <Counter count={count} />
            <ResetButton setCount={setCount} />
            <ButtonContainer setCount={setCount} />
        </div>
    );
}
