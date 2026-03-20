import Nebula from './components/Nebula'
import SectionDivider from './components/SectionDivider'
import ServiceCard from './components/ServiceCard'
import sections from './services'

export default function App() {
  return (
    <>
      <Nebula />

      <div className="page">
        <header className="header">
          <div className="header-top">
            <span className="logo-bracket">[</span>
            <span className="logo">
              dozy<span className="logo-accent">net</span>
            </span>
            <span className="logo-bracket">]</span>
          </div>
          <div className="subtitle">
            ~ home.dozydelta.com &nbsp;·&nbsp;
            <span>vlan10</span> &nbsp;·&nbsp;
            <span>k3s</span> &nbsp;·&nbsp;
            <span>10.0.10.0/24</span>
          </div>
        </header>

        {sections.map((section) => (
          <div key={section.label}>
            <SectionDivider label={section.label} />
            <div className="grid">
              {section.services.map((service: any) => (
                <ServiceCard key={service.name} service={service} />
              ))}
            </div>
          </div>
        ))}

        <footer className="footer">
          <span className="status-dot" />
          all systems operational &nbsp;·&nbsp; dozydelta.com
        </footer>
      </div>
    </>
  )
}
