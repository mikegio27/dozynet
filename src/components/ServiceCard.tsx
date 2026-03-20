import type { Service } from '../types.ts'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const {
    name,
    description,
    url,
    accentFrom,
    accentTo,
    iconColor,
    iconBg,
    urlColor,
    urlBg,
    icon,
  } = service

  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <div
        className="card-accent"
        style={{ background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})` }}
      />
      <div className="card-icon" style={{ background: iconBg, color: iconColor }}>
        {icon}
      </div>
      <div className="card-name">{name}</div>
      <div className="card-desc">{description}</div>
      <span className="card-url" style={{ background: urlBg, color: urlColor }}>
        {url.replace('https://', '')}
      </span>
    </a>
  )
}
