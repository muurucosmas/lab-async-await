// Write your code here!

async function getPostData() {
  try{
  const response =await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!response.ok){
    throw new Error("your error is",response.status)
  }
  const data = await response.json()
  console.log(data)
  displayPosts(data)
  
}catch(error){
  console.log(error)
};

}

function displayPosts(post){
  const ulPost = document.getElementById("post-list")
  ulPost.textContent = ""
 post.forEach( post => {
  const li = document.createElement("li")
  const h1 = document.createElement("h1")
  h1.textContent = post.title
  const p = document.createElement("p")
  
  p.textContent = post.body
li.append(h1,p)
ulPost.appendChild(li)
 
 });
}
getPostData()
