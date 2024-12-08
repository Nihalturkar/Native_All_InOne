import { Icon } from 'react-native-vector-icons/Icon'
import { images, icons } from '../constants'

const Area = [
    { key: 1, value: 'Bhopal' },
    { key: 2, value: 'Indore' },
    { key: 3, value: 'Jabalpur' },
    { key: 4, value: 'Bangaluru' },
    { key: 5, value: 'Mumbai' },
]

const carddata = [
    {
        id: 1,
        img: images.banana,
        name: 'Organic Bananas',
        pices: "7pcs, Priceg",
        price: "$4.99",
    },
    {
        id: 2,
        img: images.ginger,
        name: 'Ginger',
        pices: "250gm, Priceg",
        price: "$4.99",
    },
    {
        id: 3,
        img: images.redchili,
        name: 'Bell Pepper Red',
        pices: "1kg, Priceg",
        price: "$4.99",
    },
    {
        id: 4,
        img: images.apple,
        name: 'Natural Red Apple',
        pices: "1kg, Priceg",
        price: "$4.99",
    },
]

const Search = [
    {
        id: 1,
        img: images.eggred,
        name: 'Egg Chicken Red',
        pices: "4pcs, Price",
        price: "$1.99",
    },
    {
        id: 2,
        img: images.eggwhite,
        name: 'Egg Chicken White',
        pices: "18gm, Price",
        price: "$1.50",
    },
    {
        id: 3,
        img: images.eggpasta,
        name: 'Egg Pasta',
        pices: "30gm, Price",
        price: "$14.99",
    },
    {
        id: 4,
        img: images.eggnoodles,
        name: 'Egg Noodles',
        pices: "2kg, Priceg",
        price: "$4.99",
    },
    {
        id: 5,
        img: images.eggmyonice,
        name: 'Mayyonice Egg',
        pices: "1kg, Priceg",
        price: "$4.99",
    },
    {
        id: 6,
        img: images.eggmaggie,
        name: 'Egg Maggie',
        pices: "5kg, Priceg",
        price: "$4.99",
    },
]

const BeverageData = [
    {
        id: 1,
        img: images.coke,
        name: 'Diet Coke',
        pices: "350ml, Priceg",
        price: "$4.99",
    },
    {
        id: 2,
        img: images.sprite,
        name: 'Sprite can',
        pices: "250ml, Priceg",
        price: "$24.99",
    },
    {
        id: 3,
        img: images.tree,
        name: 'Apple & Grape Juice',
        pices: "1L, Priceg",
        price: "$43.99",
    },
    {
        id: 4,
        img: images.mango,
        name: 'Orange Juice',
        pices: "2L, Priceg",
        price: "$24.99",
    },
    {
        id: 5,
        img: images.coca,
        name: 'Coca Cola Can',
        pices: "1L, Priceg",
        price: "$14.99",
    },
    {
        id: 6,
        img: images.pepsi,
        name: 'Pepsi Can',
        pices: "2L, Priceg",
        price: "$4.99",
    },
]

const Groceries = [
    { id: 1, images: images.pulses, name: "pulses", bgColor: "rgba(83, 177, 117, 0.1)" },
    { id: 2, images: images.rice, name: "rice", bgColor: "rgba(248, 164, 76, 0.1)" },
    { id: 3, images: images.pulses, name: "pulses", bgColor: "rgba(83, 177, 117, 0.1)" },
    { id: 4, images: images.rice, name: "rice", bgColor: "rgba(248, 164, 76, 0.1)" },
]

const Products = [
    {
        id: 0,
        img: images.fruits,
        title: "Frash Fruits & Vegetable",
        bgColor: "rgba(83, 177, 117, 0.1)",
        borderColor: "rgba(83, 177, 117, 0.7)"
    },
    {
        id: 1,
        img: images.oil,
        title: "Cooking Oil & Ghee",
        bgColor: "rgba(248, 164, 76, 0.1)",
        borderColor: "rgba(248, 164, 76, 0.7)"
    },
    {
        id: 2,
        img: images.meat,
        title: "Meat & Fish",
        bgColor: "rgba(247, 165, 147, 0.25)",
        borderColor: 'rgba(247, 165, 147, 1)'
    },
    {
        id: 3,
        img: images.bakery,
        title: "Bakery & Snacks",
        bgColor: "rgba(211, 176, 224, 0.25)",
        borderColor: "rgba(211, 176, 224, 1)"
    },
    {
        id: 4,
        img: images.dairy,
        title: "Dairy & Eggs",
        bgColor: "rgba(253, 229, 152, 0.25)",
        borderColor: "rgba(253, 229, 152, 1)"
    },
    {
        id: 5,
        img: images.beverage,
        title: "Beverages",
        bgColor: "rgba(183, 223, 245, 0.25)",
        borderColor: "rgba(183, 223, 245, 1)"
    },
    {
        id: 6,
        img: images.fruits,
        title: "Frash Fruits & Vegetable",
        bgColor: "rgba(83, 177, 117, 0.1)",
        borderColor: "rgba(83, 177, 117, 0.7)"
    },
    {
        id: 7,
        img: images.oil,
        title: "Cooking Oil & Ghee",
        bgColor: "rgba(248, 164, 76, 0.1)",
        borderColor: "rgba(248, 164, 76, 0.7)"
    },
    {
        id: 8,
        img: images.meat,
        title: "Meat & Fish",
        bgColor: "rgba(247, 165, 147, 0.25)",
        borderColor: "rgba(247, 165, 147, 1)"
    },
    {
        id: 9,
        img: images.bakery,
        title: "Bakery & Snacks",
        bgColor: "rgba(211, 176, 224, 0.25)",
        borderColor: "rgba(253, 229, 152, 1)"
    },


]

const Accountdata = [
    {
        id: 1,
        icon: icons.order,
        title: "Orders"
    },
    {
        id: 2,
        icon: icons.details,
        title: "My Details"
    },
    {
        id: 3,
        icon: icons.delivery,
        title: "Delivery Address"
    },
    {
        id: 4,
        icon: icons.payment,
        title: "Payment Methods"
    },
    {
        id: 5,
        icon: icons.promo,
        title: "Promo Card"
    },
    {
        id: 6,
        icon: icons.bell,
        title: "Notifications"
    },
    {
        id: 7,
        icon: icons.help,
        title: "Help"
    },
    {
        id: 8,
        icon: icons.about,
        title: "About"
    },
]

const banner = [
    {
        id: 1,
        img: images.banner,
    },
    {
        id: 2,
        img: images.banner,
    },
    {
        id: 3,
        img: images.banner,
    }
]

const AppleSlider = [
    {
        id: 1,
        img: images.apple,
    },
    {
        id: 2,
        img: images.apple,
    },
    {
        id: 3,
        img: images.apple,
    }
]


export default {
    carddata,
    Search,
    Area,
    Groceries,
    Products,
    BeverageData,
    Accountdata,
    banner,
    AppleSlider

};