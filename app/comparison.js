"use client"
import React from 'react'

const PriceComparison = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            <span className="block sm:inline">비용 부담 없이</span>{' '}
            <span className="block sm:inline">AI 면접관과 함께 성장하세요</span>
          </h2>
          <p className="text-gray-400 text-lg">
            <span className="block sm:inline">기존 모의면접 학원 대비</span>{' '}
            <span className="block sm:inline">합리적인 비용으로 시작하세요</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 기존 모의면접 카드 */}
          <div className="bg-gray-900 rounded-2xl p-8 fade-in">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-300 mb-6">일반 모의면접 학원</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">₩150,000</span>
                <span className="text-gray-400 ml-2">/ 1회</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  1회성 피드백만 제공
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  시간과 장소 제약
                </div>
                <div className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  높은 비용 부담
                </div>
              </div>
            </div>
          </div>

          {/* Vetter AI 모의면접 카드 */}
          <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20 fade-in">
            <div className="absolute -top-4 right-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1.5 rounded-full text-sm">
                추천
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">Vetter AI 모의면접</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">₩19,800</span>
                <span className="text-gray-300 ml-2">/ 1일 무제한</span>
              </div>
              <p className="text-blue-400 text-sm mb-8">합리적인 가격</p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  실시간 AI 피드백 무제한 제공
                </div>
                <div className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  언제 어디서나 연습 가능
                </div>
                <div className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  분석 자료 무기한 보관
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-8 fade-in">
          * 1일권 구매 시 24시간 동안 무제한으로 AI 모의면접을 이용할 수 있습니다.
        </p>
      </div>
    </section>
  )
}

export default PriceComparison