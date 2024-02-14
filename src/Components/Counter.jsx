export default function Counter({ count, ...props }) {
    return (
        <p className="count" {...props}>
            {count}
        </p>
    );
}
