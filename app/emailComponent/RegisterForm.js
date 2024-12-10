"use client"
import { useState } from 'react'
import { db } from '../../lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Firebase 연결 확인을 위한 로그
console.log('Firestore 인스턴스 확인:', db ? '연결됨' : '연결 안됨')

export default function RegisterForm() {
  const [contactInfo, setContactInfo] = useState('')
  const [contactType, setContactType] = useState('email') // 'email' 또는 'phone'
  const [jobCategory, setJobCategory] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  // 이메일 또는 전화번호 유효성 검사
  const validateContact = (value, type) => {
    if (type === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    } else {
      return /^[0-9]{10,11}$/.test(value.replace(/-/g, ''))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // 유효성 검사
    if (!validateContact(contactInfo, contactType)) {
      setSubmitStatus({
        type: 'error',
        message: contactType === 'email' ? '올바른 이메일 형식이 아닙니다.' : '올바른 전화번호 형식이 아닙니다.'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const docRef = await addDoc(collection(db, 'preregistrations'), {
        contactType,
        contactInfo,
        jobCategory,
        createdAt: serverTimestamp(),
      })
      
      setSubmitStatus({
        type: 'success',
        message: '신청이 완료되었습니다. 안내사항을 보내드리겠습니다!'
      })
      
      setContactInfo('')
      setJobCategory('')

    } catch (error) {
      console.log('Firebase 저장 오류:', error)
      setSubmitStatus({
        type: 'error',
        message: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md p-8 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">AI 모의 면접 체험하기</h2>
        <p className="text-gray-400">
          지금 등록하시면<br/>
          <span className="text-blue-400 font-semibold">10회 체험권</span>을 드립니다.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="flex items-center space-x-4 mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="email"
                checked={contactType === 'email'}
                onChange={(e) => setContactType(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-400">이메일</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="phone"
                checked={contactType === 'phone'}
                onChange={(e) => setContactType(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-400">전화번호</span>
            </label>
          </div>
          
          <input
            type={contactType === 'email' ? 'email' : 'tel'}
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder={contactType === 'email' ? '이메일을 입력해주세요' : '전화번호를 입력해주세요'}
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">지원 직무</label>
          <select
            value={jobCategory}
            onChange={(e) => setJobCategory(e.target.value)}
            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
            required
            disabled={isSubmitting}
          >
            <option value="">직무를 선택해주세요</option>
            <option value="개발">기획</option>
            <option value="기획">개발</option>
            <option value="디자인">디자인</option>
            <option value="마케팅">마케팅</option>
            <option value="영업">영업</option>
            <option value="재무회계">재무/회계</option>
            <option value="연구">연구</option>
            <option value="제조생산">제조/생산</option>
            <option value="인사">인사</option>
            <option value="기타">기타</option>
          </select>
        </div>

        {submitStatus.message && (
          <div className={`text-sm text-center p-3 rounded-lg ${
            submitStatus.type === 'success' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? '처리중...' : '무료 체험 신청하기'}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        등록하신 연락처로 모의 면접 참여 방법과<br/>
        상세 안내사항을 보내드립니다.
      </p>
    </div>
  )
}
