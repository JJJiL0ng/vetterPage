import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Upload, Mic, FileText, Building2, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function VetterFeature() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const features = [
    {
      title: "기업 선택 및 자기소개서 분석",
      description: "입사 희망 기업을 선택하고 자기소개서를 입력하거나 파일을 첨부하세요.",
      icon: <Upload className="w-12 h-12 mb-6 text-blue-400" />,
      detail: "AI가 귀하의 자기소개서를 철저히 분석하여 맞춤형 면접을 준비합니다.",
      image: "/vetter1.png",
      alt: "자기소개서 분석 화면"
    },
    {
      title: "맞춤형 질문 생성",
      description: "AI가 기업 특성과 자기소개서를 바탕으로 예상 질문을 생성합니다.",
      icon: <Building2 className="w-12 h-12 mb-6 text-purple-400" />,
      detail: "실제 면접에서 나올 수 있는 날카로운 질문들로 완벽하게 준비하세요.",
      image: "/vetter2.png",
      alt: "맞춤형 질문 생성 화면"
    },
    {
      title: "실시간 면접 시뮬레이션",
      description: "AI 면접관과 실제 면접처럼 자연스러운 대화를 진행합니다.",
      icon: <Mic className="w-12 h-12 mb-6 text-green-400" />,
      detail: "10분 동안 실제 면접과 동일한 긴장감 속에서 연습하세요.",
      image: "/vetter3.png",
      alt: "실시간 면접 시뮬레이션 화면"
    },
    {
      title: "맞춤형 피드백",
      description: "기업 문화에 맞는 상세한 피드백을 받아보세요.",
      icon: <MessageSquare className="w-12 h-12 mb-6 text-yellow-400" />,
      detail: "답변 내용, 어조, 태도 등 다각도의 분석 결과를 제공합니다.",
      image: "/vetter4.png",
      alt: "맞춤형 피드백 화면"
    },
    {
      title: "모범 답안 제시",
      description: "자소서를 기반으로 AI가 제시하는 완벽한 답변으로 실력을 향상시키세요.",
      icon: <FileText className="w-12 h-12 mb-6 text-red-400" />,
      detail: "각 질문에 대한 모범 답안을 학습하여 실전에 대비하세요.",
      image: "/vetter5.png",
      alt: "모범 답안 제시 화면"
    }
  ];

  return (
    <div className="relative bg-transparent py-16">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 px-4">
        당신의 완벽한 면접을 설계합니다
      </h2>

      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div ref={containerRef} className="relative">
          {/* Feature Card */}
          <div className="relative overflow-hidden min-h-[200px]">
            <div className="flex justify-center items-center">
              <div className="relative w-full">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 w-full transition-transform duration-300 ease-out"
                    style={{
                      transform: `translateX(${(index - currentSlide) * 100}%)`,
                      opacity: currentSlide === index ? 1 : 0,
                      visibility: Math.abs(index - currentSlide) <= 1 ? 'visible' : 'hidden'
                    }}
                  >
                    <div className="bg-gray-900/50 p-6 sm:p-8 rounded-xl backdrop-blur-sm w-full max-w-lg mx-auto shadow-lg"
                      style={{
                        backgroundImage: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
                      }}
                    >
                      <div className="text-center">
                        <div className="flex justify-center items-center mb-4">
                          {React.cloneElement(feature.icon, {
                            className: "w-10 h-10 text-blue-400"
                          })}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-base sm:text-lg mb-4 text-blue-400 font-medium leading-relaxed">
                          {feature.description}
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls Container */}
          <div className="flex justify-center items-center mt-8 gap-6">
            {/* Left Button */}
            <button
              onClick={() => setCurrentSlide(prev => (prev === 0 ? features.length - 1 : prev - 1))}
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
              aria-label="이전 슬라이드"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-blue-400 w-10'
                      : 'bg-gray-600 w-2.5 hover:bg-blue-400/50'
                  }`}
                  aria-label={`${index + 1}번 슬라이드로 이동`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() => setCurrentSlide(prev => (prev === features.length - 1 ? 0 : prev + 1))}
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
              aria-label="다음 슬라이드"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}