document.getElementById('generate-button').addEventListener('click', function() {
  
    const selectedTeam = document.getElementById('team-select').value;
    const selectedDate = document.getElementById('date-input').value;
    const outputImageDiv = document.getElementById('imageFullScreen');
    const container = document.getElementById('container');

    // Pokud je vybrán konkrétní tým, zobrazíme obrázek místo vykreslení na canvas
    if (selectedTeam === "NějakýSpecifickýTým") {
        // Zobrazit obrázek místo canvas
        const img = new Image();
        img.src = 'img/obrazekNamistoCanvas.png';  // Sem dejte cestu k obrázku, který chcete zobrazit

        img.onload = function() {
            outputImageDiv.src = img.src;
            container.style.display = 'none';
            outputImageDiv.style.display = 'block';
        };
    } else {
        var img = new Image();
        img.src = 'img/akaTicket.png';

        img.onload = function() {
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");

            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
            ctx.font = "normal 36px 'Open Sans'";  
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.fillText(selectedTeam, 529, 368);
            ctx.font = "normal 31px 'Open Sans'";
            ctx.fillText(formatDate(selectedDate), 514, 416);

            container.style.display = 'none';
            outputImageDiv.src = canvas.toDataURL();
            outputImageDiv.style.display = 'block';
        };
    }
});

function formatDate(dateString) {
    const parts = dateString.split("-");
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
}
