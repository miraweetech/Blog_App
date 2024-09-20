import React from "react";
import Comment from "../Comment";

const Post = () => {
  const post = {
    id: 1,
    title: "Kansas",
    content: `Explicabo quidem velit natus accusantium id incidunt commodi perferendis beatae. 
              Iure fugit ccusantium commodi. Nemo reprehenderit ut in pariatur. Animi asperiores
              dolor laboriosam in. Consequatur quis et quibusdam qui repellendus pariatur facilis.
              Expedita quis asperiores officia est reprehenderit. Explicabo qui eum accusantium
              occaecati enim excepturi quas cum. Vel quas dolores minima. Dolore eum quis et dolor.
              Aut cumque quia vel. Eius qui ea nam. Commodi molestiae dolores occaecati consequatur
              quo consequatur pariatur ut. Unde deserunt dolorum ducimus consequuntur vel minus.
              Rerum ad deleniti officiis eveniet provident qui quidem. Qui dolores odit itaque voluptas 
              sit ut aut. At magnam provident commodi recusandae. Maiores accusamus molestiae voluptas sed 
              voluptatem similique. Sunt ad totam. Cupiditate est minus. Saepe doloribus ducimus quae aut 
              temporibus. Quaerat voluptatem fuga ratione aliquid. Quasi quas officia officiis consequatur
              corporis sed est soluta. In voluptas quasi ut aut. Odit quasi commodi quis aspernatur saepe.`,
    date: "12/07/2019",
    likes: 5,
  };
  return (
    <>
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>Date {post.date}</p>
        <p>Likes {post.likes}</p>
      </div>
      <div>
        <Comment postId={post.id} />
      </div>
    </>
  );
};

export default Post;
