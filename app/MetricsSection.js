"use client"
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Info, X } from 'lucide-react';

const MetricsSection = () => {
  const [activeMetric, setActiveMetric] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const metrics = [
    {
      id: 'communication',
      title: '의사소통 능력',
      description: '질문에 대한 명확한 답변, 논리적인 전달력, 전문용어 활용도를 평가합니다.',
      score: 85,
      color: '#4F46E5'
    },
    {
      id: 'professional',
      title: '전문성',
      description: '직무 관련 지식, 실무 경험, 문제 해결 능력을 종합적으로 평가합니다.',
      score: 78,
      color: '#06B6D4'
    },
    {
      id: 'attitude',
      title: '태도 및 자세',
      description: '면접 태도, 비언어적 표현, 열정과 적극성을 평가합니다.',
      score: 92,
      color: '#8B5CF6'
    },
    {
      id: 'situation',
      title: '상황 대처력',
      description: '예상치 못한 질문이나 압박 상황에서의 대응 능력을 측정합니다.',
      score: 64,
      color: '#EC4899'
    },
    {
      id: 'cultural',
      title: '조직 적합도',
      description: '회사의 가치관과 문화에 대한 이해도와 적합성을 평가합니다.',
      score: 88,
      color: '#10B981'
    },
    {
      id: 'preparation',
      title: '준비성',
      description: '직무와 회사에 대한 사전 조사, 답변의 구체성과 준비도를 평가합니다.',
      score: 90,
      color: '#F59E0B'
    }
  ];

  const sampleData = [
    { name: '1차 면접', value: 75 },
    { name: '2차 면접', value: 82 },
    { name: '3차 면접', value: 88 },
    { name: '4차 면접', value: 85 },
    { name: '5차 면접', value: 92 }
  ];

  const evaluationResults = {
    communication: {
      score: 88,
      grade: '우수',
      name: '김**',
      strengths: [
        '질문 의도 파악과 논리적 답변 구성력 우수',
        '전문용어와 일상용어의 적절한 활용',
        '적극적인 눈 맞춤과 제스처 사용'
      ],
      improvements: [
        '긴장으로 인한 빠른 말하기 속도 조절 필요',
        '사례 설명 시 핵심 포인트 강조 부족',
        '답변의 간결성 개선 필요'
      ],
      overall: '전반적으로 우수한 의사소통 능력을 보유하고 있으며, 제시된 개선사항 보완 시 더욱 뛰어난 커뮤니케이션 역량 발휘가 기대됩니다.'
    },
    professional: {
      score: 78,
      grade: '보통',
      name: '김**',
      strengths: [
        '기본적인 업무 지식 보유',
        '관련 자격증 준비를 통한 이론적 기반',
        '열정적인 자기개발 의지'
      ],
      improvements: [
        '현장 경험 부족으로 실무적 이해도 미흡',
        '최신 업계 트렌드 파악 부족',
        '구체적 문제해결 사례 제시 미흡'
      ],
      overall: '기본기는 갖추었으나 실무 경험과 전문성 강화가 필요합니다. 업계 동향 파악과 실전 프로젝트 참여를 통한 전문성 향상이 요구됩니다.'
    },
    attitude: {
      score: 92,
      grade: '최우수',
      name: '김**',
      strengths: [
        '적극적이고 진취적인 면접 태도',
        '높은 수준의 예의와 프로페셔널한 자세',
        '질문에 대한 성실하고 진정성 있는 응답'
      ],
      improvements: [
        '때로는 과도한 겸손함이 자신감 부족으로 비춰짐',
        '성과 제시 시 구체적 수치 언급 미흡',
        '자기 PR시 핵심역량 강조가 다소 부족'
      ],
      overall: '매우 우수한 면접 태도를 보여주셨으나, 자신의 강점을 더욱 효과적으로 어필하는 기술이 보완된다면 완성도 높은 면접이 될 것으로 기대됩니다.'
    },
    situation: {
      score: 64,
      grade: '미흡',
      name: '김**',
      strengths: [
        '기본적인 문제 인식 능력 보유',
        '침착한 태도로 응답하려 노력함',
        '상황 해결에 대한 의지가 있음'
      ],
      improvements: [
        '돌발 질문에 대한 대처 능력 현저히 부족',
        '위기 상황 시 구체적 해결방안 제시 미흡',
        '우선순위 판단과 의사결정의 불명확성'
      ],
      overall: '기본적인 문제 인식은 가능하나, 실제 상황에서의 대처 능력이 현저히 부족합니다. 다양한 상황별 시나리오 학습과 실전 경험 축적이 시급히 요구됩니다.'
    },
    cultural: {
      score: 88,
      grade: '우수',
      name: '김**',
      strengths: [
        '조직의 핵심가치 이해도가 높음',
        '팀워크 중심의 협업 마인드 우수',
        '조직문화 적응에 대한 긍정적 태도'
      ],
      improvements: [
        '리더십 상황에서의 주도성 다소 부족',
        '부서간 협업 경험 구체성 미흡',
        '조직 내 갈등 해결 사례 제시 부족'
      ],
      overall: '전반적으로 조직 적합도가 우수하며 팀워크 지향적입니다. 리더십 역량 강화와 더불어 조직 내 다양한 역할 경험을 쌓는다면 더욱 뛰어난 조직원이 될 것으로 기대됩니다.'
    },
    preparation: {
      score: 90,
      grade: '최우수',
      name: '김**',
      strengths: [
        '회사와 직무에 대한 철저한 사전조사',
        '포트폴리오와 경험 정리가 체계적',
        '질문 예상 및 답변 준비가 충실함'
      ],
      improvements: [
        '업계 최신 동향 관련 준비가 다소 부족',
        '경쟁사 분석의 깊이가 아쉬움',
        '질문의 의도를 벗어난 준비 답변 간혹 발생'
      ],
      overall: '전반적으로 매우 철저한 준비성을 보여주셨습니다. 현업 동향과 경쟁사 분석을 보완하여 준비하신다면, 더욱 완벽한 면접이 될 것으로 기대됩니다.'
    }
  };

  const handleMetricClick = (metric) => {
    setActiveMetric(metric);
    setShowModal(true);
  };

  // 모달이 열릴 때 body 스크롤 제어
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  // 모달 외부 클릭 처리
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-16 fade-in">
          VETTER는 이렇게 평가합니다
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="relative bg-gray-900 p-4 sm:p-6 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleMetricClick(metric)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold">{metric.title}</h3>
                <Info size={18} className="text-gray-400" />
              </div>

              <div className="flex items-center justify-center mb-2">
                <div
                  className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: `conic-gradient(${metric.color} ${metric.score}%, transparent ${metric.score}%, transparent 100%)`
                  }}
                >
                  <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold">{metric.score}</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-gray-400 hover:text-gray-300 md:text-xs">
                클릭하여 상세 평가 보기
              </p>
            </div>
          ))}
        </div>

        {showModal && activeMetric && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={handleModalClick}
          >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-xl p-6 m-4 text-white">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold mb-6">
                {activeMetric.title} 평가 결과
              </h3>

              {evaluationResults[activeMetric.id] ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-gray-200">
                    <p>{evaluationResults[activeMetric.id].name}님의 점수: {evaluationResults[activeMetric.id].score}점</p>
                    <p>평가등급: {evaluationResults[activeMetric.id].grade}</p>
                  </div>

                  <div className="text-gray-200">
                    <h4 className="font-bold mb-2">▶ 강점</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {evaluationResults[activeMetric.id].strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-gray-200">
                    <h4 className="font-bold mb-2">▶ 개선점</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {evaluationResults[activeMetric.id].improvements.map((improvement, index) => (
                        <li key={index}>{improvement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-gray-200">
                    <h4 className="font-bold mb-2">▶ 종합의견</h4>
                    <p>{evaluationResults[activeMetric.id].overall}</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">평가 결과가 준비중입니다.</p>
              )}
            </div>
          </div>
        )}

        <div className="text-center">
          <p className="text-xl text-gray-400 mb-8 fade-in">
            해당 점수가 나온 답변을 추적해드리고 피드백을 제공합니다. 
            핵심 평가기준은 저명한 면접 전문가들의 평가기준이 적용 되었습니다.
          </p>

        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
