export const mockedData = {
    edges: [
        {
            cursor: "eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjAsImZpbHRlciI6eyJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMCI6IkvDvGhscmVnYWwifSwic29ydGluZyI6IkRFRkFVTFQifQ==",
            node: {
                id: "cHJvZHVjdC04Njg2MTIwMDUy",
                productId: "8686120052",
                storeId: 1,
                rootCategoryId: "Y2F0ZWdvcnktMTEzOQ==",
                orgRootCategoryId: "1139",
                hierarchicalCategories: [
                    {
                        name: "Kühlregal",
                        url: "kuehlregal",
                    },
                    {
                        name: "Molkereiprodukte",
                        url: "kuehlregal/molkereiprodukte",
                    },
                    {
                        name: "Milch",
                        url: "kuehlregal/molkereiprodukte/milch",
                    },
                    {
                        name: "H-Milch",
                        url: "kuehlregal/molkereiprodukte/milch/h-milch",
                    },
                ],
                sku: "8686120052",
                gtin: "4311501318492",
                name: "EDEKA Bio H-Vollmilch",
                browserUrl: "edeka-bio-h-vollmilch-8686120052",
                historicalBrowserUrls: [
                    "edeka-bio-wwf-h-vollmilch-38-fett-8686120052",
                    "edeka-bio-h-vollmilch-3-8-fett",
                    "edeka-bio-wwf-h-vollmilch-3%2C8-fett-8686120052",
                    "edeka-bio-wwf-h-vollmilch-38-prozent-8686120052",
                ],
                packing: "12 x 1l Stück / Packung",
                prices: {
                    price: 19.08,
                    specialDiscount: 0,
                    specialPrice: null,
                    basePrice: 1.59,
                    baseUnit: "1 Liter",
                    deposit: 0,
                    specialBasePrice: null,
                },
                isAvailable: true,
                isBasePrice: true,
                units: [
                    {
                        id: "eyJ0eXBlIjoicHJvZHVjdFVuaXQiLCJwcm9kdWN0SWQiOiI4Njg2MTIwMDUyIiwicHJvZHVjdFVuaXRJZCI6NzF9",
                        unitId: 71,
                        name: "Packung",
                        default: true,
                        minQty: 0,
                        maxQty: 999999,
                        price: 19.08,
                        specialPrice: null,
                        availableQuantity: 317,
                    },
                ],
                restockDate: "2022-07-28T22:00:00.000Z",
                icons: [
                    {
                        id: "cHJvZHVjdEljb24tNDk=",
                        iconId: "49",
                        name: "Bio",
                        image: "//assets.bringmeister.de/media/categories/characteristics/icons/organic.png",
                    },
                ],
                depositType: null,
                image: "//assets.bringmeister.de/media/p/8686120052/0/bb70a105aff061cc44463f9f55fba9cc.jpg",
                images: {
                    list: "//assets.bringmeister.de/media/p/8686120052/0/bb70a105aff061cc44463f9f55fba9cc.jpg",
                    details: [
                        "//assets.bringmeister.de/media/p/8686120052/0/bb70a105aff061cc44463f9f55fba9cc.jpg",
                    ],
                },
                detailImages: [
                    "//assets.bringmeister.de/media/p/8686120052/0/bb70a105aff061cc44463f9f55fba9cc.jpg",
                ],
                alcoholLevel: null,
                ingredients: {
                    text: null,
                    additives: null,
                    allergenic:
                        "Milch und daraus hergestellte Erzeugnisse (einschließlich Laktose)",
                },
                nutrition: {
                    reference: "je 100 ml (unzubereitet)",
                    items: [
                        {
                            label: "Brennwert",
                            value: "287.00 kJ (69 kcal)",
                        },
                        {
                            label: "Eiweiß",
                            value: "3.5 g",
                        },
                        {
                            label: "Fett",
                            value: "3.9 g",
                        },
                        {
                            label: "davon ges. Fettsäuren",
                            value: "2.7 g",
                        },
                        {
                            label: "davon unges. Fettsäuren",
                            value: "-",
                        },
                        {
                            label: "Kohlenhydrate",
                            value: "4.9 g",
                        },
                        {
                            label: "davon Zucker",
                            value: "4.9 g",
                        },
                        {
                            label: "Ballaststoffe",
                            value: "-",
                        },
                        {
                            label: "Salz",
                            value: "0.13 g",
                        },
                    ],
                },
                content: {
                    description:
                        "Bio H-Vollmilch, 3,8% Fett, ultrahocherhitzt, homogenisiert",
                },
                properties: ["ORGANIC"],
                features: [
                    {
                        label: "Besonderheiten",
                        value: "Bio, FSC, Nachhaltig, WWF",
                    },
                    {
                        label: "Hinweise zu Aufbewahrung und Verwendung",
                        value: "Aufbewahrungshinweise: Nach dem Öffnen gekühlt lagern und alsbald aufbrauchen.",
                    },
                    {
                        label: "Lebensmittelunternehmer",
                        value: "EDEKA ZENTRALE Stiftung & Co. KG, D-22291 Hamburg",
                    },
                    {
                        label: "Öko-Kontrollstelle",
                        value: "AT-BIO-902",
                    },
                ],
                internalMultibuyInfos: [],
                zipcode: "13355",
            },
        },
    ],
};

export const fakeCartData = {
    reservation: null,
    couponCode: null,
    totals: [
        {
            code: "subtotal",
            label: "Zwischensumme",
            value: 11.17,
            __typename: "CartTotals",
        },
        {
            code: "grand_total",
            label: "Gesamt",
            value: 11.17,
            __typename: "CartTotals",
        },
    ],
    minimumValue: 40,
    missingValue: 28.83,
    products: [
        {
            id: "Y2FydF9wcm9kdWN0LTcwNTA1NzAwNDE=",
            rootCategory: {
                id: "Y2F0ZWdvcnktMTEzOQ==",
                position: 3,
                name: "Kühlregal",
                __typename: "Category",
            },
            currentUnit: {
                id: "eyJ0eXBlIjoicHJvZHVjdFVuaXQiLCJwcm9kdWN0SWQiOiI3MDUwNTcwMDQxIiwicHJvZHVjdFVuaXRJZCI6NTd9",
                unitId: 57,
                name: "Becher",
                __typename: "ProductUnit",
            },
            image: "//assets.bringmeister.de/media/p/7050570041/0/7249d199af232e67c1525e8d1e356f72.jpg",
            basePrice: 19.92,
            baseUnit: "1 kg",
            browserUrl:
                "ruegenwalder-muehle-feine-ruegenwalder-teewurst-7050570041",
            availableQuantity: null,
            commentAllowed: false,
            cut: null,
            comment: "",
            deposit: 0,
            name: "Rügenwalder Mühle Feine Rügenwalder Teewurst",
            packing: "0.125kg Becher",
            price: 2.49,
            rowPrice: 2.49,
            discount: 0,
            sku: "7050570041",
            quantity: 1,
            depositType: null,
            __typename: "CartProduct",
            replacementProducts: {
                edges: [],
                __typename: "ProductsConnection",
            },
            productReplacementNeeded: false,
        },
    ],
};
