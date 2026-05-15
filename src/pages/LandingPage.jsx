
function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              My Link
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              당신의 모든 소셜 채널과 포트폴리오를 하나의 아름다운 링크로 관리하세요. 
              간결하고 세련된 프로필 페이지를 단 몇 분 만에 완성할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onStart}
                className="group px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-2"
              >
                지금 시작하기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <a 
                href="https://github.com/khaku25/my-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-100 text-slate-700 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub 보기
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">강력한 기능을 경험하세요</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.103-1.103" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">무제한 링크 관리</h3>
              <p className="text-slate-600 leading-relaxed">
                인스타그램, 유튜브, 블로그 등 당신의 모든 활동을 하나의 페이지에 담으세요. 링크를 실시간으로 업데이트할 수 있습니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <svg className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">상세한 클릭 통계</h3>
              <p className="text-slate-600 leading-relaxed">
                어떤 링크가 가장 인기가 많은지 분석하세요. 방문자의 유입 경로와 클릭 패턴을 데이터로 확인할 수 있습니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <svg className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">커스텀 URL 제공</h3>
              <p className="text-slate-600 leading-relaxed">
                기억하기 쉬운 나만의 고유한 URL을 만드세요. sns 프로필 바이오에 넣기에 가장 적합한 짧고 예쁜 주소를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center">
            <div className="p-12 lg:p-20 lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                준비되셨나요?<br />
                당신의 프로필을 한 단계 더 높이세요.
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                지금 바로 가입하고 당신만의 링크 허브를 만드세요. 완전 무료로 시작할 수 있습니다.
              </p>
              <button 
                onClick={onStart}
                className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all"
              >
                무료로 시작하기
              </button>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-0 flex justify-center">
              <div className="w-[300px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-slate-800 overflow-hidden relative">
                {/* Mockup Content */}
                <div className="p-8 flex flex-col items-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full mb-4 animate-pulse" />
                  <div className="w-32 h-4 bg-slate-100 rounded-full mb-2 animate-pulse" />
                  <div className="w-48 h-3 bg-slate-100 rounded-full mb-8 animate-pulse" />
                  
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-full h-12 border border-slate-100 rounded-xl mb-3 flex items-center px-4">
                      <div className="w-6 h-6 bg-slate-50 rounded-lg mr-3 animate-pulse" />
                      <div className="w-24 h-3 bg-slate-50 rounded-full animate-pulse" />
                    </div>
                  ))}
                </div>
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 font-medium">
              Made with <span className="text-blue-600">Hanyang University Vibe Coding</span>
            </div>
            <div className="flex items-center gap-8 text-slate-400 font-medium">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a 
                href="https://github.com/khaku25/my-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                khaku25
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-50 text-center text-slate-400 text-sm">
            © 2024 My Link. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

