const clothingData = [
    {
        "name": "T-shirt",
        "img_url": "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0c3xlbnwwfDB8MHx8fDI%3D",
        "price": 19.99,
        "description": "Comfortable cotton t-shirt available in various colors.",
        "count_in_stock": 50,
        "review": 4.5
    },
    {
        "name": "Jeans",
        "img_url": "https://images.unsplash.com/photo-1632223310893-23aee48cfcfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnZ3klMjBqZWFuc3xlbnwwfDB8MHx8fDI%3D",
        "price": 49.99,
        "description": "Classic blue denim jeans with a straight fit.",
        "count_in_stock": 40,
        "review": 4.2
    },
    {
        "name": "Sweater",
        "img_url": "https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dlYXRlcnxlbnwwfDB8MHx8fDI%3D",
        "price": 39.99,
        "description": "Warm and cozy wool sweater, perfect for winter.",
        "count_in_stock": 30,
        "review": 4.7
    },
    {
        "name": "Jacket",
        "img_url": "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 89.99,
        "description": "Stylish leather jacket with a modern fit.",
        "count_in_stock": 20,
        "review": 4.6
    },
    {
        "name": "Dress",
        "img_url": "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHwwfDB8fHwy",
        "price": 59.99,
        "description": "Elegant evening dress with a flattering silhouette.",
        "count_in_stock": 25,
        "review": 4.8
    },
    {
        "name": "Shorts",
        "img_url": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcnRzfGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 24.99,
        "description": "Casual shorts perfect for summer outings.",
        "count_in_stock": 60,
        "review": 4.3
    },
    {
        "name": "Skirt",
        "img_url": "https://images.unsplash.com/photo-1507274301514-7de9f124ff54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNraXJ0c3xlbnwwfDB8MHx8fDI%3D",
        "price": 34.99,
        "description": "Flowing maxi skirt with a bohemian style.",
        "count_in_stock": 35,
        "review": 4.4
    },
    {
        "name": "Suit",
        "img_url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdHxlbnwwfDB8MHx8fDI%3D",
        "price": 199.99,
        "description": "Classic tailored suit for formal occasions.",
        "count_in_stock": 10,
        "review": 4.7
    },
    {
        "name": "Hoodie",
        "img_url": "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9vZGllfGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 39.99,
        "description": "Cozy hoodie with a front pocket and hood.",
        "count_in_stock": 40,
        "review": 4.6
    },
    {
        "name": "Polo Shirt",
        "img_url": "https://images.unsplash.com/photo-1626753846051-29b988f34fd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvbG8lMjBzaGlydHxlbnwwfDB8MHx8fDI%3D",
        "price": 24.99,
        "description": "Classic polo shirt with a ribbed collar.",
        "count_in_stock": 55,
        "review": 4.4
    },
    {
        "name": "Cardigan",
        "img_url": "https://images.unsplash.com/photo-1485527691629-8e370684924c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcmRpZ2FufGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 49.99,
        "description": "Soft knit cardigan with button closure.",
        "count_in_stock": 30,
        "review": 4.5
    },
    {
        "name": "Tank Top",
        "img_url": "https://images.unsplash.com/photo-1578747522731-9e5a179b02f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhbmslMjB0b3B8ZW58MHwwfDB8fHwy",
        "price": 14.99,
        "description": "Basic tank top ideal for layering.",
        "count_in_stock": 65,
        "review": 4.2
    },
    {
        "name": "Blazer",
        "img_url": "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhemVyfGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 99.99,
        "description": "Sharp blazer for a professional look.",
        "count_in_stock": 15,
        "review": 4.7
    },
    {
        "name": "Overalls",
        "img_url": "https://images.unsplash.com/photo-1588467897646-360bba5d9e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmFsbHN8ZW58MHwwfDB8fHwy",
        "price": 54.99,
        "description": "Casual denim overalls with adjustable straps.",
        "count_in_stock": 25,
        "review": 4.3
    },
    {
        "name": "Leggings",
        "img_url": "https://images.unsplash.com/photo-1600137310740-e0be5f3bff91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVnZ2luZ3N8ZW58MHwwfDB8fHwy",
        "price": 19.99,
        "description": "Stretchy leggings for workouts and casual wear.",
        "count_in_stock": 50,
        "review": 4.5
    },
    {
        "name": "Tracksuit",
        "img_url": "https://images.unsplash.com/photo-1555412568-12659dc76380?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhY2tzdWl0fGVufDB8MHwwfHx8Mg%3D%3D",
        "price": 59.99,
        "description": "Matching tracksuit for workouts and casual wear.",
        "count_in_stock": 30,
        "review": 4.4
    }
]

export default clothingData;