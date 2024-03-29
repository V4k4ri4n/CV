   // Sélectionnez l'élément draggable
    var draggableDiv = document.getElementById('fentest');



    // Fonction pour démarrer le déplacement
    function startDrag(e) {
        isDragging = true;
        initialX = e.clientX - offsetX;
        initialY = e.clientY - offsetY;
    }

    // Fonction pour déplacer la div en fonction du mouvement de la souris
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            offsetX = e.clientX - initialX;
            offsetY = e.clientY - initialY;
            draggableDiv.style.left = offsetX + 'px';
            draggableDiv.style.top = offsetY + 'px';
        }
    }

    // Fonction pour arrêter le déplacement
    function stopDrag() {
        isDragging = false;
    }

    // Ajoutez des écouteurs d'événements pour démarrer, déplacer et arrêter le déplacement
    draggableDiv.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);