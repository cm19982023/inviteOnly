import { Link } from "react-router-dom";
import { Table } from "reactstrap";

export const Posts = ({post}) => {
    
    return(
         <>
        
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                    <th>User</th>
                    <th>DateCreated</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{post.Title}</td>
                    <td>{post.Body}</td>
                    <td>{post.userProfile?.UserId}</td>
                    <td>{post.DateCreated}</td>
                </tr>
            </tbody>
        
        </>  
    );
}