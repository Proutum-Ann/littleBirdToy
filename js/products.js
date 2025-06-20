const products = [
    {
        name: 'Wooden Airplane',
        alt: 'plane',
        price: '15.55',
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
            option1: 'Green',
            option2: 'Purple'
        },
        reviews: {
            review1: {
                username: 'John P.',
                rating: '★★★★★',
                review: 'As a parent who values both quality and sustainability, I was thrilled to find the Handcrafted Wooden Airplane Toy. Upon receiving it, I was immediately impressed by its craftsmanship. The smooth finish and sturdy construction made it clear that this was no ordinary toy.'
            },
            review2: {
                username: 'Trella T.',
                rating: '★★★★★',
                review: 'My 3-year-old son was captivated from the moment he laid eyes on it. The movable propeller and spinning wheels added an interactive element that kept him engaged for hours. It\'s evident that this toy not only entertains but also fosters imaginative play and fine motor skills.'
            },
            review3: {
                username: 'icomplainalot',
                rating: '★☆☆☆☆',
                review: 'I don\'t like it, 1/5.'
            },
        },
        mainImg: 'imgs/plane1.jpg',
        mainImg2: 'imgs/plane2default.jpg',
        opt1Img1: 'imgs/greenPlane1.jpg',
        opt1Img2: 'imgs/greenPlane2.jpg',
        opt2Img1: 'imgs/purplePlane1.jpg',
        opt2Img2: 'imgs/purplePlane2.jpg',
        // button decor
        color: '#879947',
        border: 'green',
        color2: '#5b3d4b',
        border2: '#26151D',
    },
    {
        name: 'Wooden Train Set',
        alt: 'train',
        price: '20.99',
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
            option1: 'Blue',
            option2: 'Pink'
        },
        reviews: {
            review1: {
                username: 'Amanda',
                rating: '★★⯪☆☆',
                review: 'My son absolutely loves trains, and this most certainly gave him the time of his life! However, I would\'ve appreciated if this set came with tracks, since it\'s too large to fit on my son\'s other train tracks.'
            },
            review2: {
                username: 'swear-word',
                rating: '★★★⯪☆',
                review: 'i like trains. jk, i don\'t, but it\'s enough to keep my cat entertained for a while.'
            },
            review3: {
                username: 'Jane P.',
                rating: '★★★★★',
                review: 'I gave this to my nephew for his birthday and he loved it. It was his favorite  gift tat he got. I really lke the quality of this toy. I would buy it again for another kid who loves trains. '
            },
        },
        mainImg: 'imgs/train1.jpg',
        mainImg2: 'imgs/train3.jpg',
        opt1Img1: 'imgs/train1blue.png',
        opt1Img2: 'imgs/train2blue.png',
        opt2Img1: 'imgs/train1pink.png',
        opt2Img2: 'imgs/train2pink.png',
        // button decor
        color: '#2AB2CA',
        border: '#01849a',
        color2: '#df66b3',
        border2: '#b9239f',
    },
    {
        name: 'Wooden Boat',
        alt: 'boat',
        price: '9.68',
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
            option1: 'Orange',
            option2: 'Blue'
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
            review3: {
                username: 'Paul Hanson',
                rating: '★★★★★',
                review: 'Really well-made! My kids loved it and are always playing pirate with it!'
            }
        },
        mainImg: 'imgs/boat2.jpg',
        mainImg2: 'imgs/boat2.jpg',
        opt1Img1: 'imgs/boat2orange.png',
        opt1Img2: 'imgs/boat2orange.png',
        opt2Img1: 'imgs/boat1blue.png',
        opt2Img2: 'imgs/boat2blue.png',
        // button decor
        color: '#d68e5f',
        border: '#c9542e',
        color2: '#72b6c8',
        border2: '#0294a1',
    },
    {
        name: 'Wooden Block Set',
        alt: 'block',
        price: '15.50',
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
            option1: 'Purple',
            option2: 'Green'
        },
        reviews: {
            review1: {
                username: 'Jennifer Jalapenoes',
                rating: '★★★★★',
                review: 'Kept my child occupied for hours! She loves building structures with these, and she says she wants to be an architect someday!'
            },
            review2: {
                username: 'BobtheBuilder',
                rating: '⯪☆☆☆☆',
                review: `WERE THESE BLOCKS SOLD ON WATER OR SOMETHING????? THERE WAS MOLD ON MY BLOCKS AND NOW I CAN'T BUILD ANYTHING WITH IT. WASTE OF MONEY`
            },
            review3: {
                username: 'Custard Cookie III',
                rating: '★★★★☆',
                review: 'These blocks are perfect for building my own castle so it could look like Pure Vanilla\'s castle. However, I wish there were more colors than the two that were listed because it\'s very boring without other colors.'
            },
        },
        mainImg: 'imgs/block1default.jpg',
        mainImg2: 'imgs/block2default.jpg',
        opt1Img1: 'imgs/block1purple.png',
        opt1Img2: 'imgs/block2 purple.png',
        opt2Img1: 'imgs/block1green.png',
        opt2Img2: 'imgs/block2green.png',
        // button decor
        color: '#948ed7',
        border: '#2b1b4f',
        color2: '#8fa79c',
        border2: '#50584b',
    },
    {
        name: 'Wooden Car',
        alt: 'car',
        price: '10.99',
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
            option1: 'Blue',
            option2: 'Pink'
        },
        reviews: {
            review1: {
                username: 'Kepling Kelp',
                rating: '★★☆☆☆',
                review: 'tsfyuagilfewhriuowe fwe fedsfid danss snio'
            },
            review2: {
                username: 'montrellapatricia1000',
                rating: '★★★★★',
                review: 'This car was a lifesaver! I was looking for a gift for my cousin, but wasn\'t able to find any, but this car was just what I needed! He liked the gift a lot and frequently plays with it with his kids'
            },
            review3: {
                username: 'mickey.wifey',
                rating: '★★★★☆',
                review: 'This car is perfect for my husband who loves collecting cars. However, I wish there were more colors because two options are not enough for him.'
            },
        },
        mainImg: 'imgs/car1.jpg',
        mainImg2: 'imgs/car4.jpg',
        opt1Img1: 'imgs/car1blue.png',
        opt1Img2: 'imgs/car4blue.png',
        opt2Img1: 'imgs/car1pink.png',
        opt2Img2: 'imgs/car4pink.png',
        // button decor
        color: '#738bf8',
        border: '#101a48',
        color2: '#e361c8',
        border2: '#4a073c',
    },
    {
        name: 'Wooden Posable Robot',
        alt: 'robot',
        price: '19.99',
        age: '3+',
        description: 'This heirloom-quality wooden robot is a timeless companion for curious minds. Handcrafted from durable hardwoods with elastic joints, this posable figure can twist, bend, sit, and strike playful poses. Designed to spark creativity and storytelling, it’s a charming keepsake for both play and display. Please note potential choking hazards for small children.',
        dimensions: {
            height: '12',
            width: '3.5',
            length: '4',
            fullMeasurement: function() {
                return this.height + '"' + 'x' + this.width + '"' + 'x' + this.length + '"'
            }
        },
        options: {
            option1: 'Black',
            option2: 'Gray'
        },
        reviews: {
            review1: {
                username: 'robot_L0vr',
                rating: '★★★★★',
                review: 'I love collecting robots and my sister gave this to me as a gift. I love how high the quality is and I use it as my stress toy. The price is right too. I recommend everyone to buy one.'
            },
            review2: {
                username: 'Tung T.',
                rating: '★★★★☆',
                review: 'Junior absolutely loves this thing! He\'s practically drooling all over it (which I do find it concerning but I digress)! Really love the posability of the robot, but can be stiff when it\'s first opened'
            },
            review3: {
                username: 'Falstaff',
                rating: '★★★☆☆',
                review: 'As a parent I really like how sturdy this product is! Although I would say to keep away from children who are still putting items in their mouths.'
            },
        },
        mainImg: 'imgs/robot1.jpg',
        mainImg2: 'imgs/robot2.jpg',
        opt1Img1: 'imgs/robotBlack1.jpg',
        opt1Img2: 'imgs/robotBlack2.jpg',
        opt2Img1: 'imgs/robotGrey1.jpg',
        opt2Img2: 'imgs/robotGrey2.jpg',
        // button decor
        color: '#484848',
        border1: 'black',
        color2: '#848484',
        border2: 'black',
    },
]

/* ★⯪☆ */