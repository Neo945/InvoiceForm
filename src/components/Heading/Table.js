import Card from './Card'

function Column(props) {
    return (
        <div style={{...props.style,display:'inline-block'}}>
            <Card header value={props.header}/>
        </div>
    )
}
export default function Table(props) {
    return (
        <>
            <div style={{...props.style,marginTop:"20px"}}>
                {props.header?.map(ele => <Column header={ele} style={{width:`calc(100% / ${props.header.length})`}}/>)}
            </div>
        </>
    );
}