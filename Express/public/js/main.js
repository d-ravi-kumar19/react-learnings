const output = document.querySelector("#output")
const botton = document.querySelector('#get-posts-btn')
const form = document.querySelector('#add-post-form')

async function showPosts(){
    try {
        const res = await fetch('http://localhost:9000/api/posts/')
        if(!res.ok){
            throw new Error("Failed to fetch posts")
        }
        const posts = await res.json()
        output.innerHTML = "";
    
        posts.forEach((post) => {
            const postEl = document.createElement('div')
            postEl.textContent = post.title;
            output.appendChild(postEl);
        });
    } catch (error) {
        console.log('Error fetching posts:', error)
    }

}

async function addPost(e){
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res = await fetch('http://localhost:9000/api/posts/',{
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title}) 
        })
        
        if(!res.ok){
            throw new Error('Failed to add Post')
        }

        const newPost = await res.json();
        postEl.textContent = newPost.title;
        output.appendChild(postEl)
        showPosts();
    } catch (error) {
        console.log('Error adding:',error)
    }


}


// event listeners
botton.addEventListener('click',showPosts)
form.addEventListener('submit',addPost)