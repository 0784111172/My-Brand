document.getElementById("go-back-button").addEventListener("click", function () {
    window.history.back();
});

// const goBackButton = document.getElementById('go-back-button');
// goBackButton.addEventListener('click', () => {
//     // Code to create a blog goes here
//     console.log('Create blog button clicked');
// });

// Get the buttons
const createBlogButton = document.getElementById('create-blog-button');
const updateBlogButton = document.getElementById('update-blog-button');
const readBlogButton = document.getElementById('read-blog-button');
const deleteBlogButton = document.getElementById('delete-blog-button');

// Add click event listeners to the buttons
createBlogButton.addEventListener('click', () => {
    // Code to create a blog goes here
    console.log('Create blog button clicked');
});

updateBlogButton.addEventListener('click', () => {
    // Code to update a blog goes here
    console.log('Update blog button clicked');
});

readBlogButton.addEventListener('click', () => {
    // Code to read a blog goes here
    console.log('Read blog button clicked');
});

deleteBlogButton.addEventListener('click', () => {
    // Code to delete a blog goes here
    console.log('Delete blog button clicked');
});



