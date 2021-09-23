
import "../styles/button.scss";

export function Button(props) {
  return <button className = "button" type = "submit"> {props.children} </button>;
}
