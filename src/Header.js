import "./styles.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1>Hello {props.Username}</h1>
      <h2>Welcome to Dashboard</h2>
    </div>
  );
}
