export default function Card(props) {
    console.log(props)
    return (
        <div style={{width:'100px',border:"1px black solid",padding:"5px"}} className="card">
            {props.value}
        </div>
    );
}