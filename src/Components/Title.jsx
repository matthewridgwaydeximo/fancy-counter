export default function Title({ isLocked = false }) {
    return (
        <h1 className="title">
            {isLocked ? (
                <span>
                    Limit! Buy <strong>Pro</strong> for &gt;
                </span>
            ) : (
                "Fancy Counter"
            )}
        </h1>
    );
}
