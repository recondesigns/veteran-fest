export function setBarItem(itemStatus) {
    switch (itemStatus) {
        case 'complete':
            return {
                textColor: `#FFFFFF`,
                border: `4px solid #4E6A5B`
            } 
        case 'active':
            return {
                textColor: `#FFFFFF`,
                border: `4px solid #DAD3C1`
            }
        case 'inactive':
            return {
                textColor: `#949494`,
                border: `4px solid #403926`
            }
        default: 
            return {
                textColor: `lightblue`,
                border: `4px solid lightgreen`
            }
    }
}