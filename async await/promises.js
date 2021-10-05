// const { reject } = require("async");

// alert("hello workd");

output = "<h1>Hello</h1>";
document.body.innerHTML = output;

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

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("error! Something Went wrong");
//       }
//     }, 2000);
//   });
// }

// createPost({ title: "post 5", body: "this is post 5" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// getPosts();

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  allData = {
    name: [],
    phoneNo: [],
    username: [],
  };

  // jsonData = JSON.parse(data[1]);
  // console.log(jsonData);

  data.forEach((dataItem) => {
    allData.name += dataItem.name;
  });
  console.log(allData.name);
}
fetchUsers();

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// Promise.all([promise1, promise2]).then((values) => console.log(values));
