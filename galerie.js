
const container = document.getElementById("productsContainer");

const produits = [
    { img: "img/pc.webp", titre: "Ordinateur Portable", description: "PC portable haute performance pour professionnels", prix: 899.99 },
    { img: "img/nokia.webp", titre: "Smartphone", description: "Téléphone dernière génération avec appareil photo 800MP", prix: 699.99 },
    { img: "img/casque-audio-crabe.jpg", titre: "Casque Audio", description: "Casque sans fil avec réduction de bruit active", prix: 249.99 },
    { img: "img/tablette-de-choco.jpg", titre: "Tablette", description: "Tablette 10 pouces idéale pour la lecture et le streaming", prix: 399.99 },
    { img: "img/connected-watch.webp", titre: "Montre Connectée", description: "Montre intelligente avec suivi santé et notifications", prix: 299.99 },
    { img: "img/camera-gundam.webp", titre: "Appareil Photo Canon", description: "Appareil photo Optimus Gundam 666MP", prix: 1299.99 },
    { img: "img/bt.jpg", titre: "Enceinte Bluetooth", description: "Enceinte portable étanche avec son 360°", prix: 89.99 },
    { img: "img/GameWatchFire.jpg", titre: "Console de Jeux", description: "Console nouvelle génération avec SSD ultra-rapide", prix: 499.99 },
    { img: "img/clavier.webp", titre: "Clavier Mécanique", description: "Clavier gaming RGB avec switches mécaniques", prix: 129.99 }
];



function createCard(produit, index) {
    return `
        <div class="card">
            <div class="conteneur-img">
                <img src="${produit.img}" alt="${produit.titre}">
            </div>

            <div class="description">
                <h4>${produit.titre}</h4>
                <p>${produit.description}</p>
                <h5>${produit.prix.toFixed(2)} €</h5>
            </div>

            <div class="div-button">
                <button class="button1" data-index="${index}">Voir détails</button>
                <button class="button2" data-fav="${produit.titre}">♡</button>
            </div>
        </div>
    `;
}


function displayProducts() {
    container.innerHTML = produits
        .map((produit, index) => createCard(produit, index))
        .join("");

    // Boutons "Voir détails"
    const detailButtons = container.querySelectorAll(".button1");
    detailButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.dataset.index;
            openModal(produits[index]);
        });
    });

    // Boutons Favoris ♡
    const favButtons = container.querySelectorAll(".button2");
    favButtons.forEach(button => {
        button.addEventListener("click", () => {
            const produitNom = button.dataset.fav;
            showFavMessage(produitNom);
        });
    });
}

displayProducts();


const modal = document.getElementById("modal");
const overlay = document.getElementById("modal-overlay");

const modalImg = document.getElementById("modal-img");
const modalH4 = document.getElementById("modal-description-h4");
const modalP = document.getElementById("modal-description-p");
const modalH5 = document.getElementById("modal-description-h5");

const btnModalFermer = document.getElementById("modal-fermer");



function openModal(produit) {
    modalImg.src = produit.img;
    modalH4.textContent = produit.titre;
    modalP.textContent = produit.description;
    modalH5.textContent = produit.prix.toFixed(2) + " €";

    modal.style.display = "block";
    overlay.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

btnModalFermerX = document.getElementById("modal-fermer-x")

btnModalFermerX.addEventListener("click", closeModal);

btnModalFermer.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


function showFavMessage(produitNom) {
    const favorisMessage = document.getElementById("favoris-message");

    favorisMessage.textContent = `♡ ${produitNom} ajouté aux favoris !`;
    favorisMessage.classList.add("show");

    // Disparait après 3 secondes
    setTimeout(() => {
        favorisMessage.classList.remove("show");
    }, 3000);
}