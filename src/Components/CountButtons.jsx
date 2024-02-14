import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount }) {
    const incrementCounter = (e) => {
        setCount((prevCount) => prevCount + 1);
        e.target.blur();
    };

    const decrementCounter = (e) => {
        setCount((prevCount) => prevCount - 1);
        e.target.blur();
    };

    return (
        <div className="button-container">
            <button className="count-btn" onClick={decrementCounter}>
                <MinusIcon className="count-btn-icon" />
            </button>
            <button className="count-btn" onClick={incrementCounter}>
                <PlusIcon className="count-btn-icon" />
            </button>
        </div>
    );
}
