export default function PersonalInfo(props) {
    const info = {name:"name"}
    return (
        <div style={{width:'80%',marginLeft:'10%',display:"flex",justifyContent:"space-between",fontSize:"1.5em"}}>
            <div>
                <div style={{margin:"10px",display:"flex",justifyContent:"space-between",width:"250px"}} className="name">
                    <div>Name</div>
                    <div>:</div>
                    <div>{info.name}</div>
                </div>
                <div style={{margin:"10px",display:"flex",justifyContent:"space-between",width:"250px"}} className="customer">
                    <div>Customer</div>
                    <div>:</div>
                    <div>{info.name}</div>
                </div>
                <div style={{margin:"10px",display:"flex",justifyContent:"space-between",width:"250px"}} className="address">
                    <div>Address</div>
                    <div>:</div>
                    <div>{info.name}</div>
                </div>
            </div>
            <div>
                <div style={{margin:"10px",display:"flex",justifyContent:"space-between",width:"250px"}} className="date">
                <div>Date</div>
                    <div>:</div>
                    <div>{info.name}</div>
                </div>
                <div style={{margin:"10px",display:"flex",justifyContent:"space-between",width:"250px"}} className="mobile">
                    <div>Mobile</div>
                    <div>:</div>
                    <div>{info.name}</div>
                </div>
                <div style={{margin:"10px",display:"flex",justifyContent:"space-between",width:"250px"}} className="email">
                    <div>Email</div>
                    <div>:</div>
                    <div>{info.name}</div>
                </div>
            </div>
       </div>
    )
}