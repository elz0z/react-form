import "./alert.css";
function Alert({ show, errorMsg = null }) {
    if (show) {
        return (
            <div className="alert">
                <p style={{ color: errorMsg ? "red" : "green" }}>
                    {errorMsg
                        ? errorMsg
                        : "The Form Has Been Submitted successfully"}
                </p>
            </div>
        );
    } else {
        return <></>;
    }
}
export default Alert;
