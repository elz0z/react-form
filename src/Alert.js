import './alert.css';
function Alert({ message, color }) {
  return (
    <div className="alert" >
      <p style={{ color: color }} > {message}</p>
    </div >
  )
}
export default Alert;