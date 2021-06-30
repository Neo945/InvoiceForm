import {Heading,Sales,PersonalInfo} from './components'
export default function Page(props) {
    const style = {
        width:`90vw`,
        height:`141vh`,
        padding:"5px",
        margin:"50px",
        border:"1px black solid",
        position:"relative"
    }

    return (
        <div style={style} className="page">
            <Heading />
            <Sales />
            <div style={{fontSize:"1.5EM"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue 
            </div>
            <PersonalInfo/>
        </div>
    )
}