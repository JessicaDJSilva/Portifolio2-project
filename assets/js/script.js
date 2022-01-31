

let container = document.getElementById('game-area');

let elements = container.children

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.sort(() => 0.5 - Math.random());
console.log(nums);
nums.forEach(num => container.appendChild


    (elements[num]));

const background = 'assets/images/back.jpg';
const images = ['assets/images/howard.jpg', 'assets/images/howard.jpg', 'assets/images/Leonard.jpg','assets/images/Leonard.jpg', 'assets/images/Penny.jpg', 'assets/images/Penny.jpg', 'assets/images/raj.jpg', 'assets/images/raj.jpg', 'assets/images/sheldon.jpg', 'assets/images/sheldon.jpg'];

let selectedImage = null;
let awaiting = false;
let win = 0;

function showAll() {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums.forEach(num => document.getElementById(num).src = images[num]);
}

async function imageClick(image) {

    if (awaiting) {
        return;
    }

    image.src = images[image.id];

    if (selectedImage) {
        if ((selectedImage.id % 2 == 0 && image.id == Number(selectedImage.id) + 1) ||
            (selectedImage.id % 2 == 1 && image.id == Number(selectedImage.id) - 1)) {
            setStatic(image);
            setStatic(selectedImage);
            win += 1;
            await new Promise(r => setTimeout(r, 200));
            if (win == 5) {
                alert("WELL DONE YOU FOUND THE GANG!");
            }
        } else {
            awaiting = true;
            await new Promise(r => setTimeout(r, 2000));
            awaiting = false;
            image.src = background;
            selectedImage.src = background;
        }

        selectedImage = null;
    } else {
        selectedImage = image;
    }
}




function setStatic(image) {
    image.onclick = '';
}