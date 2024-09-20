import React from "react";
import Comment from "../Comment";

const Post2 = () => {
  const post = {
    id: 3,
    title: `website`,
    content: `A officiis voluptas magnam ex. Dolor fuga sint ea modi illo quidem. Illum odit
              ipsum enim omnis doloremque. Quo perspiciatis rerum exercitationem optio ut.
              Molestiae tempora qui. Qui est quaerat ullam et deserunt eaque dolores. Ut 
              cum nemo enim soluta nesciunt itaque eum. Quod perferendis voluptas ratione 
              officiis ipsam. Aliquam illum magnam tenetur doloribus maiores deserunt dolores.
              Ex impedit delectus. Vero corporis itaque amet. Optio ut provident nihil amet. 
              Suscipit necessitatibus doloremque hic assumenda enim rerum. Minus at earum. 
              Ut consequatur vero rerum ut saepe commodi earum id. Pariatur rerum eligendi incidunt 
              quis. Omnis est quibusdam culpa sequi voluptates praesentium. Consequatur consequuntur 
              reprehenderit et sit soluta harum neque enim incidunt. Aspernatur vitae aut ea non 
              est eos. Quo eos magnam sit quidem qui quidem laudantium non maiores. Odio voluptas 
              aut atque quasi. Quo incidunt voluptas non consequuntur velit. Mollitia et totam 
              omnis aspernatur eum.`,
    date: `18/11/2019`,
    likes: 3,
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

export default Post2;
