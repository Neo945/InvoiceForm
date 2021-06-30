export default function Card(props) {
    console.log(props);
    return (
        <div style={{width:"100%",display:"inline-block",border:"1px black solid",padding:"10px",fontWeight:(props.header? "bold":"normal")}} className="card">
            {props.value}
        </div>
    );
}