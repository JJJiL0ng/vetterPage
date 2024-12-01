// 서버 컴포넌트
import RegisterForm from './RegisterForm'

export const metadata = {
  title: 'Vetter - 사전 등록',
  description: '더 나은 회의 문화를 위한 Vetter의 1개월 무료 체험 사전 등록',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="py-6">
        </nav>
        
        <div className="flex min-h-[calc(100vh-88px)]">
          {/* 왼쪽: 설명 섹션 */}
          <div className="hidden lg:flex lg:w-1/2 flex-col justify-center pr-20">
            <h1 className="text-5xl font-bold mb-8">
              AI 기반 회의 분석 솔루션<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                1개월 무료 체험
              </span>
            </h1>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">정밀 회의 분석</h3>
                  <p className="text-gray-400">AI가 회의 내용을 심층 분석하여 핵심 포인트를 추출</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">분야에 맞는 맞춤형 평가</h3>
                  <p className="text-gray-400">분야에 맞는 전문 평가를 통해 회의 품질을 평가</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-400">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">피드백 제시</h3>
                  <p className="text-gray-400">데이터 기반의 회의 개선 방안 제시</p>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 등록 폼 */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}