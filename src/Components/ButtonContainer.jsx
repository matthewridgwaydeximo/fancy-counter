import CountButton from "./CountButton";

export default function ButtonContainer({ isLocked = false, setCount = () => {} }) {
    return (
        <div className="button-container">
            <CountButton type="decrement" setCount={setCount} disabled={isLocked} />
            <CountButton type="increment" setCount={setCount} disabled={isLocked} />
        </div>
    );
}
