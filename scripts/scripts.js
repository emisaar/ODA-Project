document.addEventListener('DOMContentLoaded', function () {
    var content = document.querySelector('.content');
    var contentText = document.getElementById('contentText');

    function toggleText() {
        content.classList.remove('show', 'fade-out-in');
        setTimeout(function () {
            content.classList.add('fade-out-in');
            setTimeout(function () {
                if (contentText.textContent === "Always Helping") {
                    contentText.textContent = "Siempre Ayudando";
                } else {
                    contentText.textContent = "Always Helping";
                }
                content.classList.remove('fade-out-in');
                content.classList.add('fade-in-out', 'show');
            }, 2000);
        }, 2000);
    }

    // Mostrar el texto inicial después de 2 segundos
    setTimeout(function () {
        content.classList.add('fade-in-out', 'show');
    }, 2000);

    // Cambiar el texto cada 4 segundos
    setInterval(toggleText, 4000);
});
