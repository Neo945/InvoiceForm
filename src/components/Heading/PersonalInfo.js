export default function PersonalInfo(props) {
    const info = {name:"name"}
    return (
        <div style={{width:'80%',marginLeft:'10%',display:"flex",justifyContent:"space-between",fontSize:"1em"}}>
            <div>
                <div style={{margin:"10px",position:"relative",display:"flex",justifyContent:"space-between",width:"250px"}} className="name">
                    <div>Name</div>
                    <div style={{marginLeft:"100px",position:"absolute"}}>:</div>
                    <div>{info.name}</div>
                </div>
                <div style={{margin:"10px",position:"relative",display:"flex",justifyContent:"space-between",width:"250px"}} className="customer">
                    <div>Customer</div>
                    <div style={{marginLeft:"100px",position:"absolute"}}>:</div>
                    <div>{info.name}</div>
                </div>
                <div style={{margin:"10px",position:"relative",display:"flex",justifyContent:"space-between",width:"250px"}} className="address">
                    <div>Address</div>
                    <div style={{marginLeft:"100px",position:"absolute"}}>:</div>
                    <div>{info.name}</div>
                </div>
            </div>
            <div>
                <div style={{margin:"10px",position:"relative",display:"flex",justifyContent:"space-between",width:"250px"}} className="date">
                <div>Date</div>
                    <div style={{marginLeft:"100px",position:"absolute"}}>:</div>
                    <div>{info.name}</div>
                </div>
                <div style={{margin:"10px",position:"relative",display:"flex",justifyContent:"space-between",width:"250px"}} className="mobile">
                    <div>Mobile</div>
                    <div style={{marginLeft:"100px",position:"absolute"}}>:</div>
                    <div>{info.name}</div>
                </div>
                <div style={{margin:"10px",position:"relative",display:"flex",justifyContent:"space-between",width:"250px"}} className="email">
                    <div>Email</div>
                    <div style={{marginLeft:"100px",position:"absolute"}}>:</div>
                    <div>{info.name}</div>
                </div>
            </div>
       </div>
    )
}