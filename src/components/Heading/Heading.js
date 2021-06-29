import moment from 'moment'
function HeadingText(props){
    return (
            <div className="text" style={{position:"relative",marginTop:"50px"}}>
                <div style={{textAlign:"center",width:"100%",fontSize:'1.5em'}}>
                    ESTIMATE
                </div>
                <div style={{textAlign:"center",width:"100%",marginTop:"5px", fontSize:'2em'}}>
                    APPLICATION NAME
                </div>
            </div>
    );
}
function Services(props) {
    return (
        <div style={{fontSize:'0.80em',position:'absolute',right:'50px',top:'115px',width:'100px',height:'100px',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="service">
            <div style={{fontSize:"1em"}}>Service Hours</div>
            <div style={{fontSize:"0.8em"}}>Mon-Sat</div>
            <div style={{fontSize:"0.8em"}}>11 A.M. to 8 P.M.</div>
        </div>
    );
}
export default function Heading(props) {
    return (
        <div className="heading" style={{fontWeight:"bold",position:"relative"}}>
            {moment().format('MM/DD/YYYY')}
            <hr style={{marginTop:"10px",color:"gray"}}/>
            <img alt="logo" src="https://image.freepik.com/free-vector/pic-shop-camera-photographer-logo_39679-101.jpg" style={{position:"absolute",width:'200px',height:'200px'}}/>
            <HeadingText/>
            <Services/>
        </div>
    )
}