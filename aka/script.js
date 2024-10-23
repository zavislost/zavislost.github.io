document.getElementById('generate-button').addEventListener('click', function() {
  
    const selectedTeam = document.getElementById('team-select').value;
    const selectedDate = document.getElementById('date-input').value;
    const outputImageDiv = document.getElementById('imageFullScreen');
    const container = document.getElementById('container');

    var img = new Image();
    img.src = 'img/akaTicket.png';

    img.onload = function() {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

        ctx.font = "bold 48px Arial";
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillText("Iced Coffee", 30, 220);

        container.style.display = 'none';
        outputImageDiv.src = canvas.toDataURL();
        outputImageDiv.style.display = 'block';
    };
});