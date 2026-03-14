import { useEffect, useMemo, useState } from 'react'
import { Active_Trigger_Offset, Floating_Scroll_Y, Nav_Links  } from '../../terms/navbar.terms'
import { getActiveSection } from '../utils/getActiveSection'

export function useNavbarState() {
    const [isFloating, setIsFloating] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    const sectionIds = useMemo(() => Nav_Links.map((l) => l.id),[]) 
    useEffect(() => {
        const onScroll = () => {
                setIsFloating(window.scrollY > Floating_Scroll_Y)
                const trigger = window.scrollY + Active_Trigger_Offset
                setActiveSection(getActiveSection(sectionIds, trigger))
            }
             onScroll()
            window.addEventListener('scroll', onScroll)
            return() => window.removeEventListener('scroll', onscroll)   
        }, [sectionIds])
   
    return {
        isFloating,
        menuOpen,
        activeSection,
        openMenu: () => setMenuOpen(true),
        closeMenu: () => setMenuOpen(false),
        toggleMenu: () => setMenuOpen((v) => !v),   
    } 
}

