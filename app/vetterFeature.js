import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Upload, Mic, FileText, Building2, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function VetterFeature() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideRef = useRef(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const features = [
    {
      title: "기업 선택 및 자기소개서 분석",
      description: "입사 희망 기업을 선택하고 자기소개서를 입력하거나 파일을 첨부하세요.",
      icon: <Upload className="w-12 h-12 mb-6 text-blue-400" />,
      detail: "AI가 귀하의 자기소개서를 철저히 분석하여 맞춤형 면접을 준비합니다.",
      image: "/images/feature1.png",
      alt: "자기소개서 분석 화면"
    },
    {
      title: "맞춤형 질문 생성",
      description: "AI가 기업 특성과 자기소개서를 바탕으로 예상 질문을 생성합니다.",
      icon: <Building2 className="w-12 h-12 mb-6 text-purple-400" />,
      detail: "실제 면접에서 나올 수 있는 날카로운 질문들로 완벽하게 준비하세요.",
      image: "/images/feature2.png",
      alt: "맞춤형 질문 생성 화면"
    },
    {
      title: "실시간 면접 시뮬레이션",
      description: "AI 면접관과 실제 면접처럼 자연스러운 대화를 진행합니다.",
      icon: <Mic className="w-12 h-12 mb-6 text-green-400" />,
      detail: "10분 동안 실제 면접과 동일한 긴장감 속에서 연습하세요.",
      image: "/images/feature3.png",
      alt: "실시간 면접 시뮬레이션 화면"
    },
    {
      title: "맞춤형 피드백",
      description: "기업 문화에 맞는 상세한 피드백을 받아보세요.",
      icon: <MessageSquare className="w-12 h-12 mb-6 text-yellow-400" />,
      detail: "답변 내용, 어조, 태도 등 다각도의 분석 결과를 제공합니다.",
      image: "/images/feature4.png",
      alt: "맞춤형 피드백 화면"
    },
    {
      title: "모범 답안 제시",
      description: "자소서를 기반으로 AI가 제시하는 완벽한 답변으로 실력을 향상시키세요.",
      icon: <FileText className="w-12 h-12 mb-6 text-red-400" />,
      detail: "각 질문에 대한 모범 답안을 학습하여 실전에 대비하세요.",
      image: "/images/feature5.png",
      alt: "모범 답안 제시 화면"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <div className="relative bg-transparent">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 px-4">
        당신의 완벽한 면접을 설계합니다
      </h2>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div 
          className="relative"
          ref={slideRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="mb-1">
            <div className="relative h-[400px] sm:h-[600px] w-full rounded-xl overflow-hidden">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ pointerEvents: currentSlide === index ? 'auto' : 'none' }}
                >
                  {feature.image ? (
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900/50">
                      <p className="text-gray-400">이미지 준비중</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex absolute inset-x-0 top-[45%] -translate-y-1/2 justify-between select-none">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-800/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-800/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center items-center min-h-[220px] -mt-2">
            <div
              className="bg-gray-900/50 p-4 sm:p-6 rounded-xl backdrop-blur-sm w-full max-w-lg transform transition-all duration-500 ease-in-out shadow-lg"
              style={{
                backgroundImage: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
              }}
            >
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  {React.cloneElement(features[currentSlide].icon, {
                    className: "w-10 h-10 text-blue-400"
                  })}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                  {features[currentSlide].title}
                </h3>
                <p className="text-base sm:text-lg mb-4 text-blue-400 font-medium">
                  {features[currentSlide].description}
                </p>
                <p className="text-sm sm:text-base text-gray-300">
                  {features[currentSlide].detail}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-3 gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-400 w-6'
                    : 'bg-gray-600 w-1.5 hover:bg-blue-400/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}