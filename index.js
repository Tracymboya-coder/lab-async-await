/* =========================
   DISPLAY POSTS FUNCTION
========================= */
function displayPosts(posts) {
  const ul = document.getElementById("post-list");
  console.log(ul)
//   ul.innerHTML = ""; // clear old content

  // loop through posts
  posts.forEach(post => {
    // create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    console.log(post)
    // add content
    h1.textContent = post?.title;
    p.textContent = post?.body;

    
    // build structure
    li.appendChild(h1);
    li.appendChild(p);

    ul.appendChild(li);
  });
}

/* =========================
   FETCH DATA (ASYNC/AWAIT)
========================= */
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    displayPosts(posts); // call function after fetch
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

/* =========================
   RUN APP
========================= */
getPosts();


// Write your code here!
