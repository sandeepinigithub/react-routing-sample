import { useParams } from "react-router-dom";

const AboutComponent = () => {
    const params:any = useParams();
    return (
        <>
            <h1>This is About Component</h1>
            { params.name?.length > 0 && <h4>{params?.name}</h4> }
            
        </>
    )
}
export default AboutComponent;