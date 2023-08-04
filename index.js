const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feed = document.getElementById("post-container")

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        let currentItem = posts[i]
        feed.innerHTML += 
        `<div class="post">
            <div class="post-header">
                <div class="post-logo">
                    <img src="${currentItem.avatar}">
                </div>
                <div class="post-tlte">
                    <h3>${currentItem.name}</h3>
                    <span>${currentItem.location}</span>
                </div>
            </div>
            <div class="post-image">
                    <img src="${currentItem.post}" alt="">
                </div>
            <div class="post-info">
                    <div class="post-icons">
                        <img src="images/icon-heart.png" alt="">
                        <img src="images/icon-comment.png" alt="">
                        <img src="images/icon-dm.png" alt="">
                    </div>
                    <span class="likes">${currentItem.likes} likes</span>
                    <span class="comment"><span class="commenter">${currentItem.username}</span> ${currentItem.comment}</span>
                </div>
        </div>`
    }
}

renderPosts()
