import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { cursosService, type Curso } from '../services/cursosService'
import { aulasCursoService, type AulaCurso } from '../services/aulasCursoService'

type VideoModulo = {
  id: string
  nome: string
  url: string
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
      { id: '106903ba-60de-43ff-89fc-6a717bc57392', nome: 'Vídeo 1', url: '/videos/baterias-vhe/modulo-01/106903ba-60de-43ff-89fc-6a717bc57392.mp4' },
      { id: '2375d400-7f-4f98-851b-2735cd741f08', nome: 'Vídeo 2', url: '/videos/baterias-vhe/modulo-01/2375d400-7f-4f98-851b-2735cd741f08.mp4' },
      { id: '2f68f9f9-1321-463e-b393-f67554f98ae0', nome: 'Vídeo 3', url: '/videos/baterias-vhe/modulo-01/2f68f9f9-1321-463e-b393-f67554f98ae0.mp4' },
      { id: 'affd5761-062b-4cc0-8ade-46db2839000e', nome: 'Vídeo 4', url: '/videos/baterias-vhe/modulo-01/affd5761-062b-4cc0-8ade-46db2839000e.mp4' },
      { id: 'e39b956e-fe99-4b5b-a6ec-a1e4f92edfb7', nome: 'Vídeo 5', url: '/videos/baterias-vhe/modulo-01/e39b956e-fe99-4b5b-a6ec-a1e4f92edfb7.mp4' }
    ]
  },
  {
    id: 'modulo-02',
    titulo: 'Módulo 02 - Curso de Bateria',
    videos: [
      { id: '0c435122-ed29-42ea-890f-93784a0f6132', nome: 'Vídeo 1', url: '/videos/baterias-vhe/modulo-02/0c435122-ed29-42ea-890f-93784a0f6132.mp4' },
      { id: '128fbb53-0344-4805-acc1-169e771c5c95', nome: 'Vídeo 2', url: '/videos/baterias-vhe/modulo-02/128fbb53-0344-4805-acc1-169e771c5c95.mp4' },
      { id: '33e0ef8d-3750-4d14-9df2-5761dfa912ff', nome: 'Vídeo 3', url: '/videos/baterias-vhe/modulo-02/33e0ef8d-3750-4d14-9df2-5761dfa912ff.mp4' },
      { id: '378ef87d-c582-4e02-a8b2-564bc4db5b24', nome: 'Vídeo 4', url: '/videos/baterias-vhe/modulo-02/378ef87d-c582-4e02-a8b2-564bc4db5b24.mp4' },
      { id: '40c6c6e5-590f-4e75-b6f8-76b93b8cab3a', nome: 'Vídeo 5', url: '/videos/baterias-vhe/modulo-02/40c6c6e5-590f-4e75-b6f8-76b93b8cab3a.mp4' },
      { id: 'fdee1ab9-33cb-41fb-8eb9-1bdad725bf37', nome: 'Vídeo 6', url: '/videos/baterias-vhe/modulo-02/fdee1ab9-33cb-41fb-8eb9-1bdad725bf37.mp4' }
    ]
  },
  {
    id: 'modulo-03',
    titulo: 'Módulo 03 - Módulo de Remoção',
    videos: [
      { id: '48a3a3ee-5372-4549-8e94-7f19722992d5', nome: 'Vídeo 1', url: '/videos/baterias-vhe/modulo-03/48a3a3ee-5372-4549-8e94-7f19722992d5.mp4' },
      { id: '4f0273bc-821f-453d-ad69-d469fd6eb5d2', nome: 'Vídeo 2', url: '/videos/baterias-vhe/modulo-03/4f0273bc-821f-453d-ad69-d469fd6eb5d2.mp4' },
      { id: '86b45895-2200-4a9a-9375-b06c95742fc2', nome: 'Vídeo 3', url: '/videos/baterias-vhe/modulo-03/86b45895-2200-4a9a-9375-b06c95742fc2.mp4' },
      { id: 'a44ce386-907f-4c94-9e1f-5a683f865975', nome: 'Vídeo 4', url: '/videos/baterias-vhe/modulo-03/a44ce386-907f-4c94-9e1f-5a683f865975.mp4' },
      { id: 'ba8cba8a-16dc-436e-9a24-17f503a4bfea', nome: 'Vídeo 5', url: '/videos/baterias-vhe/modulo-03/ba8cba8a-16dc-436e-9a24-17f503a4bfea.mp4' },
      { id: 'e5e0c763-64d3-4369-a6a6-02b23d68c715', nome: 'Vídeo 6', url: '/videos/baterias-vhe/modulo-03/e5e0c763-64d3-4369-a6a6-02b23d68c715.mp4' },
      { id: 'f9fb2559-b989-46fc-a4f3-8de92ec0c89f', nome: 'Vídeo 7', url: '/videos/baterias-vhe/modulo-03/f9fb2559-b989-46fc-a4f3-8de92ec0c89f.mp4' }
    ]
  }
]

type PdfCategoria = {
  id: string
  nome: string
  arquivos: { nome: string; url: string; nomeOriginal: string }[]
}

const categoriasBiblioteca: PdfCategoria[] = [
  {
    id: 'audi',
    nome: 'Audi',
    arquivos: [
      { nome: 'AUDI E-TRON GT', url: '/pdfs/biblioteca-vhe/Manual - AUDI E-TRON GT (F8).pdf', nomeOriginal: 'Manual - AUDI E-TRON GT (F8).pdf' }
    ]
  },
  {
    id: 'bmw',
    nome: 'BMW',
    arquivos: [
      { nome: 'BMW I3', url: '/pdfs/biblioteca-vhe/Manual - BMW I3.pdf', nomeOriginal: 'Manual - BMW I3.pdf' },
      { nome: 'BMW I4', url: '/pdfs/biblioteca-vhe/Manual - BMW I4.pdf', nomeOriginal: 'Manual - BMW I4.pdf' },
      { nome: 'BMW I8', url: '/pdfs/biblioteca-vhe/Manual - BMW I8.pdf', nomeOriginal: 'Manual - BMW I8.pdf' },
      { nome: 'BMW IX', url: '/pdfs/biblioteca-vhe/Manual - BMW IX.pdf', nomeOriginal: 'Manual - BMW IX.pdf' },
      { nome: 'BMW IX3', url: '/pdfs/biblioteca-vhe/Manual - BMW IX3.pdf', nomeOriginal: 'Manual - BMW IX3.pdf' }
    ]
  },
  {
    id: 'byd',
    nome: 'BYD',
    arquivos: [
      { nome: 'BYD ATTO3', url: '/pdfs/biblioteca-vhe/Manual - BYD ATTO3.pdf', nomeOriginal: 'Manual - BYD ATTO3.pdf' },
      { nome: 'BYD HAN', url: '/pdfs/biblioteca-vhe/Manual - BYD HAN.pdf', nomeOriginal: 'Manual - BYD HAN.pdf' },
      { nome: 'BYD TANG', url: '/pdfs/biblioteca-vhe/Manual - BYD TANG.pdf', nomeOriginal: 'Manual - BYD TANG.pdf' }
    ]
  },
  {
    id: 'chevrolet',
    nome: 'Chevrolet',
    arquivos: [
      { nome: 'CHEVROLET VOLT', url: '/pdfs/biblioteca-vhe/Manual - CHEVROLET VOLT.pdf', nomeOriginal: 'Manual - CHEVROLET VOLT.pdf' }
    ]
  },
  {
    id: 'citroen',
    nome: 'Citroën',
    arquivos: [
      { nome: 'CITROEN SPACE TOURER', url: '/pdfs/biblioteca-vhe/Manual - CITROEN SPACE TOURER.pdf', nomeOriginal: 'Manual - CITROEN SPACE TOURER.pdf' },
      { nome: 'CITROEN SPACE TOURER (2)', url: '/pdfs/biblioteca-vhe/Manual - CITROEN SPACE TOURER (1).pdf', nomeOriginal: 'Manual - CITROEN SPACE TOURER (1).pdf' }
    ]
  },
  {
    id: 'cupra',
    nome: 'CUPRA',
    arquivos: [
      { nome: 'CUPRA BORN', url: '/pdfs/biblioteca-vhe/Manual - CUPRA BORN(K11).pdf', nomeOriginal: 'Manual - CUPRA BORN(K11).pdf' },
      { nome: 'CUPRA FORMENTOR', url: '/pdfs/biblioteca-vhe/Manual - CUPRA FORMENTOR(KM).pdf', nomeOriginal: 'Manual - CUPRA FORMENTOR(KM).pdf' }
    ]
  },
  {
    id: 'dacia',
    nome: 'Dacia',
    arquivos: [
      { nome: 'DACIA SPRING', url: '/pdfs/biblioteca-vhe/Manual - DACIA SPRING.pdf', nomeOriginal: 'Manual - DACIA SPRING.pdf' }
    ]
  },
  {
    id: 'ds',
    nome: 'DS',
    arquivos: [
      { nome: 'DS DS4', url: '/pdfs/biblioteca-vhe/Manual - DS4.pdf', nomeOriginal: 'Manual - DS4.pdf' },
      { nome: 'DS DS5', url: '/pdfs/biblioteca-vhe/Manual - DS DS5.pdf', nomeOriginal: 'Manual - DS DS5.pdf' },
      { nome: 'DS DS7', url: '/pdfs/biblioteca-vhe/Manual - DS DS7.pdf', nomeOriginal: 'Manual - DS DS7.pdf' },
      { nome: 'DS DS9', url: '/pdfs/biblioteca-vhe/Manuais - DS DS9.pdf', nomeOriginal: 'Manuais - DS DS9.pdf' }
    ]
  },
  {
    id: 'fiat',
    nome: 'Fiat',
    arquivos: [
      { nome: 'FIAT 500', url: '/pdfs/biblioteca-vhe/Manual - FIAT - 500.pdf', nomeOriginal: 'Manual - FIAT - 500.pdf' }
    ]
  },
  {
    id: 'ford',
    nome: 'Ford',
    arquivos: [
      { nome: 'FORD KUGA', url: '/pdfs/biblioteca-vhe/Manual - FORD KUGA.pdf', nomeOriginal: 'Manual - FORD KUGA.pdf' },
      { nome: 'FORD TRANSIT', url: '/pdfs/biblioteca-vhe/Manual - FORD TRANSIT.pdf', nomeOriginal: 'Manual - FORD TRANSIT.pdf' },
      { nome: 'Ford Fusion 2020', url: '/pdfs/biblioteca-vhe/Manual Ford Fusion 2020  (1).pdf', nomeOriginal: 'Manual Ford Fusion 2020  (1).pdf' }
    ]
  },
  {
    id: 'genesis',
    nome: 'Genesis',
    arquivos: [
      { nome: 'GENESIS GV60', url: '/pdfs/biblioteca-vhe/Manual - GENESIS-GV60.pdf', nomeOriginal: 'Manual - GENESIS-GV60.pdf' },
      { nome: 'GENESIS GV70', url: '/pdfs/biblioteca-vhe/Manual - GENESIS-GV70.pdf', nomeOriginal: 'Manual - GENESIS-GV70.pdf' }
    ]
  },
  {
    id: 'honda',
    nome: 'Honda',
    arquivos: [
      { nome: 'HONDA CR-V', url: '/pdfs/biblioteca-vhe/Manual - HONDA CR-V.pdf', nomeOriginal: 'Manual - HONDA CR-V.pdf' },
      { nome: 'HONDA E', url: '/pdfs/biblioteca-vhe/Manual - HONDA E.pdf', nomeOriginal: 'Manual - HONDA E.pdf' }
    ]
  },
  {
    id: 'hyundai',
    nome: 'Hyundai',
    arquivos: [
      { nome: 'HYUNDAI IONIC 5', url: '/pdfs/biblioteca-vhe/Manual - HYUNDAI IONIC 5.pdf', nomeOriginal: 'Manual - HYUNDAI IONIC 5.pdf' },
      { nome: 'HYUNDAI IONIC 6', url: '/pdfs/biblioteca-vhe/Manual - HYUNDAI IONIC 6.pdf', nomeOriginal: 'Manual - HYUNDAI IONIC 6.pdf' }
    ]
  },
  {
    id: 'infiniti',
    nome: 'Infiniti',
    arquivos: [
      { nome: 'INFINITI Q50', url: '/pdfs/biblioteca-vhe/Manual - INFINIT Q50.pdf', nomeOriginal: 'Manual - INFINIT Q50.pdf' },
      { nome: 'INFINITI Q70', url: '/pdfs/biblioteca-vhe/Manual - INFINIT Q70.pdf', nomeOriginal: 'Manual - INFINIT Q70.pdf' },
      { nome: 'INFINITI QX60', url: '/pdfs/biblioteca-vhe/Manual - INFINIT QX60.pdf', nomeOriginal: 'Manual - INFINIT QX60.pdf' }
    ]
  },
  {
    id: 'jac',
    nome: 'JAC',
    arquivos: [
      { nome: 'JAC IEV7S', url: '/pdfs/biblioteca-vhe/Manual - JAC- IEV7S.pdf', nomeOriginal: 'Manual - JAC- IEV7S.pdf' }
    ]
  },
  {
    id: 'jaguar',
    nome: 'Jaguar',
    arquivos: [
      { nome: 'JAGUAR E PACE', url: '/pdfs/biblioteca-vhe/Manual - JAGUAR E PACE.pdf', nomeOriginal: 'Manual - JAGUAR E PACE.pdf' },
      { nome: 'JAGUAR F PACE', url: '/pdfs/biblioteca-vhe/Manual - JAGUAR F PACE.pdf', nomeOriginal: 'Manual - JAGUAR F PACE.pdf' },
      { nome: 'JAGUAR I PACE', url: '/pdfs/biblioteca-vhe/Manual - JAGUAR I PACE.pdf', nomeOriginal: 'Manual - JAGUAR I PACE.pdf' }
    ]
  },
  {
    id: 'jeep',
    nome: 'Jeep',
    arquivos: [
      { nome: 'JEEP RENEGADE', url: '/pdfs/biblioteca-vhe/Manual - JEEP RENEGADE.pdf', nomeOriginal: 'Manual - JEEP RENEGADE.pdf' },
      { nome: 'JEEP COMPASS', url: '/pdfs/biblioteca-vhe/Manual - JEEPCOMPASS.pdf', nomeOriginal: 'Manual - JEEPCOMPASS.pdf' },
      { nome: 'Jeep Compass PHEV - Segurança', url: '/pdfs/biblioteca-vhe/Jeep Compass PHEV - Segurança e Operação.pdf', nomeOriginal: 'Jeep Compass PHEV - Segurança e Operação.pdf' }
    ]
  },
  {
    id: 'land-rover',
    nome: 'Land Rover',
    arquivos: [
      { nome: 'LAND ROVER RR EVOQUE', url: '/pdfs/biblioteca-vhe/Manual - LANGE ROVER RR EVOQUE.pdf', nomeOriginal: 'Manual - LANGE ROVER RR EVOQUE.pdf' },
      { nome: 'LAND ROVER RR SPORT', url: '/pdfs/biblioteca-vhe/Manual - LANGE ROVER RR SPORT.pdf', nomeOriginal: 'Manual - LANGE ROVER RR SPORT.pdf' }
    ]
  },
  {
    id: 'maxus',
    nome: 'Maxus',
    arquivos: [
      { nome: 'MAXUS DEVIVER 3', url: '/pdfs/biblioteca-vhe/Manual - MAXUS DEVIVER 3.pdf', nomeOriginal: 'Manual - MAXUS DEVIVER 3.pdf' },
      { nome: 'MAXUS DEVIVER 9', url: '/pdfs/biblioteca-vhe/Manual - MAXUS DEVIVER 9.pdf', nomeOriginal: 'Manual - MAXUS DEVIVER 9.pdf' }
    ]
  },
  {
    id: 'mercedes',
    nome: 'Mercedes-Benz',
    arquivos: [
      { nome: 'MERCEDES BENZ Vito', url: '/pdfs/biblioteca-vhe/Manual - MERCEDES BENZ-Vito.pdf', nomeOriginal: 'Manual - MERCEDES BENZ-Vito.pdf' }
    ]
  },
  {
    id: 'mg',
    nome: 'MG',
    arquivos: [
      { nome: 'MG EHS', url: '/pdfs/biblioteca-vhe/Manual - MG - EHS.pdf', nomeOriginal: 'Manual - MG - EHS.pdf' },
      { nome: 'MG ZS', url: '/pdfs/biblioteca-vhe/Manual - MG - ZS.pdf', nomeOriginal: 'Manual - MG - ZS.pdf' }
    ]
  },
  {
    id: 'mini',
    nome: 'Mini',
    arquivos: [
      { nome: 'MINI COOPER', url: '/pdfs/biblioteca-vhe/Manual - MINI COOPER.pdf', nomeOriginal: 'Manual - MINI COOPER.pdf' },
      { nome: 'MINI COUNTRYMAN', url: '/pdfs/biblioteca-vhe/Manual - MINI COUNTRYMAN.pdf', nomeOriginal: 'Manual - MINI COUNTRYMAN.pdf' }
    ]
  },
  {
    id: 'mitsubishi',
    nome: 'Mitsubishi',
    arquivos: [
      { nome: 'MITSUBISHI I-MIEV', url: '/pdfs/biblioteca-vhe/Manual - MITSUBISHI - I-MIEV.pdf', nomeOriginal: 'Manual - MITSUBISHI - I-MIEV.pdf' }
    ]
  },
  {
    id: 'nio',
    nome: 'NIO',
    arquivos: [
      { nome: 'NIO E7L', url: '/pdfs/biblioteca-vhe/Manual - NIO E7L.pdf', nomeOriginal: 'Manual - NIO E7L.pdf' },
      { nome: 'NIO ET7', url: '/pdfs/biblioteca-vhe/Manual - NIO ET7.pdf', nomeOriginal: 'Manual - NIO ET7.pdf' }
    ]
  },
  {
    id: 'nissan',
    nome: 'Nissan',
    arquivos: [
      { nome: 'NISSAN TONWSTAR', url: '/pdfs/biblioteca-vhe/Manual - NISSAN TONWSTAR.pdf', nomeOriginal: 'Manual - NISSAN TONWSTAR.pdf' },
      { nome: 'NISSAN 2014 - Sistema Elétrico VE', url: '/pdfs/biblioteca-vhe/Manual NISSAN 2014 - Sistema Elétrico VE.pdf', nomeOriginal: 'Manual NISSAN 2014 - Sistema Elétrico VE.pdf' },
      { nome: 'Leaf 2014 - EV Battery System', url: '/pdfs/biblioteca-vhe/Leaf+2014+-+EV+Battery+System[180-259].pt.pdf', nomeOriginal: 'Leaf+2014+-+EV+Battery+System[180-259].pt.pdf' }
    ]
  },
  {
    id: 'opel',
    nome: 'Opel',
    arquivos: [
      { nome: 'OPEL ZAFIRA E', url: '/pdfs/biblioteca-vhe/Manual - OPEL ZAFIRA E.pdf', nomeOriginal: 'Manual - OPEL ZAFIRA E.pdf' },
      { nome: 'OPEL VIVARO E', url: '/pdfs/biblioteca-vhe/Manual - OPEL-VIVARO E.pdf', nomeOriginal: 'Manual - OPEL-VIVARO E.pdf' }
    ]
  },
  {
    id: 'peugeot',
    nome: 'Peugeot',
    arquivos: [
      { nome: 'PEUGEOT ION', url: '/pdfs/biblioteca-vhe/Manual - PEGEOUT ION.pdf', nomeOriginal: 'Manual - PEGEOUT ION.pdf' }
    ]
  },
  {
    id: 'polestar',
    nome: 'Polestar',
    arquivos: [
      { nome: 'POLESTAR 2', url: '/pdfs/biblioteca-vhe/Manual - POLESTAR- 2.pdf', nomeOriginal: 'Manual - POLESTAR- 2.pdf' }
    ]
  },
  {
    id: 'porsche',
    nome: 'Porsche',
    arquivos: [
      { nome: 'PORSHE TAYCAN', url: '/pdfs/biblioteca-vhe/Manual - PORSHE-TAYCAN.pdf', nomeOriginal: 'Manual - PORSHE-TAYCAN.pdf' }
    ]
  },
  {
    id: 'renault',
    nome: 'Renault',
    arquivos: [
      { nome: 'REANAULT TWINGO', url: '/pdfs/biblioteca-vhe/Manual - REANAULT TWINGO.pdf', nomeOriginal: 'Manual - REANAULT TWINGO.pdf' },
      { nome: 'RENAULT TWIZY', url: '/pdfs/biblioteca-vhe/Manual - RENAULT TWIZY.pdf', nomeOriginal: 'Manual - RENAULT TWIZY.pdf' },
      { nome: 'RENAULT ZOE', url: '/pdfs/biblioteca-vhe/Manual - RENAULT ZOE.pdf', nomeOriginal: 'Manual - RENAULT ZOE.pdf' }
    ]
  },
  {
    id: 'seres',
    nome: 'Seres',
    arquivos: [
      { nome: 'SERES 3', url: '/pdfs/biblioteca-vhe/Manual - SERES - 3_merged.pdf', nomeOriginal: 'Manual - SERES - 3_merged.pdf' }
    ]
  },
  {
    id: 'skoda',
    nome: 'Škoda',
    arquivos: [
      { nome: 'SKODA CITIGO', url: '/pdfs/biblioteca-vhe/Manual - SKODA CITIGO.pdf', nomeOriginal: 'Manual - SKODA CITIGO.pdf' },
      { nome: 'SKODA SUPERB', url: '/pdfs/biblioteca-vhe/Manual - SKODA SUPERB.pdf', nomeOriginal: 'Manual - SKODA SUPERB.pdf' }
    ]
  },
  {
    id: 'smart',
    nome: 'Smart',
    arquivos: [
      { nome: 'SMART FORFOUR', url: '/pdfs/biblioteca-vhe/Manual - SMART-FORFOUR.pdf', nomeOriginal: 'Manual - SMART-FORFOUR.pdf' },
      { nome: 'SMART FORTWO', url: '/pdfs/biblioteca-vhe/Manual - SMART-FORTWO.pdf', nomeOriginal: 'Manual - SMART-FORTWO.pdf' }
    ]
  },
  {
    id: 'tesla',
    nome: 'Tesla',
    arquivos: [
      { nome: 'TESLA MODEL 3', url: '/pdfs/biblioteca-vhe/Manual - TESLA MODEL 3.pdf', nomeOriginal: 'Manual - TESLA MODEL 3.pdf' },
      { nome: 'Tesla Modelo 3', url: '/pdfs/biblioteca-vhe/Manual - Tesla Modelo 3.pdf', nomeOriginal: 'Manual - Tesla Modelo 3.pdf' },
      { nome: 'TESLA MODELO S', url: '/pdfs/biblioteca-vhe/Manual - TESLA MODELO S.pdf', nomeOriginal: 'Manual - TESLA MODELO S.pdf' },
      { nome: 'TESLA MODELO X', url: '/pdfs/biblioteca-vhe/Manual - TESLA MODELO X.pdf', nomeOriginal: 'Manual - TESLA MODELO X.pdf' },
      { nome: 'TESLA MODELO Y', url: '/pdfs/biblioteca-vhe/Manual - TESLA MODELO Y.pdf', nomeOriginal: 'Manual - TESLA MODELO Y.pdf' }
    ]
  },
  {
    id: 'toyota',
    nome: 'Toyota',
    arquivos: [
      { nome: 'TOYOTA YARIS CROSS', url: '/pdfs/biblioteca-vhe/Manual - TOYOTA YARIS CROSS.pdf', nomeOriginal: 'Manual - TOYOTA YARIS CROSS.pdf' },
      { nome: 'Corola Híbrido - Acionamento', url: '/pdfs/biblioteca-vhe/Manual Corola Híbrido - Acionamento de Sinergia Híbrido Gasolina-Elétrico.pdf', nomeOriginal: 'Manual Corola Híbrido - Acionamento de Sinergia Híbrido Gasolina-Elétrico.pdf' }
    ]
  },
  {
    id: 'volkswagen',
    nome: 'Volkswagen',
    arquivos: [
      { nome: 'VOLKSWAGEN E UP', url: '/pdfs/biblioteca-vhe/Manual - VOLKSWAGEN -E UP.pdf', nomeOriginal: 'Manual - VOLKSWAGEN -E UP.pdf' },
      { nome: 'VOLKSWAGEN TIGUAN II', url: '/pdfs/biblioteca-vhe/Manual - VOLKSWAGEN -TIGUAN II.pdf', nomeOriginal: 'Manual - VOLKSWAGEN -TIGUAN II.pdf' },
      { nome: 'Manual Técnico e-up Elétrico', url: '/pdfs/biblioteca-vhe/Manual Técnico para Repração do e-up Elétrico traduzido.pdf', nomeOriginal: 'Manual Técnico para Repração do e-up Elétrico traduzido.pdf' }
    ]
  },
  {
    id: 'volvo',
    nome: 'Volvo',
    arquivos: [
      { nome: 'VOLVO XC40', url: '/pdfs/biblioteca-vhe/Manual - VOLVO XC40.pdf', nomeOriginal: 'Manual - VOLVO XC40.pdf' },
      { nome: 'VOLVO XC60', url: '/pdfs/biblioteca-vhe/Manual - VOLVO XC60.pdf', nomeOriginal: 'Manual - VOLVO XC60.pdf' },
      { nome: 'VOLVO XC90', url: '/pdfs/biblioteca-vhe/Manual - VOLVO XC90.pdf', nomeOriginal: 'Manual - VOLVO XC90.pdf' }
    ]
  },
  {
    id: 'outros',
    nome: 'Outros',
    arquivos: [
      { nome: 'AIWAYS U5', url: '/pdfs/biblioteca-vhe/Manual - AIWAYS U5.pdf', nomeOriginal: 'Manual - AIWAYS U5.pdf' },
      { nome: 'EUNIQ 5', url: '/pdfs/biblioteca-vhe/Manual - EUNIQ 5.pdf', nomeOriginal: 'Manual - EUNIQ 5.pdf' },
      { nome: 'Hummer EV', url: '/pdfs/biblioteca-vhe/Manual Hummer EV.pdf', nomeOriginal: 'Manual Hummer EV.pdf' },
      { nome: 'ORA FUNKY CAT', url: '/pdfs/biblioteca-vhe/Manual ORA FUNKY CAT.pdf', nomeOriginal: 'Manual ORA FUNKY CAT.pdf' },
      { nome: 'RICH 6EV Elétrico', url: '/pdfs/biblioteca-vhe/Manual Técnico -  RICH 6EV Elétrico.pdf', nomeOriginal: 'Manual Técnico -  RICH 6EV Elétrico.pdf' },
      { nome: 'XPENG G3', url: '/pdfs/biblioteca-vhe/Manual - XPENG - G3_merged.pdf', nomeOriginal: 'Manual - XPENG - G3_merged.pdf' },
      { nome: 'Sistema de Bateria Dongfeng', url: '/pdfs/biblioteca-vhe/Sistema de Bateria de Alimentação - Dongfeng Motor.pdf', nomeOriginal: 'Sistema de Bateria de Alimentação - Dongfeng Motor.pdf' }
    ]
  }
]

export default function Cursos() {
  const [mostrarDetalhesBaterias, setMostrarDetalhesBaterias] = useState(false)
  const [mostrarBiblioteca, setMostrarBiblioteca] = useState(false)
  const [cursos, setCursos] = useState<Curso[]>([])
  const [aulas, setAulas] = useState<AulaCurso[]>([])
  const [cursoSelecionado, setCursoSelecionado] = useState<Curso | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    carregarCursos()
  }, [])

  const carregarCursos = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await cursosService.listarTodos(true) // Apenas cursos ativos
      if (response.data) {
        setCursos(response.data)
      } else {
        setError(response.message || 'Erro ao carregar cursos')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    } finally {
      setLoading(false)
    }
  }

  const carregarAulas = async (cursoId: number) => {
    try {
      const response = await aulasCursoService.listarTodos(cursoId, true) // Apenas aulas ativas
      if (response.data) {
        setAulas(response.data)
      }
    } catch (err) {
      console.error('Erro ao carregar aulas:', err)
    }
  }

  const handleVerDetalhes = async (curso: Curso) => {
    setCursoSelecionado(curso)
    if (curso.id) {
      await carregarAulas(curso.id)
      setMostrarDetalhesBaterias(true)
    }
  }

  if (mostrarDetalhesBaterias && cursoSelecionado) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <button
              onClick={() => {
                setMostrarDetalhesBaterias(false)
                setCursoSelecionado(null)
                setAulas([])
              }}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <span className="text-2xl">←</span>
              <span className="font-semibold">Voltar aos Cursos</span>
            </button>
            
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {cursoSelecionado.titulo}
              </h1>
              {cursoSelecionado.descricao && (
                <p className="text-lg text-white/80 mb-6">
                  {cursoSelecionado.descricao}
                </p>
              )}
            </div>
          </div>

          {aulas.length > 0 ? (
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Aulas do Curso
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aulas.map((aula) => (
                    <div
                      key={aula.id}
                      className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      {aula.url && (
                        <div className="mb-4">
                          <div className="relative w-full aspect-video rounded-xl bg-black/40 overflow-hidden">
                            {aula.url.includes('youtube.com') || aula.url.includes('youtu.be') ? (
                              <iframe
                                src={aula.url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={aula.titulo}
                              />
                            ) : (
                              <video
                                controls
                                className="w-full h-full"
                                preload="metadata"
                              >
                                <source src={aula.url} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                              </video>
                            )}
                          </div>
                        </div>
                      )}
                      <h3 className="text-white font-semibold text-center mb-2">
                        {aula.titulo}
                      </h3>
                      {aula.descricao && (
                        <p className="text-white/70 text-sm text-center">
                          {aula.descricao}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 text-center">
              <p className="text-white/80 text-lg">
                Este curso ainda não possui aulas cadastradas.
              </p>
            </div>
          )}
        </div>
      </section>
    )
  }

  if (mostrarBiblioteca) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <button
              onClick={() => setMostrarBiblioteca(false)}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <span className="text-2xl">←</span>
              <span className="font-semibold">Voltar aos Cursos</span>
            </button>
            
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Biblioteca Automotiva VHE
              </h1>
              <p className="text-lg text-white/80 mb-6">
                Coleção completa de manuais técnicos e documentos especializados de veículos híbridos e elétricos
              </p>
              <div className="flex gap-6 text-white/70">
                <div>
                  <span className="text-sm">Total de categorias:</span>
                  <span className="ml-2 font-semibold text-white">{categoriasBiblioteca.length}</span>
                </div>
                <div>
                  <span className="text-sm">Total de documentos:</span>
                  <span className="ml-2 font-semibold text-white">
                    {categoriasBiblioteca.reduce((acc, cat) => acc + cat.arquivos.length, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {categoriasBiblioteca.map((categoria) => (
              <div
                key={categoria.id}
                className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-4xl">📄</span>
                  {categoria.nome}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoria.arquivos.map((arquivo, index) => (
                    <a
                      key={index}
                      href={arquivo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/60 backdrop-blur-md border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-400/50 hover:bg-black/80 transition-all duration-300 flex items-center gap-3 group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          PDF
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors truncate">
                          {arquivo.nome}
                        </h3>
                        <p className="text-white/60 text-xs mt-1 truncate">
                          {arquivo.nomeOriginal}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (loading) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-6xl mx-auto relative z-10 text-center">
          <p className="text-white/80 text-lg">Carregando cursos...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-4 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
        <div className="container max-w-6xl mx-auto relative z-10 text-center">
          <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6">
            <p className="text-red-200">{error}</p>
            <button
              onClick={carregarCursos}
              className="mt-4 btn btn-primary"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/30 to-black/40"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-[0_0_20px_rgba(0,212,255,0.5)]">
            <span className="text-3xl">📚</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cursos e Formação Profissional
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Capacitação completa em veículos híbridos e elétricos com metodologia exclusiva e resultados comprovados. 
            Até 7x mais retorno financeiro em relação ao modelo tradicional.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {cursos.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {cursos.map((curso) => (
              <div 
                key={curso.id}
                className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-white mb-4">{curso.titulo}</h2>
                {curso.descricao && (
                  <p className="text-white/90 mb-6">{curso.descricao}</p>
                )}

                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm text-white/70">
                    {curso.ativo === 'S' ? (
                      <span className="text-green-400">● Disponível</span>
                    ) : (
                      <span className="text-gray-400">● Indisponível</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleVerDetalhes(curso)}
                    className="btn btn-primary px-6 py-2 hover:opacity-90 transition-opacity"
                  >
                    Ver Aulas
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 text-center mb-16">
            <p className="text-white/80 text-lg">
              Nenhum curso disponível no momento.
            </p>
          </div>
        )}

        <div className="bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">O Que Você Vai Aprender</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-white font-semibold mb-2">Técnicas Avançadas</h3>
              <p className="text-white/80 text-sm">
                Diagnóstico e reparo de sistemas híbridos e elétricos
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Segurança em Alta Tensão</h3>
              <p className="text-white/80 text-sm">
                Práticas seguras para trabalhar com sistemas de alta tensão
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-white font-semibold mb-2">Gestão Financeira</h3>
              <p className="text-white/80 text-sm">
                Precificação e gestão de lucros para maximizar resultados
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-3xl p-12 border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Entre em contato conosco e descubra como podemos transformar sua carreira
          </p>
          <Link 
            to="/faq" 
            className="btn btn-primary px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  )
}

