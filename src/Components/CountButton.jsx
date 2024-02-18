import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const INCREMENT_STR = "increment";
const DECREMENT_STR = "decrement";

export default function CountButton({ type = "", setCount = () => {} }) {
    const handleClick = (e) => {
        if (type === INCREMENT_STR) {
            setCount((prevCount) => prevCount + 1);
        } else if (type === DECREMENT_STR) {
            setCount((prevCount) => prevCount - 1);
        }
        e.target.blur();
    };

    return (
        <button className="count-btn" onClick={handleClick}>
            {type === DECREMENT_STR && <MinusIcon className="count-btn-icon" />}
            {type === INCREMENT_STR && <PlusIcon className="count-btn-icon" />}
        </button>
    );
}
