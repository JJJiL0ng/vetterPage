// 서버 컴포넌트
import RegisterForm from './RegisterForm'

export const metadata = {
  title: 'AI 면접 코치 - 무료 체험',
  description: 'AI 기반 모의 면접 연습 및 피드백 시스템 무료 체험',
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
              AI 면접 코치와 함께하는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                완벽한 면접 준비
              </span>
            </h1>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">실전같은 모의 면접</h3>
                  <p className="text-gray-400">직무별 맞춤형 질문과 실시간 피드백 제공</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">상세한 분석 리포트</h3>
                  <p className="text-gray-400">답변 품질, 전달력, 전문성 등 다각도 분석</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-400">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">맞춤형 개선 가이드</h3>
                  <p className="text-gray-400">AI가 제시하는 구체적인 답변 개선 방안</p>
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