"use client"
import { useState } from 'react'
import { useEffect } from 'react'
import MetricsSection from './MetricsSection'
import EmailForm from './emailComponent/emailForm'

export default function ClientPage() {
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false)

  const handleGetStarted = (e) => {
    e.preventDefault()
    setIsEmailFormOpen(true)
    
    // 부드러운 스크롤 애니메이션으로 이메일 폼으로 이동
    const emailFormSection = document.getElementById('email-form-section')
    
    // 원하는 추가 스크롤 오프셋 값을 조정하세요 (단위: px)
    // 양수값 = 더 아래로 스크롤
    // 음수값 = 더 위로 스크롤
    const scrollOffset = 70 // 이 값을 조정해보세요 (예: 100, -100 등)
    
    const elementPosition = emailFormSection.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition + scrollOffset,
      behavior: 'smooth'
    })
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-black min-h-screen text-white">
      <nav className="fixed w-full bg-black bg-opacity-90 z-50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            onClick={handleLogoClick}
            className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition-colors"
          >
            Vetter
          </div>
          <button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-base transition-all transform hover:scale-105 hover:shadow-lg"
          >
            바로 시작하기
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50" />
          <div className="text-center z-10 fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 px-4 leading-tight">
              <br className="hidden sm:block"/>
              AI 면접관과 함께<br />
              완벽한 면접 준비
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300 px-4">
              합격을 위한 맞춤형 모의면접 솔루션
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-xl md:text-2xl transition-all transform hover:scale-105 hover:shadow-lg inline-block"
            >
              바로 시작하기
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 px-4">
              당신의 완벽한 면접을 설계합니다
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "맞춤형 질문 생성",
                  description: "자기소개서를 기반으로 실제 면접에서 나올 수 있는 날카로운 예상 질문을 생성합니다."
                },
                {
                  title: "실시간 피드백",
                  description: "답변 내용, 목소리 톤, 표정까지 다각도로 분석하여 즉각적인 피드백을 제공합니다."
                },
                {
                  title: "상세 분석 리포트",
                  description: "면접 전반에 대한 종합 평가와 구체적인 개선점을 제시합니다."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-gray-900 p-5 sm:p-6 rounded-lg fade-in">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        {/* <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 px-4">
              면접 실력이 한계를 넘어섭니다
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "자신감 상승",
                  description: "면접 불안감 45% 감소"
                },
                {
                  title: "합격률 향상",
                  description: "최종 합격률 38% 증가"
                }
              ].map((benefit, i) => (
                <div key={i} className="text-center fade-in">
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-xl text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Reviews Section */}
        <section id="reviews" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 px-4">
              <span className="block sm:inline">VETTER와 함께</span>{' '}
              <span className="block sm:inline">이미 많은 분들이 성공했습니다</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "예상치 못한 질문들을 던져주었어서 실제 면접에서도 더 침착하게 대처할 수 있었어요. 특히 직무 관련 돌발 질문에서도 당황하지 않고 대답할 수 있게 되었어요. 면접 준비가 막막한 신입 지원자분들께 추천드려요.",
                  author: "S사 기획직군 합격자 최OO님"
                },
                {
                  quote: "평가 항목별로 날카로운 평가를 받으니 어떤 부분을 보완해야 할지 명확했어요. 특히 의사소통 능력이 부족하다는 평가를 받았는데 피드백을 통해 더 효과적으로 면접 준비를 할 수 있었어요.",
                  author: "T사 서버 개발파트 합격자 정OO님"
                },
                {
                  quote: "답변할 때마다 받는 구체적인 피드백 덕분에 제 답변이 어떤 인상을 주는지 알 수 있어서 실전에서도 더 조리있게 말할 수 있었습니다. VETTER와 함께라면 면접이 더 이상 두렵지 않을 것 같아요!",
                  author: "H사 신입공채 합격자 윤OO님"
                }
              ].map((review, i) => (
                <div key={i} className="bg-gray-900 p-6 sm:p-8 rounded-lg fade-in">
                  <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg italic leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <p className="text-blue-400 font-semibold text-sm sm:text-base">
                    {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <MetricsSection />

        {/* Email Form Section */}
        <section id="email-form-section" className="py-20 px-4">
          <EmailForm 
            isOpen={isEmailFormOpen} 
            onClose={() => setIsEmailFormOpen(false)} 
          />
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Vetter. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}