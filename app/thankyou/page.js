import React from 'react'
import Link from 'next/link'

export default function RedirectPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-800 p-8 text-center">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              VETTER 서비스 안내
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg sm:text-xl">
              VETTER에 큰 관심을 보여주셔서 진심으로 감사드립니다.
            </p>

            <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">
                서비스 출시 안내
              </h2>
              <p className="mb-4">
                VETTER는 현재 개발 진행 중이며, <span className="text-blue-400 font-semibold">2025년 초 정식 출시</span>를 목표로 하고 있습니다.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm bg-blue-900/20 rounded-lg p-4">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>
                  결제는 진행되지 않았으며, 어떠한 금액도 청구되지 않았습니다.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">
                사전 등록 혜택
              </h2>
              <p className="mb-4">
                서비스에 관심을 보여주신 감사의 의미로,<br className="hidden sm:block" />
                <span className="text-blue-400 font-semibold">무료 3일 이용권</span>을 제공해 드립니다.
              </p>
              <p className="text-sm">
                입력하신 연락처로 사전 등록 쿠폰이 발송될 예정입니다.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 text-sm">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">
                개인정보 보호
              </h2>
              <p>
                수집된 모든 개인정보는 사전 등록 쿠폰 발송 후 즉시 파기되며,<br className="hidden sm:block" />
                다른 용도로 활용되지 않음을 약속드립니다.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
            >
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
