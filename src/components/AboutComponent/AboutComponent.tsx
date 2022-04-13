import { useNavigate, useParams } from "react-router-dom";

const AboutComponent = () => {
    const params: any = useParams();
    const navigate = useNavigate();
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h1>This is About Component</h1>
                {params.name?.length > 0 && <h4>{params?.name}</h4>}
                <button className="btn btn-primary mt-3" onClick={()=>{navigate('/home')}}>Goto Home</button>
            </div>

        </>
    )
}
export default AboutComponent;