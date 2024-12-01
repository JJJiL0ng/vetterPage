"use client"
import { useState } from 'react'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // 이메일 처리 로직
    console.log('Submitted:', { email, company, name, position })
  }

  return (
    <div className="w-full max-w-md p-8 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">1개월 무료 체험 사전 등록</h2>
        <p className="text-gray-400">
          지금 등록하시면 정식 출시 후<br/>
          <span className="text-blue-400 font-semibold">1개월 무료 체험권</span>을 드립니다.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">회사 이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">회사명</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="회사명을 입력해주세요"
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">직책</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="직책"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-lg"
        >
          사전 등록하기
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        등록하신 이메일로 출시 소식과 함께<br/>
        무료 체험 초대장을 보내드립니다.
      </p>
    </div>
  )
}
