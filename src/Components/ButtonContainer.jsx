import CountButton from "./CountButton";

export default function ButtonContainer({ setCount }) {
    return (
        <div className="button-container">
            <CountButton type="decrement" setCount={setCount} />
            <CountButton type="increment" setCount={setCount} />
        </div>
    );
}
