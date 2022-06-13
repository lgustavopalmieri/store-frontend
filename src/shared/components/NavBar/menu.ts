export interface ISubmenu {
    title: string
    link: string
}

export interface IMenu{
    title: string
    submenu: ISubmenu[]
}

export default [
    {
        title: 'Home',
        submenu: [
            {
                title: 'all products',
                link: 'home/allproducts'
            },
            {
                title: 'my products',
                link: 'home/myproducts'
            }
        ]
    },
    {
        title: 'Eletronics',
        submenu: [
            {
                title: 'notebooks',
                link: '/products/post'
            },
            {
                title: 'audio',
                link: '/products/update'
            },
            {
                title: 'lights',
                link: '/products/delete'
            }
        ]
    },
    {
        title: 'Books',
        submenu: [
            {
                title: 'cientific',
                link: '/products/post'
            },
            {
                title: 'literature',
                link: '/products/update'
            },
            {
                title: 'english',
                link: '/products/delete'
            },
            {
                title: 'physics',
                link: '/products/delete'
            }
        ]
    },
    {
        title: 'Furniture',
        submenu: [
            {
                title: 'wood',
                link: '/products/post'
            },
            {
                title: 'industrial',
                link: '/products/update'
            },
        ]
    },
    {
        title: 'Clothes',
        submenu: [
            {
                title: 't-shirts',
                link: '/products/post'
            },
            {
                title: 'hoodies',
                link: '/products/update'
            },
            {
                title: 'pants',
                link: '/products/update'
            },
            {
                title: 'caps',
                link: '/products/update'
            },
        ]
    },
    {
        title: 'Shoes',
        submenu: [
            {
                title: 'adidas',
                link: '/products/post'
            },
            {
                title: 'new balance',
                link: '/products/update'
            },
            {
                title: 'asics',
                link: '/products/update'
            },
        ]
    }
]