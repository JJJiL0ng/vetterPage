import React from 'react';

const AppIntro = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/50" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="space-y-32">
                    {/* First Statement */}
                    <div className="flex flex-col md:flex-row items-center justify-between fade-in">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-0 text-center md:text-left">
                            자소서 한장으로<br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                압박면접 완벽 대비
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 md:max-w-sm text-center md:text-left">
                            입사 희망 기업의 기출문제와<br />
                            자기소개서를 기반으로<br />
                            날카로운 질문을 해드립니다
                        </p>
                    </div>

                    {/* Second Statement */}
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between fade-in">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-0 text-center md:text-left">
                            실전을 방불케하는<br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                ai 모의 면접 시스템
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 md:max-w-sm text-center md:text-left">
                            ai면접관의 음성을 듣고<br />
                            직접 답변해 보며 연습하는 새로운<br />
                            시스템으로 실전 압박 면접을 준비하세요
                        </p>
                    </div>

                    {/* Third Statement */}
                    <div className="flex flex-col items-center justify-center mb-2 fade-in">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                            사용해본 고객의<br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                만족도가 증명합니다
                            </span>
                        </h2>
                    </div>

                    {/* Bottom Stats with Gradient Border */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
                        <div className="relative p-6 rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl" />
                            <div className="relative z-10">
                                <p className="text-4xl font-bold mb-2">
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                        92%
                                    </span>
                                </p>
                                <p className="text-gray-300">면접 준비 만족도</p>
                            </div>
                        </div>

                        <div className="relative p-6 rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl" />
                            <div className="relative z-10">
                                <p className="text-4xl font-bold mb-2">
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                        3,000+
                                    </span>
                                </p>
                                <p className="text-gray-300">월간 사용자</p>
                            </div>
                        </div>

                        <div className="relative p-6 rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl" />
                            <div className="relative z-10">
                                <p className="text-4xl font-bold mb-2">
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                        78%
                                    </span>
                                </p>
                                <p className="text-gray-300">합격률 향상</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppIntro;