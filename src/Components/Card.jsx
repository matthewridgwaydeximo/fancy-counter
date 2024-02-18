import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
    const [count, setCount] = useState(0);

    const isLocked = count === 5;

    return (
        <div className={`card ${isLocked ? `card--limit` : ""}`}>
            <Title isLocked={isLocked} />
            <Counter count={count} />
            <ResetButton setCount={setCount} />
            <ButtonContainer setCount={setCount} isLocked={isLocked} />
        </div>
    );
}
