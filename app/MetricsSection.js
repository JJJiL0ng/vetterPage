"use client"
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

const MetricsSection = () => {
  const [activeMetric, setActiveMetric] = useState(null);

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
      score: 95,
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



  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 fade-in">
          AI 모의 면접 평가 예시
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="relative bg-gray-900 p-4 sm:p-6 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setActiveMetric(metric)}
              onMouseLeave={() => setActiveMetric(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold">{metric.title}</h3>
                <Info size={18} className="text-gray-400" />
              </div>

              <div className="flex items-center justify-center">
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
            </div>
          ))}
        </div>

        {activeMetric && (
          <div className="bg-gray-900 p-6 rounded-xl mb-16 fade-in">
            <h3 className="text-2xl font-bold mb-4" style={{ color: activeMetric.color }}>
              {activeMetric.title}
            </h3>
            <p className="text-gray-400 mb-6">{activeMetric.description}</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sampleData}>
                  <XAxis dataKey="name" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={activeMetric.color}
                    strokeWidth={2}
                    dot={{ strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
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
