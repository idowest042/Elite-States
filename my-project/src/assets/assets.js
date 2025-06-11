import info from "./info.jpg"
import house from "./house (1).jpg"
import house2 from "./house (2).jpg"
import house3 from "./house (3).jpg"
import house4 from "./house (4).jpg"
import acqusition from "./acquistion.png"
import arti from "./arti.jpg"
import global from "./global.jpg"
import market from "./market.jpg"
import portfolio from "./portfolio.jpg"
import privat from "./private.jpg"
import joe from "./joe.png"
import testimonal1 from "./testimonal (1).jpg"
import testimonal2 from "./testimonal (2).jpg"
import testimonal3 from "./testimonal (3).jpg"
import testimonal4 from "./testimonal (4).jpg"
import house6 from "./house (6).jpg"
import house5 from "./house (5).jpg"
import house7 from "./house (7).jpg"
import house8 from "./house (8).jpg"
import inside from "./inside (1).jpg"
import inside2 from "./inside (2).jpg"
import inside3 from "./inside (3).jpg"
import inside4 from "./inside (4).jpg"
import inside5 from "./inside (5).jpg"
import inside6 from "./inside (6).jpg"
import inside7 from "./inside (7).jpg"
import inside8 from "./inside (8).jpg"
import inside9 from "./inside (9).jpg"
import inside10 from "./inside (10).jpg"
import inside11 from "./inside (11).jpg"
import inside12 from "./inside (12).jpg"
import inside13 from "./inside (13).jpg"
import inside14 from "./inside (14).jpg"
import inside15 from "./inside (15).jpg"
import inside16 from "./inside (16).jpg"
import inside17 from "./inside (17).jpg"
import header from "./header.jpg"
export const assets = {
    info,
    header,
    house2
}
export const products = [
    {
        id: 1,
        name: "Luxury Villa",
        price: 2500000,
        image: house,
        description: "A stunning luxury villa with breathtaking views and modern amenities.",
        location: "Beverly Hills, CA",
        rooms: "5 bedrooms"
    },
    {
        id: 2,
        name: "Urban Penthouse",
        price: 1800000,
        image: house4,
        description: "An elegant penthouse in the heart of the city with panoramic skyline views.",
        location: "New York City, NY",
        rooms: "6 bedrooms"
    },
    {
        id: 3,
        name: "Waterfront Estate",
        price: 5000000,
        image: house3,
        description: "A magnificent estate located on the waterfront, perfect for serene living.",
        location: "Miami, FL",
        rooms: "8 bedrooms"
    },
    {
        id: 4,
        name: "Historical Mansion",
        price: 3500000,
        image: house4,
        description: "A beautifully restored mansion with rich history and luxurious features.",
        location: "Charleston, SC",
        rooms: "7 bedrooms"
    }
]
export const offer = [
{
    id: 1,
    image:acqusition,
    title: "Property Acquisition",
    description: "We identify and secure the finest properties, often before they reach the market, ensuring our clients have access to truly exceptional opportunities.",
},
{
   id: 2,
   image:portfolio,
    title: "Portfolio Management",
    description: "We manage a diverse portfolio of properties, optimizing returns and ensuring each asset is well-maintained and positioned for growth.",
},
{
    id:3,
    image:global,
    title:"Global Relocation",
    description: "We assist clients in relocating globally, providing comprehensive support from property search to settling into their new home.",
},
{
    id:4,
    image:arti,
    title: "Architectural Consultation",
    description: "We offer expert architectural consultation to help clients design and build their dream properties, ensuring every detail meets their vision.",
},
{
    id:5,
    image:privat,
    title: "Private Listings",
    description: "We provide access to exclusive private listings, giving our clients a competitive edge in finding unique properties that suit their needs.",
},
{
    id:6,
    image:market,
    title: "Market Analysis",
    description: "We conduct in-depth market analysis to provide clients with insights into property values, trends, and investment opportunities.",
}
]
export const testimonals = [
    {
        id: 1,
        name: "Joe benedict",
        image: joe,
        review: "Elite Estates transformed our property search into a seamless experience. Their team was attentive, knowledgeable, and truly understood our needs. We found our dream home in no time!",
        rating: 5
    },
    {
        id: 2,
        name: "Jane Smith",
        image: testimonal1,
        review:"Working with Elite Estates was truly exceptional. They secured our dream home in a highly competitive market and negotiated terms that were beyond favorable.",
        rating: 4
    },
    {
        id: 3,
        name: "Alice Johnson",
        image: testimonal2,
        review: "Elite Estates found us a property that exceeded every expectation. Their attention to detail and understanding of our specific needs made the entire process effortless and enjoyable.",
        rating: 5
    },
    {
        id: 4,
        name: "Bob Brown",
        image: testimonal3,
        review: "As an international client, I was impressed by Elite Estates' global reach and local expertise. They made purchasing a property abroad seamless and stress-free.",
        rating: 5
    },
    {
        id:5,
        name:"Song Kang",
        image:testimonal4,
        review:"The team at Elite Estates was incredibly professional and attentive. They helped me find the perfect property that met all my needs and exceeded my expectations.",

    }
]
export const Allproperties = [
    {
        id: 1,
        name: "Luxury Villa",
        price: 2500000,
        image: [house,inside,inside13,inside14],
        description: "A stunning luxury villa with breathtaking views and modern amenities.",
        location: "Beverly Hills, CA",
        rooms: "5 bedrooms"
    },
    {
        id: 2,
        name: "Urban Penthouse",
        price: 1800000,
        image: [house2,inside2,inside3,inside4],
        description: "An elegant penthouse in the heart of the city with panoramic skyline views.",
        location: "New York City, NY",
        rooms: "6 bedrooms"
    },
    {
        id: 3,
        name: "Waterfront Estate",
        price: 5000000,
        image: [house3,inside5,inside6,inside7],
        description: "A magnificent estate located on the waterfront, perfect for serene living.",
        location: "Miami, FL",
        rooms: "8 bedrooms"
    },
    {
        id: 4,
        name: "Historical Mansion",
        price: 3500000,
        image: [house4,inside8,inside9,inside10],
        description: "A beautifully restored mansion with rich history and luxurious features.",
        location: "Charleston, SC",
        rooms: "7 bedrooms"
    },
    {
        id:5,
        name: "Modern Apartment",
        price: 1200000,
        image: [house5,inside11,inside12,inside15],
        description: "A sleek modern apartment with state-of-the-art amenities and a prime location.",
        location: "San Francisco, CA",
        rooms: "3 bedrooms"
    },
    {
        id: 6,
        name: "Countryside Retreat",
        price: 800000,
        image: [house6,inside16,inside17],
        description: "A charming countryside retreat with expansive gardens and peaceful surroundings.",
        location: "Napa Valley, CA",
        rooms: "4 bedrooms"
    },
    {
        id: 7,
        name: "Beachfront Bungalow",
        price: 1500000,
        image: [house7,inside2,inside4,inside6],
        description: "A cozy beachfront bungalow with stunning ocean views and direct beach access.",
        location: "Malibu, CA",
        rooms: "2 bedrooms"
    },
    {
        id: 8,
        name: "Mountain Lodge",
        price: 2200000,
        image: [house8,inside3,inside5,inside7],
        description: "A luxurious mountain lodge perfect for winter getaways and outdoor adventures.",
        location: "Aspen, CO",
        rooms: "5 bedrooms"
    }
]