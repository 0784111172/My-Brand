// Hide user panel when user clicks outside of it
document.addEventListener('click', function (event) {
    var userPanel = document.querySelector('.user-panel');
    if (userPanel.style.display === 'block' && !event.target.closest('.user-panel') && !event.target.closest('.user-icon')) {
        userPanel.style.display = 'none';
    }
});
