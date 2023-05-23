
export default function Post(props) {
   return (
    <div className="post">
        <p>{props.post.body}</p>
        <p>{props.post.date_created}</p>
        <p>Posted By: {props.post.username}</p>
    </div>
   ) 
}