import "./alert.css";
function Alert({ show }) {
    if (show) {
        return (
            <div className="alert">
                <p style={{ color: "green" }}>Submit has been success</p>
            </div>
        );
    } else {
        return <></>;
    }
}
export default Alert;
