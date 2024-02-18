import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const INCREMENT_STR = "increment";
const DECREMENT_STR = "decrement";

export default function CountButton({ type = "", setCount = () => {}, ...props }) {
    const handleClick = (e) => {
        if (type === INCREMENT_STR) {
            setCount((prev) => {
                const newCount = prev + 1;

                if (newCount > 5) return 5;

                return newCount;
            });
        } else if (type === DECREMENT_STR) {
            setCount((prev) => {
                const newCount = prev - 1;

                if (newCount < 0) return 0;

                return newCount;
            });
        }

        e.target.blur();
    };

    return (
        <button className="count-btn" onClick={handleClick} {...props}>
            {type === DECREMENT_STR && <MinusIcon className="count-btn-icon" />}
            {type === INCREMENT_STR && <PlusIcon className="count-btn-icon" />}
        </button>
    );
}
