import React from "react";

const Post1 = () => {
  const post = {
    id: 2,
    title: "Savings Account",
    content: `Repellat consequatur nemo eum earum quis veritatis debitis aut quas. 
                  Earum blanditiis consequatur totam sint nihil sequi. Eaque minima ut 
                  magni libero. Consequatur facere enim consequatur autem nesciunt praesentium 
                  soluta. Vero ut praesentium sint esse sint nulla sit ea earum. Harum libero et. 
                  Cumque quas quia. Reiciendis qui soluta a fugit veniam non quis. Autem libero ut. 
                  Voluptas non ea quos vitae. Consequuntur voluptate impedit consequuntur est aut 
                  voluptate. Numquam fugiat qui eum possimus voluptatem. Laborum ut quae molestiae 
                  blanditiis quisquam sunt labore temporibus. Voluptatem dolores placeat ea deleniti 
                  sunt. Sint quibusdam et animi possimus. Dolor in nulla perspiciatis ea architecto 
                  perspiciatis voluptates. Voluptatibus culpa repudiandae repellendus maxime repellat 
                  recusandae similique. Provident ut amet ut illum enim. Fuga et commodi rerum at. 
                  Aperiam a dolore illum cum. Labore dolor autem repellendus distinctio ut. Dicta 
                  veritatis earum voluptas laboriosam id optio maiores. Quas eum voluptas. Alias 
                  quo quia dolorem consequatur nihil explicabo. Quo deserunt qui occaecati et id ea 
                  non incidunt. Qui veritatis quae qui tempore optio assumenda doloremque.`,
    date: `27/04/2020`,
    likes: 6,
  };
  return (
    <>
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>Date {post.date}</p>
        <p>Likes {post.likes}</p>
      </div>
      <div style={{textAlign: "center", marginTop: "40px"}}>
        <h3>Comments</h3>
        <h1>No comment</h1>
      </div>
    </>
  );
};

export default Post1;
