const mobile = [
    {
        Brand: "Samsung",
        Color: "White",
        Screen: 6.5,
        Price: 1000
    },
    {
        Brand: "Moto",
        Color: "Black",
        Screen: 5.5,
        Price: 900
    },
    {
        Brand: "Apple",
        Color: "Grey",
        Screen: 5,
        Price: 1200
    }
]

mobile.forEach((record) => {
    console.log(record.Brand);
})