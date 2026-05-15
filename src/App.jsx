import { linksData } from './data/links';
import { userData } from './data/user';
import { Card } from './components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb] py-16 px-6">
      <div className="max-w-[480px] mx-auto flex flex-col items-center">
        
        {/* 1. 프로필 섹션 */}
        <header className="flex flex-col items-center mb-12 text-center">
          <Avatar className="mb-4">
            <AvatarImage src={userData.avatarUrl} alt={userData.name} />
            <AvatarFallback>{userData.name[0]}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">
            {userData.name}
          </h1>
          <p className="text-[14px] font-semibold text-blue-600 mb-4 tracking-tight">
            {userData.handle}
          </p>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-[340px]">
            {userData.bio}
          </p>
        </header>

        {/* 2. 링크 카드 영역 */}
        <main className="w-full flex flex-col space-y-3.5">
          {linksData.map((link) => {
            // Google Favicon API
            const domain = new URL(link.url).hostname;
            const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full transition-all duration-300 active:scale-[0.98]"
              >
                <Card className="relative flex items-center p-4 bg-white hover:bg-slate-50 border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 group-hover:bg-white transition-colors">
                    <img
                      src={faviconUrl}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div className="w-full text-center">
                    <span className="text-[15px] font-bold text-slate-700">
                      {link.title}
                    </span>
                  </div>
                </Card>
              </a>
            );
          })}
        </main>

        {/* 3. 푸터 */}
        <footer className="mt-20 pb-10 text-slate-400 text-[11px] font-medium tracking-widest uppercase">
          © 2024 {userData.name}. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </div>
  );
}

export default App;
