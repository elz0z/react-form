import "./alert.css";
function Alert({ show, msg }) {
    if (show) {
        return (
            <div className="alert">
                <p style={{ color: "green" }}>{msg}</p>
            </div>
        );
    } else {
        return <></>;
    }
}
export default Alert;
