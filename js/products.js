const products = [
    {
        name: 'Wooden Airplane',
        alt: 'plane',
        price: '',
        age: 'Toddlers',
        description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.',
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
        mainImg: 'imgs/plane1.jpg'
    },
    {
        name: 'Wooden Train Set',
        alt: 'train',
        price: '',
        age: '3+',
        description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.',
        dimensions: {
            height: 2,
            width: 12,
            length: 13,
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
        mainImg: 'imgs/train1.jpg'
    },
    {
        name: 'Wooden Boat',
        alt: 'boat',
        price: '',
        age: 'All Ages',
        description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.',
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
                username: '',
                rating: '',
                review: ''
            },
        },
        mainImg: 'imgs/boat1.jpg'
    },
    {
        name: 'Wooden Block Set',
        alt: 'block',
        price: '',
        age: '3+',
        description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H)',
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
        mainImg: 'imgs/block1.jpg'
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
        mainImg: 'imgs/car1.jpg'
    },
    {
        name: 'Wooden Posable Robot',
        alt: 'robot',
        price: '',
        age: '3+',
        description: 'text blah blah blah',
        dimensions: {
            height: '',
            width: '',
            length: '',
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
                username: '',
                rating: '',
                review: ''
            },
        },
        mainImg: 'imgs/robot1.jpg'
    },
]