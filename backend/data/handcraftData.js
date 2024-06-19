const handcraftData = [
    {
        "name": "Handmade Ceramic Vase",
        "img_url": "https://images.unsplash.com/photo-1608111115633-872fa895d40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGFuZG1hZGUlMjBDZXJhbWljJTIwVmFzZXxlbnwwfDB8MHx8fDI%3D",
        "price": 45.00,
        "description": "A beautiful handmade ceramic vase with intricate patterns.",
        "count_in_stock": 15,
        "review": 4.8
    },
    {
        "name": "Knitted Wool Scarf",
        "img_url": "https://images.unsplash.com/photo-1644611421699-797bba5fe2d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S25pdHRlZCUyMFdvb2wlMjBTY2FyZnxlbnwwfDB8MHx8fDI%3D",
        "price": 30.00,
        "description": "Cozy and warm knitted wool scarf, perfect for winter.",
        "count_in_stock": 25,
        "review": 4.7
    },
    {
        "name": "Handwoven Basket",
        "img_url": "https://images.unsplash.com/photo-1455669175216-9017c9b02fc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGFuZHdvdmVuJTIwQmFza2V0fGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 25.00,
        "description": "A sturdy handwoven basket made from natural fibers.",
        "count_in_stock": 20,
        "review": 4.6
    },
    {
        "name": "Wooden Jewelry Box",
        "img_url": "https://images.unsplash.com/photo-1511314766704-a02a2356d128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29vZGVuJTIwSmV3ZWxyeSUyMEJveHxlbnwwfDB8MHx8fDI%3D",
        "price": 50.00,
        "description": "Elegant wooden jewelry box with intricate carvings.",
        "count_in_stock": 10,
        "review": 4.9
    },
    {
        "name": "Hand-painted Canvas",
        "img_url": "https://images.unsplash.com/photo-1523031841859-759f71cc5d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFuZCUyMHBhaW50ZWQlMjBDYW52YXN8ZW58MHwwfDB8fHwy",
        "price": 75.00,
        "description": "Original hand-painted canvas with vibrant colors.",
        "count_in_stock": 8,
        "review": 4.7
    },
    {
        "name": "Macrame Wall Hanging",
        "img_url": "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFjcmFtZSUyMFdhbGwlMjBIYW5naW5nfGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 40.00,
        "description": "Bohemian-style macrame wall hanging made with cotton cord.",
        "count_in_stock": 18,
        "review": 4.5
    },
    {
        "name": "Handcrafted Leather Wallet",
        "img_url": "https://images.unsplash.com/photo-1515034102019-de699b0b7160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGFuZGNyYWZ0ZWQlMjBMZWF0aGVyJTIwV2FsbGV0fGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 55.00,
        "description": "Durable handcrafted leather wallet with multiple compartments.",
        "count_in_stock": 22,
        "review": 4.7
    },
    {
        "name": "Glass Beaded Necklace",
        "img_url": "https://myitaliandecor.com/cdn/shop/files/diva-murano-glass-beaded-necklace-grass_2048x.jpg?v=1685142077",
        "price": 45.00,
        "description": "Elegant glass beaded necklace with a unique design.",
        "count_in_stock": 16,
        "review": 4.7
    },
    {
        "name": "Handcrafted Soap Set",
        "img_url": "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGFuZGNyYWZ0ZWQlMjBTb2FwJTIwU2V0fGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 25.00,
        "description": "Set of handcrafted soaps made with natural ingredients.",
        "count_in_stock": 25,
        "review": 4.9
    },
    {
        "name": "Hand-embroidered Cushion Cover",
        "img_url": "https://www.culturekraft.in/cdn/shop/products/image00259.jpg?v=1681061981&width=1500",
        "price": 30.00,
        "description": "Beautiful hand-embroidered cushion cover with floral designs.",
        "count_in_stock": 20,
        "review": 4.8
    },
    {
        "name": "Clay Coffee Mug",
        "img_url": "https://images.unsplash.com/photo-1472517990513-4f22ae253bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xheSUyMENvZmZlZSUyME11Z3xlbnwwfDB8MHx8fDI%3D",
        "price": 15.00,
        "description": "Handmade clay coffee mug with a rustic finish.",
        "count_in_stock": 35,
        "review": 4.5
    },
    {
        "name": "Hand-dyed Silk Scarf",
        "img_url": "https://images.squarespace-cdn.com/content/v1/60312e04eb8dea0750b34db0/1615067147880-7G5TE3L1LDL436XNGL2P/Hand-Dyed+Silk+Scarves.jpeg?format=1500w",
        "price": 60.00,
        "description": "Luxurious hand-dyed silk scarf with vibrant colors.",
        "count_in_stock": 12,
        "review": 4.9
    },
    {
        "name": "Hand-knitted Baby Booties",
        "img_url": "https://i.pinimg.com/originals/81/9c/70/819c70910fa737a494ecb3c0b5e4a851.jpg",
        "price": 20.00,
        "description": "Cute and soft hand-knitted baby booties.",
        "count_in_stock": 15,
        "review": 4.7
    },
    {
        "name": "Handcrafted Wooden Puzzle",
        "img_url": "https://images1.novica.net/pictures/9/p292531_2_400.jpg",
        "price": 35.00,
        "description": "Challenging handcrafted wooden puzzle for all ages.",
        "count_in_stock": 25,
        "review": 4.6
    },
    {
        "name": "Hand-painted Ceramic Plate",
        "img_url": "https://exclusivelane.com/cdn/shop/products/el-005-464_a.jpg?v=1570516055",
        "price": 40.00,
        "description": "Colorful hand-painted ceramic plate with intricate designs.",
        "count_in_stock": 18,
        "review": 4.8
    },
    {
        "name": "Handwoven Silk Shawl",
        "img_url": "https://i0.wp.com/tasteofbhutan.com/wp-content/uploads/2022/09/Handspun-Handwoven-Silk-Scarf-2-scaled.jpg?fit=1200%2C1200&ssl=1",
        "price": 80.00,
        "description": "Elegant handwoven silk shawl with a luxurious feel.",
        "count_in_stock": 10,
        "review": 4.9
    }
]

export default handcraftData;