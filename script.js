let element = document.getElementById('hamburg');

element.onclick = function () {
    let hamMenu = document.getElementById('hamburger-menu');
    if (hamMenu.style.display === "block") {
        hamMenu.style.display = "none";
      } else {
        hamMenu.style.display = "block";
      }
};

