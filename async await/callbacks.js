hello = "<h1>Hello</h1>";
document.body.innerHTML = hello;

const posts = [
  {
    title: "post 1",
    body: "this is post 1",
  },
  {
    title: "post 2",
    body: "this is post 2",
  },
  {
    title: "post 3",
    body: "this is post 1",
  },
  {
    title: "post 4",
    body: "this is post 2",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "post 5", body: "this is post 5" }, getPosts);

getPosts();
