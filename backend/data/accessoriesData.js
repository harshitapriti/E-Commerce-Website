const accessoriesData = [
    {
        "name": "Leather Belt",
        "img_url": "https://images.unsplash.com/photo-1591117105338-4eb266b13c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMEJlbHR8ZW58MHwwfDB8fHwy",
        "price": 25.00,
        "description": "High-quality leather belt with a classic buckle.",
        "count_in_stock": 30,
        "review": 4.6
    },
    {
        "name": "Sunglasses",
        "img_url": "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VuZ2xhc3Nlc3xlbnwwfDB8MHx8fDI%3D",
        "price": 40.00,
        "description": "Stylish sunglasses with UV protection.",
        "count_in_stock": 50,
        "review": 4.7
    },
    {
        "name": "Wristwatch",
        "img_url": "https://images.unsplash.com/photo-1595923533867-ff8a01335ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V3Jpc3R3YXRjaHxlbnwwfDB8MHx8fDI%3D",
        "price": 150.00,
        "description": "Elegant wristwatch with a leather strap.",
        "count_in_stock": 20,
        "review": 4.8
    },
    {
        "name": "Silk Tie",
        "img_url": "https://images.unsplash.com/photo-1591729652476-e7f587578d9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2lsayUyMFRpZXxlbnwwfDB8MHx8fDI%3D",
        "price": 35.00,
        "description": "Luxurious silk tie perfect for formal occasions.",
        "count_in_stock": 25,
        "review": 4.6
    },
    {
        "name": "Wallet",
        "img_url": "https://images.unsplash.com/photo-1579014134953-1580d7f123f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2FsbGV0fGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 45.00,
        "description": "Compact leather wallet with multiple compartments.",
        "count_in_stock": 40,
        "review": 4.7
    },
    {
        "name": "Handbag",
        "img_url": "https://images.unsplash.com/photo-1559563458-527698bf5295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFuZGJhZ3xlbnwwfDB8MHx8fDI%3D",
        "price": 120.00,
        "description": "Stylish handbag made from premium materials.",
        "count_in_stock": 15,
        "review": 4.8
    },
    {
        "name": "Baseball Cap",
        "img_url": "https://images.unsplash.com/photo-1611767234483-0628455b04a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFzZWJhbGwlMjBjYXB8ZW58MHwwfDB8fHwy",
        "price": 20.00,
        "description": "Casual baseball cap with adjustable strap.",
        "count_in_stock": 60,
        "review": 4.5
    },
    {
        "name": "Earrings",
        "img_url": "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWFycmluZ3N8ZW58MHwwfDB8fHwy",
        "price": 50.00,
        "description": "Elegant earrings made from sterling silver.",
        "count_in_stock": 30,
        "review": 4.9
    },
    {
        "name": "Necklace",
        "img_url": "https://images.unsplash.com/photo-1588444968576-f8fe92ce56fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmVja2xhY2V8ZW58MHwwfDB8fHwy",
        "price": 70.00,
        "description": "Beautiful necklace with a pendant.",
        "count_in_stock": 25,
        "review": 4.8
    },
    {
        "name": "Bracelet",
        "img_url": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJhY2VsZXR8ZW58MHwwfDB8fHwy",
        "price": 55.00,
        "description": "Stylish bracelet made from natural stones.",
        "count_in_stock": 35,
        "review": 4.7
    },
    {
        "name": "Keychain",
        "img_url": "https://images.unsplash.com/photo-1626119018751-5aa9754bcfc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8S2V5Y2hhaW58ZW58MHwwfDB8fHwy",
        "price": 15.00,
        "description": "Durable keychain with a stylish design.",
        "count_in_stock": 50,
        "review": 4.6
    },
    {
        "name": "Ring",
        "img_url": "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJpbmd8ZW58MHwwfDB8fHwy",
        "price": 80.00,
        "description": "Beautiful ring made from gold and diamonds.",
        "count_in_stock": 15,
        "review": 4.9
    },
    {
        "name": "Belt Buckle",
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_Ww8tJIOXSmSVHweDgMvP5TpTCK1ktcJ4A&s",
        "price": 20.00,
        "description": "Stylish belt buckle with intricate designs.",
        "count_in_stock": 30,
        "review": 4.6
    },
    {
        "name": "Beanie",
        "img_url": "https://images.unsplash.com/photo-1612887726773-e64e20cf08fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhbmllfGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 18.00,
        "description": "Warm beanie made from soft wool.",
        "count_in_stock": 40,
        "review": 4.7
    },
    {
        "name": "Gloves",
        "img_url": "https://images.unsplash.com/photo-1549396555-3d107fd70c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2xvdmVzfGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 25.00,
        "description": "Comfortable gloves made from premium leather.",
        "count_in_stock": 30,
        "review": 4.8
    },
    {
        "name": "Brooch",
        "img_url": "https://images.unsplash.com/photo-1640958905726-5a6b7128e20e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJyb29jaHxlbnwwfDB8MHx8fDI%3D",
        "price": 35.00,
        "description": "Elegant brooch with a vintage design.",
        "count_in_stock": 20,
        "review": 4.7
    }
]

export default accessoriesData;