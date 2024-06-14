import { Link } from "react-router-dom";

export default function NotFoundPage (){
    return( 
        <div>
            <h1>Not Found 404</h1>
            <Link to='/login'>Go To Login</Link>
        </div>
    )
}