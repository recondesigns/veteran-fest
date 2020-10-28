export const imageArr = [
    {
        name: 'vetFestImage01',
        path: '../../assets/images/vetfest01-100px.jpg',
    },
    {
        name: 'vetFestImage02',
        path: '../../assets/images/vetfest02-100px.jpg',
    },
    {
        name: 'vetFestImage03',
        path: '../../assets/images/vetfest03-100px.jpg',
    },
    {
        name: 'vetFestImage04',
        path: '../../assets/images/vetfest04-100px.jpg',
    },
    {
        name: 'vetFestImage05',
        path: '../../assets/images/vetfest05-100px.jpg',
    },
    {
        name: 'vetFestImage06',
        path: '../../assets/images/vetfest06-100px.jpg',
    },
    {
        name: 'vetFestImage07',
        path: '../../assets/images/vetfest07-100px.jpg',
    },
    {
        name: 'vetFestImage08',
        path: '../../assets/images/vetfest08-100px.jpg',
    },
    {
        name: 'vetFestImage09',
        path: '../../assets/images/vetfest09-100px.jpg',
    },
    {
        name: 'vetFestImage10',
        path: '../../assets/images/vetfest10-100px.jpg',
    },
    {
        name: 'vetFestImage11',
        path: '../../assets/images/vetfest11-100px.jpg',
    },
    {
        name: 'vetFestImage12',
        path: '../../assets/images/vetfest12-100px.jpg',
    },
    {
        name: 'vetFestImage14',
        path: '../../assets/images/vetfest14-100px.jpg',
    },
    {
        name: 'vetFestImage15',
        path: '../../assets/images/vetfest15-100px.jpg',
    },
    {
        name: 'vetFestImage16',
        path: '../../assets/images/vetfest16-100px.jpg',
    },
    {
        name: 'vetFestImage17',
        path: '../../assets/images/vetfest17-100px.jpg',
    },
    {
        name: 'vetFestImage18',
        path: '../../assets/images/vetfest18-100px.jpg',
    },
    {
        name: 'vetFestImage19',
        path: '../../assets/images/vetfest19-100px.jpg',
    },
    {
        name: 'vetFestImage20',
        path: '../../assets/images/vetfest20-100px.jpg',
    },
    {
        name: 'vetFestImage21',
        path: '../../assets/images/vetfest21-100px.jpg',
    },
    {
        name: 'vetFestImage22',
        path: '../../assets/images/vetfest22-100px.jpg',
    },
]

export function setThumbnail(thumbnailStatus) {
    switch (thumbnailStatus) {
        case 'inactive':
            return {
                background: `none`,
                opacity: 0.4
            }
        case 'active':
            return {
                background: `#E4EBE8`,
                opacity: 1.0
            }
        default:
            return 'Default case.'
    }
}

export function setGallery() {
    
}