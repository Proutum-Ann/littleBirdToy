const products = [
    {
        name: 'Wooden Airplane',
        alt: 'plane',
        price: '',
        age: 'Toddlers',
        description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller.',
        dimensions: {
            height: 3.5,
            width: 7,
            length: 7,
            fullMeasurement: function() {
                return this.height + '"' + 'x' + this.width + '"' + 'x' + this.length + '"'
            }
        },
        options: {
            option1: 'green',
            option2: 'green'
        },
        reviews: {
            review1: {
                username: '',
                rating: '',
                review: ''
            },
        },
        mainImg: 'imgs/plane1.jpg',
        mainImg2: 'imgs/plane2default.jpg',
        opt1Img1: 'imgs/greenPlane1.jpg',
        opt1Img2: 'imgs/greenPlane2.jpg',
        opt2Img1: 'imgs/purplePlane1.jpg',
        opt2Img2: 'imgs/purplePlane2.jpg',

    },
    {
        name: 'Wooden Train Set',
        alt: 'train',
        price: '',
        age: '3+',
        description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size with moving wheels and a fully ecological design.',
        dimensions: {
            height: 11,
            width: 13,
            length: 84,
            fullMeasurement: function() {
                return this.height + 'cm' + ' ' + 'x' + this.width + 'cm' + ' ' + 'x' + this.length + 'cm'
            }
        },
        options: {
            option1: 'blue',
            option2: 'pink'
        },
        reviews: {
            review1: {
                username: '',
                rating: '',
                review: ''
            },
        },
        mainImg: 'imgs/train1.jpg',
        mainImg2: 'imgs/train3.jpg',
        opt1Img1: 'imgs/train1blue.png',
        opt1Img2: 'imgs/train2blue.png',
        opt2Img1: 'imgs/train1pink.png',
        opt2Img2: 'imgs/train2pink.png',
    },
    {
        name: 'Wooden Boat',
        alt: 'boat',
        price: '',
        age: 'All Ages',
        description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people."',
        dimensions: {
            height: 3.5,
            width: 10.5,
            fullMeasurement: function() {
                return this.height + '"' + 'x' + this.width + '"'
            }
        },
        options: {
            option1: 'blue',
            option2: 'orange'
        },
        reviews: {
            review1: {
                username: 'imThebest',
                rating: '⯪☆☆☆☆',
                review: 'I WOULD GIVE THIS A 0, BUT I CAN ONLY GIVE A 0.5. WORST THING I\'VE EVER ORDERED! I COULDN\'T GET THE COLOR I WANT BECAUSE IT WAS OUT OF STOCK!!!!!'
            },
            review2: {
                username: 'boat',
                rating: '★★★★☆',
                review: 'i like boat. only docked points because it had lobster people'
            },
        },
        mainImg: 'imgs/boat1.jpg',
        mainImg2: 'imgs/boat2.jpg',
        opt1Img1: 'imgs/boat2orange.png',
        opt1Img2: 'imgs/boat2orange.png',
        opt2Img1: 'imgs/boat1blue.png',
        opt2Img2: 'imgs/boat2blue.png',
    },
    {
        name: 'Wooden Block Set',
        alt: 'block',
        price: '',
        age: '3+',
        description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate',
        dimensions: {
            height: 2,
            width: 12,
            length: 13,
            fullMeasurement: function() {
                return this.height + '"' + 'x' + this.width + '"' + 'x' + this.length + '"'
            }
        },
        options: {
            option1: 'purple',
            option2: 'green'
        },
        reviews: {
            review1: {
                username: '',
                rating: '',
                review: ''
            },
        },
        mainImg: 'imgs/block1default.jpg',
        mainImg2: 'imgs/block2default.jpg',
        opt1Img1: 'imgs/block1purple.png',
        opt1Img2: 'imgs/block2 purple.png',
        opt2Img1: 'imgs/block1green.png',
        opt2Img2: 'imgs/block2green.png',
    },
    {
        name: 'Wooden Car',
        alt: 'car',
        price: '',
        age: 'All Ages',
        description: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.',
        dimensions: {
            height: '',
            width: '',
            length: '',
            fullMeasurement: function() {
                return this.height + '"' + 'x' + this.width + '"' + 'x' + this.length + '"'
            }
        },
        options: {
            option1: 'blue',
            option2: 'pink'
        },
        reviews: {
            review1: {
                username: '',
                rating: '',
                review: ''
            },
        },
        mainImg: 'imgs/car1.jpg',
        mainImg2: 'imgs/car4.jpg',
        opt1Img1: 'imgs/car1blue.png',
        opt1Img2: 'imgs/car4blue.png',
        opt2Img1: 'imgs/car1pink.png',
        opt2Img2: 'imgs/car4pink.png',
    },
    {
        name: 'Wooden Posable Robot',
        alt: 'robot',
        price: '',
        age: '3+',
        description: 'text blah blah blah',
        dimensions: {
            height: '12',
            width: '3.5',
            length: '4',
            fullMeasurement: function() {
                return this.height + '"' + 'x' + this.width + '"' + 'x' + this.length + '"'
            }
        },
        options: {
            option1: 'black',
            option2: 'gray'
        },
        reviews: {
            review1: {
                username: 'robot_L0vr',
                rating: '★★★★★',
                review: 'I love collecting robots and my sister gave this to me as a gift. I love how high the quality is and I use it as my stress toy. The price is right too. I recommend everyone to buy one.'
            },
        },
        mainImg: 'imgs/robot1.jpg',
        mainImg2: 'imgs/robot2.jpg',
        opt1Img1: 'imgs/robotBlack1.jpg',
        opt1Img2: 'imgs/robotBlack2.jpg',
        opt2Img1: 'imgs/robotGrey1.jpg',
        opt2Img2: 'imgs/robotGrey2.jpg',
    },
]

/* ★⯪☆ */