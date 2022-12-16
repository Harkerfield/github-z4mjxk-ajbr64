const deletePost = async (id) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
     method: 'DELETE',
  }).then((response) => {
     if (response.status === 200) {
        setPosts(
           posts.filter((post) => {
              return post.id !== id;
           })
        );
     } else {
        return;
     }
  });
  };