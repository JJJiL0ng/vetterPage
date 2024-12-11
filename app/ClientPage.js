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
    emailFormSection.scrollIntoView({ behavior: 'smooth' })
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-2 rounded-full text-base transition-all transform hover:scale-105 hover:shadow-lg"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <br/>AI 면접관과 함께<br />완벽한 면접 준비
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
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
            <h2 className="text-4xl font-bold text-center mb-16 fade-in">주요 기능</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "맞춤형 질문 생성",
                  description: "자기소개서를 기반으로 실제 면접에서 나올 수 있는 예상 질문을 생성합니다."
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
                <div key={i} className="bg-gray-900 p-6 rounded-lg fade-in">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 fade-in">도입 효과</h2>
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