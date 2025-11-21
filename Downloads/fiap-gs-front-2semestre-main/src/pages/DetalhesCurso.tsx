import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

type VideoModulo = {
  id: string
  nome: string
  url: string
  tipo?: 'youtube' | 'local'
}

type Modulo = {
  id: string
  titulo: string
  videos: VideoModulo[]
}

const modulosBaterias: Modulo[] = [
  {
    id: 'modulo-01',
    titulo: 'Módulo 01 - Curso de Bateria',
    videos: [
      { id: 'modulo-01-video-1', nome: 'Vídeo 1', url: 'https://youtu.be/Y8CeM5m92Jk', tipo: 'youtube' as const },
      { id: 'modulo-01-video-2', nome: 'Vídeo 2', url: 'https://youtu.be/tCOgURWNna0', tipo: 'youtube' as const },
      { id: 'modulo-01-video-3', nome: 'Vídeo 3', url: 'https://youtu.be/GStxNKIWOCg', tipo: 'youtube' as const },
      { id: 'modulo-01-video-4', nome: 'Vídeo 4', url: 'https://youtu.be/RVv2HXkg-Wk', tipo: 'youtube' as const },
      { id: 'modulo-01-video-5', nome: 'Vídeo 5', url: 'https://youtu.be/eE9KpPanpNM', tipo: 'youtube' as const }
    ]
  },
  {
    id: 'modulo-02',
    titulo: 'Módulo 02 - Curso de Bateria',
    videos: [
      { id: 'modulo-02-video-1', nome: 'Vídeo 1', url: 'https://youtu.be/SpCmqPe5XjU', tipo: 'youtube' as const },
      { id: 'modulo-02-video-2', nome: 'Vídeo 2', url: 'https://youtu.be/n52mhXdEPq4', tipo: 'youtube' as const },
      { id: 'modulo-02-video-3', nome: 'Vídeo 3', url: 'https://youtu.be/yQHwFFvsJy0', tipo: 'youtube' as const },
      { id: 'modulo-02-video-4', nome: 'Vídeo 4', url: 'https://youtu.be/snlQLv492PQ', tipo: 'youtube' as const },
      { id: 'modulo-02-video-5', nome: 'Vídeo 5', url: 'https://youtu.be/lfR9w_BHGlk', tipo: 'youtube' as const },
      { id: 'modulo-02-video-6', nome: 'Vídeo 6', url: 'https://youtu.be/zBG1fyWkUzE', tipo: 'youtube' as const }
    ]
  },
  {
    id: 'modulo-03',
    titulo: 'Módulo 03 - Módulo de Remoção',
    videos: [
      { id: 'modulo-03-video-1', nome: 'Vídeo 1', url: 'https://youtu.be/SpCmqPe5XjU', tipo: 'youtube' as const },
      { id: 'modulo-03-video-2', nome: 'Vídeo 2', url: 'https://youtu.be/-IHpyT_HxJs', tipo: 'youtube' as const },
      { id: 'modulo-03-video-3', nome: 'Vídeo 3', url: 'https://youtu.be/Ty23mQQQ3sE', tipo: 'youtube' as const },
      { id: 'modulo-03-video-4', nome: 'Vídeo 4', url: 'https://youtu.be/QQSoL8-EWU8', tipo: 'youtube' as const },
      { id: 'modulo-03-video-5', nome: 'Vídeo 5', url: 'https://youtu.be/MQWaGvky1tc', tipo: 'youtube' as const },
      { id: 'modulo-03-video-6', nome: 'Vídeo 6', url: 'https://youtu.be/qvTU_53Mac8', tipo: 'youtube' as const },
      { id: 'modulo-03-video-7', nome: 'Vídeo 7', url: 'https://youtu.be/cKN8ksUdah0', tipo: 'youtube' as const }
    ]
  }
]

// Função auxiliar para converter URLs do YouTube para formato de embed
function getYouTubeEmbedUrl(url: string): string {
  if (url.includes('youtube.com/embed/')) {
    return url
  }
  
  let videoId = ''
  
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0]
  } else if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0]
  } else if (url.includes('youtube.com/embed/')) {
    videoId = url.split('embed/')[1].split('?')[0]
  }
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`
  }
  
  return url
}

function isYouTubeVideo(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

export default function DetalhesCurso() {
  const { moduloId } = useParams<{ moduloId: string }>()
  const navigate = useNavigate()
  const [modulo, setModulo] = useState<Modulo | null>(null)

  useEffect(() => {
    if (moduloId) {
      const moduloEncontrado = modulosBaterias.find(m => m.id === moduloId)
      if (moduloEncontrado) {
        setModulo(moduloEncontrado)
      } else {
        // Redireciona se módulo não encontrado
        navigate('/cursos', { replace: true })
      }
    }
  }, [moduloId, navigate])

  if (!modulo) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-6xl mx-auto relative z-10 text-center">
          <p className="text-white text-xl">Carregando...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          <button
            onClick={() => navigate('/cursos')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <span className="text-2xl">←</span>
            <span className="font-semibold">Voltar aos Cursos</span>
          </button>
          
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {modulo.titulo}
            </h1>
            <p className="text-lg text-white/80 mb-6">
              Módulo do curso especializado em diagnóstico, manutenção e reparo de sistemas de baterias de veículos híbridos e elétricos
            </p>
            <div className="flex gap-6 text-white/70">
              <div>
                <span className="text-sm">Total de vídeos:</span>
                <span className="ml-2 font-semibold text-white">{modulo.videos.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulo.videos.map((video) => (
            <div
              key={video.id}
              className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="mb-4">
                {video.tipo === 'youtube' || isYouTubeVideo(video.url) ? (
                  <div className="w-full rounded-xl bg-black/40 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <iframe
                      src={getYouTubeEmbedUrl(video.url)}
                      title={video.nome}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <video
                    controls
                    className="w-full rounded-xl bg-black/40"
                    preload="metadata"
                  >
                    <source src={video.url} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                )}
              </div>
              <h3 className="text-white font-semibold text-center">
                {video.nome}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

