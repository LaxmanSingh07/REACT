import React from "react";
import ReactDOM from 'react-dom/client';

const Title = () => (
  
        <img className="logo"
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png"
            alt="logo" />

    
);


//composing components

const HeadComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>

        </div>

    );
};



//Config Driven UI ---> it is a good pratice we follow
// const config = [
//     {
//         type: "carousel",
//         card: [
//             {
//                 offerName: "50% off"
//             },
//             {
//                 offerName: "No Delivery Charge"
//             }
//         ]
//     },
//     {
//         type: "resutaurants",
//         card: [
//             {
//                 name: "Burger King",
//                 Image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0bf19a82b109b40c2f5c56d00f071a33",
//                 cusines: ["Burger", "American"],
//                 rating: "4.2"
//             },
//             {
//                 name: "KFC",
//                 Image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0bf19a82b109b40c2f5c56d00f071a33",
//                 cusines: ["Burger", "American"],
//                 rating: "4.2"
//             }
//         ]
//     }

// ]

const RestrauntList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "21110",
            "name": "Nazeer Foods",
            "uuid": "7eebff50-9fdf-4d9b-b928-57713c9f9bda",
            "city": "4",
            "area": "IP Extension",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "jvfgv5wakfy4zeltoybr",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Mughlai",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 3.799999952316284,
            "slugs": {
                "restaurant": "nazeer-foods-ip-extension-mayur-vihar",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "D-590, West vinod Nagar, Delhi 110092",
            "locality": "D Block",
            "parentId": 2351,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "50% off",
                "shortDescriptionList": [
                    {
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [],
                "totalFees": 0,
                "message": "",
                "title": "",
                "amount": "",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5961211~p=1~eid=00000186-6507-0e45-0dd5-9ed4008b0159",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3.7 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "21110",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 3.799999952316284,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.8",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"


    },
    {
        "data": {
            "id": "673902",
            "name": "Goila Butter Chicken",
            "cloudinaryImageId": "98c8ef9e10a249739ffba389218f3430",
            "locality": "Mayur Vihar",
            "areaName": "IP Extension, Delhi",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "North Indian",
                "Mughlai",
                "Biryani",
                "Indian"
            ],
            "feeDetails": {
                "restaurantId": "673902",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "322587",
            "avgRatingString": "--",
            "promoted": true,
            "adTrackingId": "cid=5918897~p=1~eid=00000186-6918-f193-11d7-60c200860114~45826",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-02-19 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
    },

    {
        "data": {
            "id": "440615",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "vnfry05b96pueyee8x1h",
            "locality": "Oshiwara",
            "areaName": "Preet Vihar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "440615",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "281782",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-02-20 01:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹90",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=440615",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "data": {
            "id": "204678",
            "name": "Ram ji Samose wala",
            "cloudinaryImageId": "tulqj4uyyb92lhevpcnv",
            "locality": "Shakarpur",
            "areaName": "Laxmi Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Snacks"
            ],
            "avgRating": 3.6,
            "veg": true,
            "feeDetails": {
                "restaurantId": "204678",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "166304",
            "avgRatingString": "3.6",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=5888716~p=1~eid=00000186-6959-d98d-1242-aa2e0086017e~45995",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-02-19 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=204678",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    }, {
        "data": {
            "id": "655332",
            "name": "KFC",
            "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
            "locality": "Shahdara",
            "areaName": "Unity one mall",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "655332",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-02-19 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=655332",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "data": {
            "id": "253771",
            "name": "McDonald's",
            "cloudinaryImageId": "1293a58ab5610f4c730c3d8cb6ac1b65",
            "locality": "Crossriver Mall",
            "areaName": "Karkardooma",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "253771",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "630",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-02-19 23:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹90 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=253771",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "data": {
            "id": "214710",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "bbzvsjc394c9a803en4i",
            "locality": "Dilshad Gardens",
            "areaName": "Karkardooma",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Mexican",
                "American"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "214710",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "4961",
            "avgRatingString": "3.8",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-02-19 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "50% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=214710",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "data": {
            "id": "297004",
            "name": "Mohan Chaap Wale",
            "cloudinaryImageId": "a121142745a1f20213fad6a60d3304f8",
            "locality": "Rishabh Vihar",
            "areaName": "Dilshad Gardens",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Tandoor",
                "Indian",
                "Biryani",
                "Punjabi",
                "Snacks",
                "Afghani",
                "Lucknowi",
                "Thalis",
                "Barbecue",
                "Grill",
                "Home Food",
                "Tibetan",
                "Nepalese",
                "Beverages",
                "Desserts",
                "Fast Food"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "297004",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "373835",
            "avgRatingString": "4.0",
            "totalRatingsString": "50+",
            "promoted": true,
            "adTrackingId": "cid=5940769~p=2~eid=00000186-6959-d98d-1242-aa2f0086021e~45995",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-02-20 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ]
            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=297004",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    }
]



// console.log(RestrauntList[0].data);
const Subway = {
    name: "Burger King",
    Image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0bf19a82b109b40c2f5c56d00f071a33",
    cusines: ["Burger", "American"],
    rating: "4.2"
}


//react wrapes up all these into a variable which is known as the props 


// const RestrauntCard = (props) => {
//     console.log(props);
//     return (
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + RestrauntList[2].data?.cloudinaryImageId} />
//             {/* if the name is not rsent then you can use optional chaininig */}
//             <h3>{RestrauntList[2].data?.name}</h3>
//             <h6>{RestrauntList[2].data?.cuisines.join(",")}</h6>
//             <h4>{RestrauntList[2].data?.lastMileTravelString}minutes</h4>
//         </div>
//     )
// }





//This is a functional component 

// const RestrauntCard = (props) => {
//     console.log(props);
//     return (
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +props.restaurant.data?.cloudinaryImageId} />
//             {/* if the name is not rsent then you can use optional chaininig */}
//             <h3>{props.restaurant.data?.name}</h3>
//             <h6>{props.restaurant.data?.cuisines.join(",")}</h6>
//             <h4>{props.restaurant.data?.lastMileTravelString}minutes</h4>
//         </div>
//     )
// }

//another way to do the same thing 
//with the help of the object distructring 
const RestrauntCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {

    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            {/* if the name is not rsent then you can use optional chaininig */}
            <h3>{name}</h3>
            <h6>{cuisines}</h6>
            <h4>{lastMileTravelString}minutes</h4>
        </div>
    )
}


// {/* whatever your are passing overhere is known as the prop in the react  */}
// {/* props is known as the properties */}

const Body = () => {
    return (<div className="restaurant-list">

        {
            RestrauntList.map(restaurant => {
                return <RestrauntCard {...restaurant.data} />
            })
        }
        {/* <RestrauntCard {...RestrauntList[0].data}/>
        <RestrauntCard {...RestrauntList[1].data}/>
        <RestrauntCard {...RestrauntList[2].data}/>
        <RestrauntCard {...RestrauntList[0].data}/>
        <RestrauntCard {...RestrauntList[1].data}/>
        <RestrauntCard {...RestrauntList[2].data}/>
        <RestrauntCard {...RestrauntList[0].data}/>
        <RestrauntCard {...RestrauntList[1].data}/>
        <RestrauntCard {...RestrauntList[2].data}/>
        <RestrauntCard {...RestrauntList[0].data}/>
        <RestrauntCard {...RestrauntList[1].data}/>
        <RestrauntCard {...RestrauntList[2].data}/>
        <RestrauntCard {...RestrauntList[0].data}/>
        <RestrauntCard {...RestrauntList[1].data}/>
        <RestrauntCard {...RestrauntList[2].data}/> */}
    </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}


//can I use React.Fragment inside the React.Fragment

const AppLayout = () => {
    return (
        <React.Fragment>
            <HeadComponent />
            <Body />
            <Footer />
        </React.Fragment>
    )
}


const jsx = (
    //inline css in react
    <div style={
        {
            background: "red"
        }
    }>
        <h1>Jsx</h1>
        <h1>Second JSX</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
