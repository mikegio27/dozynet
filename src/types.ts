export interface Service {
  name: string
  description: string
  url: string
  accentFrom: string
  accentTo: string
  iconColor: string
  iconBg: string
  urlColor: string
  urlBg: string
  icon: React.ReactNode
}

export interface Section {
  label: string
  services: Service[]
}
