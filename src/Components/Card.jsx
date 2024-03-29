import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButton from "./CountButton";

const SPACE_CODE = "Space";

export default function Card() {
    const [count, setCount] = useState(0);

    const isLocked = count === 5;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === SPACE_CODE) {
                setCount((prev) => {
                    const newCount = prev + 1;

                    if (newCount > 5) return 5;

                    return newCount;
                });
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [count]);

    return (
        <div className={`card ${isLocked ? `card--limit` : ""}`}>
            <Title isLocked={isLocked} />
            <Counter count={count} />
            <ResetButton setCount={setCount} />
            <ButtonContainer>
                <CountButton type="decrement" setCount={setCount} disabled={isLocked} />
                <CountButton type="increment" setCount={setCount} disabled={isLocked} />
            </ButtonContainer>
        </div>
    );
}
