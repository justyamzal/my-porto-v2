import { Nav_Links } from '../../terms/navbar.terms'
import NavLinkElement from '../elements/NavLinkElement'

export default function DesktopLinksFragment({ activeSection, floating }) {
  return (
    <nav className={`hidden md:flex ${floating ? 'gap-[22px]' : 'gap-8'} transition-all`}>
      {Nav_Links.map((link) => (
        <div key={link.id} className="group">
          <NavLinkElement
            href={link.href}
            label={link.label}
            active={activeSection === link.id}
            floating={floating}
          />
        </div>
      ))}
    </nav>
  )
}
