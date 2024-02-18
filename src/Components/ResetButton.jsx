import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount = () => {}, ...props }) {
    const resetCounter = (e) => {
        setCount(0);
        e.target.blur();
    };

    return (
        <button className="reset-btn" onClick={resetCounter}>
            <ResetIcon className="reset-btn-icon" {...props} />
        </button>
    );
}
