
// This is equivalent to /comments?postId=1
const base_url="https://jsonplaceholder.typicode.com/posts"
fetch(base_url)
  .then((response) => response.json())
  .then((json) => console.log(json));




// 1. Define an async function to handle the fetch
async function fetchAndDisplayPosts() {
    try {
        // 2. Await the fetch request
      const response = await fetch('base_url');

        // 3. Check if the network request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 4. Await the parsing of the data stream into JSON
        const posts = await response.json();

        // 5. Pass the data to your display function
        displayPosts(posts);
    } catch (error) {
        console.error("Fetch process failed:", error);
    }
}


// Write your code here!
