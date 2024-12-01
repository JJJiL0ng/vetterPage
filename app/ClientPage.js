"use client"
import { useEffect } from 'react'

export default function ClientPage() {
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
          <div className="text-2xl font-bold">Vetter</div>
          <div className="space-x-6">
            <a href="#features" className="hover:text-blue-400 transition-colors">기능</a>
            <a href="#benefits" className="hover:text-blue-400 transition-colors">장점</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">문의하기</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/50" />
          <div className="text-center z-10 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI로 진화하는<br />회의 문화
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              더 똑똑하게, 더 효율적으로
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105">
              시작하기
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
                  title: "실시간 분석",
                  description: "AI가 회의 내용을 실시간으로 분석하여 핵심 포인트를 추출합니다."
                },
                {
                  title: "감정 분석",
                  description: "참여자들의 감정 상태와 참여도를 실시간으로 모니터링합니다."
                },
                {
                  title: "개선 제안",
                  description: "더 나은 회의를 위한 맞춤형 개선 방안을 제시합니다."
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
                  title: "시간 절약",
                  description: "회의 시간 30% 감소"
                },
                {
                  title: "생산성 향상",
                  description: "팀 생산성 50% 증가"
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

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 fade-in">문의하기</h2>
            <p className="text-xl text-gray-400 mb-8 fade-in">
              더 나은 회의 문화를 만들어가는 첫걸음을 시작하세요.
            </p>
            <form className="space-y-6 fade-in">
              <input
                type="email"
                placeholder="이메일"
                className="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="문의사항"
                rows="4"
                className="w-full p-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105">
                보내기
              </button>
            </form>
          </div>
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