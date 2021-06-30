import {Heading,Sales,PersonalInfo,Table,Rules,Signature} from './components'
export default function Page(props) {
    const style = {
        width:`90vw`,
        height:`100%`,
        padding:"5px",
        margin:"50px",
        border:"1px black solid",
        position:"relative"
    }

    return (
            <div style={style} id="area" className="page">
                <Heading />
                <Sales />
                <div style={{fontSize:"1EM"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue 
                </div>
                <PersonalInfo/>
                <Table header={["Sr.No.","Perticular","Model","Serial No"]}/>
                <Table header={["Accessories Details","Complaints Found"]}/>
                <Table header={["Mature of Colplaints",'remark']}/>
                <Table />
                <Rules/>
                <Signature />
            </div>
    )
}