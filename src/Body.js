import "./styles.css";

export default function Body(props) {
  return (
    <main className="card">
      <img src="Picture.png" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="Skills"></p>
        <Skillset
          skill="Skills"
          skill1="HTML5"
          skill2="CSS3"
          skill3="Javascript"
        />
      </div>
    </main>
  );
}
function Skillset(props) {
  return (
    <div className="List">
      <button className="btn">{props.skill}</button>
      <button className="btn">{props.skill1}</button>
      <button className="btn">{props.skill2}</button>
      <button className="btn">{props.skill3}</button>
    </div>
  );
}
