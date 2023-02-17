var openPanelButton = document.getElementById('open-panel');
var sidePanel = document.getElementById('side-panel');

openPanelButton.addEventListener('click', function () {
    sidePanel.classList.toggle('open');
});
