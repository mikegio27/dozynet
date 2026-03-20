import type { Section } from './types'

const sections: Section[] = [
  {
    label: 'media',
    services: [
      {
        name: 'Jellyfin',
        description: 'Media server · NVENC transcode',
        url: 'https://jellyfin.dozydelta.com',
        accentFrom: '#7aa2f7',
        accentTo: '#bb9af7',
        iconColor: '#7aa2f7',
        iconBg: 'rgba(122,162,247,0.12)',
        urlColor: '#7aa2f7',
        urlBg: 'rgba(122,162,247,0.10)',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        ),
      },
      {
        name: 'Immich',
        description: 'Photo library · CNPG · GPU ML',
        url: 'https://immich.dozydelta.com',
        accentFrom: '#bb9af7',
        accentTo: '#ff79c6',
        iconColor: '#bb9af7',
        iconBg: 'rgba(187,154,247,0.12)',
        urlColor: '#bb9af7',
        urlBg: 'rgba(187,154,247,0.10)',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'downloads',
    services: [
      {
        name: 'Sonarr',
        description: 'TV series automation',
        url: 'https://sonarr.dozydelta.com',
        accentFrom: '#2ac3de',
        accentTo: '#7aa2f7',
        iconColor: '#2ac3de',
        iconBg: 'rgba(42,195,222,0.12)',
        urlColor: '#2ac3de',
        urlBg: 'rgba(42,195,222,0.10)',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="15" rx="2" />
            <polyline points="17 2 12 7 7 2" />
          </svg>
        ),
      },
      {
        name: 'Radarr',
        description: 'Movie automation',
        url: 'https://radarr.dozydelta.com',
        accentFrom: '#f7768e',
        accentTo: '#ff9e64',
        iconColor: '#f7768e',
        iconBg: 'rgba(247,118,142,0.12)',
        urlColor: '#f7768e',
        urlBg: 'rgba(247,118,142,0.10)',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        ),
      },
      {
        name: 'qBittorrent',
        description: 'Torrent client · ProtonVPN',
        url: 'https://qb.dozydelta.com',
        accentFrom: '#9ece6a',
        accentTo: '#2ac3de',
        iconColor: '#9ece6a',
        iconBg: 'rgba(158,206,106,0.12)',
        urlColor: '#9ece6a',
        urlBg: 'rgba(158,206,106,0.10)',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'system',
    services: [
      {
        name: 'Authentik',
        description: 'SSO · Identity provider',
        url: 'https://auth.dozydelta.com',
        accentFrom: '#e0af68',
        accentTo: '#bb9af7',
        iconColor: '#e0af68',
        iconBg: 'rgba(224,175,104,0.12)',
        urlColor: '#e0af68',
        urlBg: 'rgba(224,175,104,0.10)',
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
      },
    ],
  },
]

export default sections
