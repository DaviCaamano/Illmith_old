const explore = {
    name: 'Explore',
    to: '/explore',
}

const kickstarter= {
    name: 'Kickstarter',
    to: 'http://www.kickstarter.com',
    external: true
}


const adminSite= {
    name: 'Admin',
    to: process.env.REACT_APP_ENV === 'prod'? 'http://www.illmith.com/admin': 'http://localhost:3006',
    external_same_page: true
}


const getElements = (admin) => {

    const items = [
        explore,
        kickstarter,
    ]

    const adminItems = [
        adminSite
    ];
    if(admin){

        items.push.apply(items, adminItems);
    }
    return items;
}
export default getElements;