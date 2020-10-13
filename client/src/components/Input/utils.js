export function setInputStatus(status) {
    switch (status) {
        case 'active':
            return {
                helperTextVisibility: 'none',
                warningIconVisibility: 'none',
                border: '1px solid #545454',
                inputColor: '#545454',
                opacity: 1
            }
        case 'warning':
            return {
                helperTextVisibility: 'block',
                warningIconVisibility: 'block',
                border: '1px solid #EA7C7C',
                inputColor: '#EA7C7C',
                opacity: 1
            }
        case 'disabled':
            return {
                helperTextVisibility: 'none',
                warningIconVisibility: 'none',
                border: '1px solid #545454',
                inputColor: '#545454',
                opacity: .4
        }
        
        default: 
            return {
                helperTextVisibility: 'none',
                warningIconVisibility: 'none',
                border: '1px solid #545454',
                inputColor: '#545454',
                opacity: 1
            }
    }
}