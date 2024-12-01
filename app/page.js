// page.js (서버 컴포넌트)
import ClientPage from './ClientPage'

// 메타데이터 정적 정의
export const metadata = {
  title: 'Vetter - AI 기반 회의 분석 솔루션',
  description: 'AI 기술을 활용한 회의 분석 및 평가 솔루션. 더 효율적이고 생산적인 회의 문화를 만들어갑니다.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Vetter - AI 기반 회의 분석 솔루션',
    description: 'AI 기술을 활용한 회의 분석 및 평가 솔루션'
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Page() {
  return <ClientPage />
}