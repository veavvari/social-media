import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await makeRequest.get("/posts");
            return res.data;
        }
    });

  return <div className="posts">
    {isLoading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error occurred while fetching posts.</p>
    ) : (
      data?.map(post=>(
        <Post post={post} key={post.id}/>
      ))
    )}      
  </div>;
};

export default Posts;