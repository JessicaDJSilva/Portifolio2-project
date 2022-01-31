document.addEventListener('DOMContentLoaded', () => {
    // array for the images 
    const ImagesArray = [{
            name: 'Penny',
            img: 'images/ Penny.jpg'

        },

        {
            name: 'Penny',
            img: 'images / Penny.jpg'

        },


        {
            name: 'Leonard',
            img: 'images / Leonard.jpg'

        },


        {
            name: 'Leonard',
            img: 'images / Leonard.jpg'

        },

        {
            name: 'sheldon',
            img: 'images / sheldon.jpg'
        },

        {
            name: 'sheldon',
            img: 'images / sheldon.jpg'
        },


        {
            name: 'Raj',
            img: 'images / raj.jpg'
        },


        {
            name: 'Raj',
            img: 'images / raj.jpg'
        },

        {
            name: 'howard',
            img: 'images / howard.jpg'
        },

        {
            name: 'howard',
            img: 'images / howard.jpg'
        }

    ]

    // funtion to make the cards sort random

    ImagesArray.sort(() => 0.15 - Math.random())

    //  game-area elemet use as constante for create bord game 

    const gameArea = document.querySelector('#game-area')

    let ImageSelected = []
    let ImageSelectID = []
    let ImageWin = []

    function CreateGameArea() {

        for (let i = 0; i < ImagesArray.length; i++) {
            const cardback = document.createElement('img')
            cardback.setAttribute('src', 'images/back.jpg')
            cardback.setAttribute('data-id', i)
            cardback.addEventListener('click', turnBack)
           
        }
    }
    // check if the images match.

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const selectOneId = ImageSelectID[0]
        const selectTwoId = ImageSelectID[1]

        if (selectOneId == selectTwoId) {
            cards[selectOneId].setAttribute('src', 'images/back.jpg')
            cards[selectTwoId].setAttribute('src', 'images/back.jpg')
        } else if (ImageSelectID[0] === ImageSelectID[1]) {
            cards[selectOneId].setAttribute('src', 'images/logo.png')
            cards[selectTwoId].setAttribute('src', 'images/logo.png')
            cards[selectOneId].removeEventListener('click', 'turnBack')
            cards[selectTwoId].removeEventListener('click', 'turnBack')
            ImageWin.push(ImageSelected)
            alert('Well Done You Found A Match')
        } else {
            cards[selectOneId].setAttribute('src', 'images/back.jpg')
            cards[selectTwoId].setAttribute('src', 'images/back.jpg')
            alert('Buzinga! Try again.')
        }

        // Check if the user found all cards 

        if (ImageWin.length === ImagesArray.length / 2) {
            alert('AWSOME YOU FOUND THE WHOLE GANG')
        }
    }



    // Function to turn the cards back if don't match

    function turnBack() {
        let imgid = this.getAttribute('data-id')
        ImageSelected.push(ImagesArray[imgid].name)
        ImageSelectedID.push([imgid])
        this.setAttribute('src', ImagesArray[imgid].img)
        if (ImageSelected.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }

// call function of game area 

CreateGameArea()










})