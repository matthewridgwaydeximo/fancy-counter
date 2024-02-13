import CountButtons from "./CountButtons";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
    return (
        <>
            <Title />
            <Counter />
            <ResetButton />
            <CountButtons />
        </>
    );
}
