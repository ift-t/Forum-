const latestPosts = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    const posts = data;
    displayPosts(posts);
}

const latestDiscussion = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const dis = data.posts;
    displayDiscussion(dis);
}

const displayDiscussion = dis =>{

    const discussionContainer = document.getElementById('discussion-posts');

    dis.forEach(dis=>{
        const disCard = document.createElement('div');
        disCard.classList = `card bg-base-100 border-gray-200 border w-4/5 container mx-auto m-4`;
        disCard.innerHTML = `
        <div class="grid grid-cols-2">
        <div class="relative"><img src="${dis.image}">
        <span id="active-check" class="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500"></span>
        </div>
        <div class="card-body">
                <div class="flex">
                <p># ${dis.category}</p>
        <p>Author: ${dis.author.name}</p>
        </div> 
    <h2 class="card-title">${dis.title}</h2>
    <p>${dis.description}</p>
  </div>
  </div>
  <div class="divider w-auto"></div>
  <div class="flex justify-between">
  <div class="grid grid-cols-3 gap-4">
  <p>${dis.comment_count}</p>
  <p>${dis.view_count}</p>
  <p>${dis.posted_time}</p>
  </div>
  <div>
  <button id="${dis.id}" class="bg-green-400 rounded-full w-24 adder-btn">a</button>`
 discussionContainer.appendChild(disCard);



 const id = document.getElementById(`${dis.id}`);
 id.addEventListener('click', ()=>{
    const container = document.getElementById('add-list');
    const item = document.createElement('div');
    item.innerHTML= `${dis.title}`
    container.appendChild(item);
 })




    })

}





const displayPosts = posts =>{
    const postContainer = document.getElementById('latest-posts');

    posts.forEach(posts=>{
        const postCard = document.createElement('div');
        postCard.classList = `card bg-base-100 border-gray-200 border w-96 container mx-auto`;
        postCard.innerHTML = `  <figure class="px-10 pt-10">
    <img
      src="${posts.cover_image}"
      alt="Posts"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-left">
    <h2 class="card-title">${posts.title}</h2>
    <p>${posts.description}</p>
      <h1 class="text-sm text-grey-400">${posts.author.posted_date}</h1>
  </div>

  <div class="flex gap-4">
  <div>
  <img src="${posts.profile_image}" class="w-11 rounded-full">
  </div>
  <div>
  <h1 class="text-black font-bold text-md">${posts.author.name}</h1>
  <h3 class="text-grey-400 text-sm">${posts.author.designation}</h3>`

        postContainer.appendChild(postCard);
    })

}




latestPosts();
latestDiscussion();