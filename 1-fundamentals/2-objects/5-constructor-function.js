function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let blogPost = new BlogPost('a', 'b', 'c');
console.log(blogPost);

blogPost.views++;
blogPost.comments.push(
    {
        body: 'd',
        author: 'e'
    }
);
blogPost.isLive = true;

console.log(blogPost);