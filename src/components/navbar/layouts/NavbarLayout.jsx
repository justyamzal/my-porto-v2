import BrandFragment from '../fragments/BrandFragment'
import DesktopLinksFragment from '../fragments/DesktopLinksFragment'
import MobilePanelFragment from '../fragments/MobilePanelFragment'
import MobileToggleFragment from '../fragments/MobileToggleFragment'
import { useNavbarState } from '../hooks/useNavbarState'

export default function NavbarLayout() {
  const { isFloating, menuOpen, activeSection, toggleMenu, closeMenu } = useNavbarState()

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div
        className={`mx-auto transition-all duration-300 ${
          isFloating
            ? 'w-[min(520px,calc(100%-32px))] pt-3.5 max-md:w-[calc(100%-24px)]'
            : 'w-[min(1180px,calc(100%-48px))]'
        }`}
      >
        <div
          className={`relative flex items-center transition-all duration-300 ${
            isFloating
              ? 'min-h-[62px] justify-between rounded-full bg-white/90 px-[18px] shadow-[0_14px_35px_rgba(2,6,23,.28)] backdrop-blur-xl md:justify-center'
              : 'min-h-[78px] justify-between border-b border-white/10'
          }`}
        >
          <BrandFragment hideOnFloating={isFloating} />
          <DesktopLinksFragment activeSection={activeSection} floating={isFloating} />
          <MobileToggleFragment open={menuOpen} onToggle={toggleMenu} />
          <MobilePanelFragment
            open={menuOpen}
            floating={isFloating}
            activeSection={activeSection}
            onClose={closeMenu}
          />
        </div>
      </div>
    </header>
  )
}
