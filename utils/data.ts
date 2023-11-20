import peoplei from "../public/images/campaignI.png"
import peopleii from "../public/images/campaignII.png"
import peopleiii from "../public/images/campaignIII.png"
import happiness from "../public/icons/happiness.svg"
import love from "../public/icons/love.svg"
import social from "../public/icons/social.svg"

export const data = [
    {
        id: 1,
        image: peoplei,
        title: "Help Iseyin Community college Stand Again",
        description: "Since the attack in 2009, the school has not.....",
        total: "600,000",
        raised: "523,035",
        supporters: "4,544"
    },

     {
        id: 2,
        image: peopleii,
        title: "Help poor children with cancer to access treatment",
        description: "Kids in lagos, Nigeria are suffering from severe...",
        total: "1.5 million",
        raised: "750,045",
        supporters: "20,544"
    },
    {
        id: 3,
        image: peopleiii,
        title: "Provide gifts & food to 500 children in the streets",
        description: "This project will support families in rural....",
        total: "150,000",
        raised: "35,255",
        supporters: "2,144"
    } 
]

export const helpData = [
    {
        id: 1,
        icon: happiness,
        head: "Give Happiness",
        subHead: "Giving happiness to others is one of the most fulfilling things you can do in life"
    },
    {
        id: 2,
        icon: love,
        head: "Share Love",
        subHead: "When you share love to those around you, you create a ripple effect of kindness"
    },
    {
        id: 3,
        icon: social,
        head: "Build Socially",
        subHead: "Building socially requires not  just connecting with others but also actively contributing"
    },
]