export default function Popover({ children }) {
    return (
        <div className="popover">
            <div className="carat"></div>
            {children}
        </div>
    );
}
