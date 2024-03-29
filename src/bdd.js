const restaurantsList = [
    {
        restaurantName: "La Bonne Bouffe",
        restaurantImage:
            "https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 6.0,
        deliveryTimeMin: 15,
        deliveryTimeMax: 25,
        priceRate: 2,
        restaurantFoodType: "France",
    },
    {
        restaurantName: "Le Petit Bistrot",
        restaurantImage:
            "https://plus.unsplash.com/premium_photo-1673809798817-457be4736fa4?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 5.5,
        deliveryTimeMin: 20,
        deliveryTimeMax: 30,
        priceRate: 1,
        restaurantFoodType: "France",
    },
    {
        restaurantName: "A la bonne fourchette",
        restaurantImage:
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 7.2,
        deliveryTimeMin: 25,
        deliveryTimeMax: 35,
        priceRate: 3,
        restaurantFoodType: "France",
    },
    {
        restaurantName: "Parisian Bistro",
        restaurantImage:
            "https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 7.5,
        deliveryTimeMin: 10,
        deliveryTimeMax: 20,
        priceRate: 1,
        restaurantFoodType: "France",
    },
    {
        restaurantName: "Restaurant de la Tour",
        restaurantImage:
            "https://plus.unsplash.com/premium_photo-1673581152308-591c1645be02?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 8.0,
        deliveryTimeMin: 15,
        deliveryTimeMax: 25,
        priceRate: 3,
        restaurantFoodType: "France",
    },
    {
        restaurantName: "Au bon gout",
        restaurantImage:
            "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=3110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 6,
        deliveryTimeMin: 20,
        deliveryTimeMax: 30,
        priceRate: 2,
        restaurantFoodType: "France",
    },
    {
        restaurantName: "Mexico Loco",
        restaurantImage:
            "https://images.unsplash.com/photo-1564758565388-0d5da0cbb08c?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 6.5,
        deliveryTimeMin: 5,
        deliveryTimeMax: 15,
        priceRate: 1,
        restaurantFoodType: "Mexique",
    },
    {
        restaurantName: "Japan Street",
        restaurantImage:
            "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww",
        restaurantNote: 7.0,
        deliveryTimeMin: 20,
        deliveryTimeMax: 30,
        priceRate: 2,
        restaurantFoodType: "Japon",
    },
    {
        restaurantName: "Le haut de gamme",
        restaurantImage:
            "https://images.unsplash.com/photo-1543826173-70651703c5a4?q=80&w=2979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 8.5,
        deliveryTimeMin: 25,
        deliveryTimeMax: 35,
        priceRate: 3,
        restaurantFoodType: "France",
    },
    {
        restaurantName: "La pasta del mondo",
        restaurantImage:
            "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=3090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 8.4,
        deliveryTimeMin: 10,
        deliveryTimeMax: 20,
        priceRate: 1,
        restaurantFoodType: "Italie",
    },
    {
        restaurantName: "La piazza de la pizza",
        restaurantImage:
            "https://images.unsplash.com/photo-1621538997517-58ce53933faa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        restaurantNote: 7.6,
        deliveryTimeMin: 15,
        deliveryTimeMax: 25,
        priceRate: 2,
        restaurantFoodType: "Italie",
    },
];
module.exports = restaurantsList;
