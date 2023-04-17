export default function MainBackground(props){
  console.log(props)
  return (
    <div
      className="MainBackground bg"
      style={{backgroundImage: `url(${props.background}.jpg)`}}
    ></div>
  );
}