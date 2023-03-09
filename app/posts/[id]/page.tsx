interface PostProps {
  params: {
    id: string;
  };
}

const Post = ({ params }: PostProps) => {
  return <p>Post: {params.id}</p>;
};

export default Post;
