import  { useState } from 'react'

const useMenuManager = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    
    const handleMenuControl = () => {
        if(!menuIsOpen) {
            setMenuIsOpen(true);
        } else {
            setMenuIsOpen(false);
        }
    }
    return {
        menuIsOpen,
        handleMenuControl
    }
}

export default useMenuManager
