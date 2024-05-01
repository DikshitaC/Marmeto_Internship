document.addEventListener('DOMContentLoaded', function() {
    const colorBoxInputs = document.querySelectorAll('.color-box-input');
    colorBoxInputs.forEach(function(input) {
        input.addEventListener('change', function(event) {
            const colorBoxes = document.querySelectorAll('.color-box');
            colorBoxes.forEach(function(box) {
                box.classList.remove('selected');
            });
            if (this.checked) {
                this.parentElement.querySelector('.color-box').classList.add('selected');
            }
        });
    });

    const sizeInputs = document.querySelectorAll('.size-label input');
    sizeInputs.forEach(function(input) {
        input.addEventListener('change', function(event) {
            enableAddToCart(); 
        });
    });
});

let quantity = 1;

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').innerText = quantity;
}

function decreaseQuantity() {
    if(quantity > 1) {
        quantity--;
        document.getElementById('quantity').innerText = quantity;
    }
}

function changeImage(imageSrc) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
    
    var smallImages = document.querySelectorAll('.small-image');
    smallImages.forEach(function(image) {
        image.classList.remove('active');
    });
    
    event.target.classList.add('active');
}

function getColorName(color) {
    switch (color) {
        case 'rgb(226, 191, 183)':
            return 'Light Pink';
        case 'rgb(183, 255, 196)':
            return 'Green';
        case 'rgb(240, 237, 141)':
            return 'Yellow';
        case 'rgb(243, 121, 202)':
            return 'Dark Pink';
        default:
            return '';
    }
}

function enableAddToCart() {
    const addToCartButton = document.querySelector('.add-to-cart-button');
    addToCartButton.disabled = false; 
}

function addToCart() {
   
    const existingMessageBox = document.querySelector('.message-box');
    if (existingMessageBox) {
        existingMessageBox.remove();
    }

    
    const selectedSizes = document.querySelectorAll('.size-label input:checked');
    if (selectedSizes.length === 0) {
        alert("Please select a size before adding to cart.");
        return;
    }

    
    let selectedSize = "";
    selectedSizes.forEach(function(size) {
        selectedSize += size.parentElement.textContent.trim() + ", ";
    });
    selectedSize = selectedSize.slice(0, -2); 

    
    const selectedColorBox = document.querySelector('.color-box.selected');
    const selectedColor = selectedColorBox.style.backgroundColor;
    const selectedColorName = getColorName(selectedColor);

    
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = `Embrace Sideboard with ${selectedColorName} color and ${selectedSize} size added to cart`;
    messageBox.style.marginTop = '10px';
    messageBox.style.padding = '10px';
    messageBox.style.backgroundColor = selectedColor;
    messageBox.style.color = 'black';
    messageBox.style.borderRadius = '8px';
    messageBox.style.fontSize = '14px';

    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.insertAdjacentElement('afterend', messageBox);
}
