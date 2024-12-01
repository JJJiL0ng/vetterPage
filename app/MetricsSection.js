"use client"
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';

const MetricsSection = () => {
  const [activeMetric, setActiveMetric] = useState(null);

  const metrics = [
    {
      id: 'efficiency',
      title: '회의 효율성 점수',
      description: '긍정적 행동과 부정적 행동을 분석하여 회의의 전반적인 효율성을 수치화합니다.',
      score: 85,
      color: '#4F46E5'
    },
    {
      id: 'balance',
      title: '참여 균형성 지표',
      description: '참석자들의 발언 시간과 빈도를 분석하여 균형 잡힌 참여도를 측정합니다.',
      score: 78,
      color: '#06B6D4'
    },
    {
      id: 'conflict',
      title: '갈등 조정 지수',
      description: '발생한 갈등 상황에서 조화로운 해결과 중재가 이루어진 비율을 나타냅니다.',
      score: 92,
      color: '#8B5CF6'
    },
    {
      id: 'focus',
      title: '논의 이탈률',
      description: '회의 주제에서 벗어난 발언이나 부적절한 대화의 비율을 측정합니다.',
      score: 95,
      color: '#EC4899'
    },
    {
      id: 'participation',
      title: '참여 활성화 지표',
      description: '회의 참석자들의 적극적인 참여를 유도하는 상호작용을 측정합니다.',
      score: 88,
      color: '#10B981'
    }
  ];

  const sampleData = [
    { name: '1주차', value: 75 },
    { name: '2주차', value: 82 },
    { name: '3주차', value: 88 },
    { name: '4주차', value: 85 },
    { name: '5주차', value: 92 }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 fade-in">
          AI 회의 평가 지표 예시
        </h2>
        
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="relative bg-gray-900 p-6 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setActiveMetric(metric)}
              onMouseLeave={() => setActiveMetric(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{metric.title}</h3>
                <Info size={20} className="text-gray-400" />
              </div>
              
              <div className="flex items-center justify-center">
                <div
                  className="relative w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: `conic-gradient(${metric.color} ${metric.score}%, transparent ${metric.score}%, transparent 100%)`
                  }}
                >
                  <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{metric.score}</span>
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
            해당 점수가 나온 대화 내역을 추적해드립니다.
            핵심 평가기준은 저명한 회의 컨설턴트들의 평가기준이 적용 되었습니다.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-lg">
            자세히 알아보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
