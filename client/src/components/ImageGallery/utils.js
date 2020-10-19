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