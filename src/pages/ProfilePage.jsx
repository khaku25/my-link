import { linksData } from '../data/links';
import { userData } from '../data/user';
import { Card } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

function ProfilePage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-16">
      <div className="mx-auto flex max-w-[480px] flex-col items-center">
        {onBack && (
          <button 
            onClick={onBack}
            className="mb-8 flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Back to Home
          </button>
        )}
        <header className="mb-12 flex flex-col items-center text-center">
          <Avatar className="mb-4">
            <AvatarImage src={userData.avatarUrl} alt={userData.name} />
            <AvatarFallback>{userData.name[0]}</AvatarFallback>
          </Avatar>

          <h1 className="mb-1 text-2xl font-bold text-slate-900">
            {userData.name}
          </h1>

          <p className="mb-4 text-[14px] font-semibold tracking-tight text-blue-600">
            {userData.handle}
          </p>

          <p className="max-w-[340px] text-[15px] leading-relaxed text-slate-500">
            {userData.bio}
          </p>
        </header>

        <main className="flex w-full flex-col space-y-3.5">
          {linksData.map((link) => {
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
                <Card className="relative flex items-center border-slate-200/50 bg-white p-4 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:shadow-md">
                  <div className="absolute left-4 top-1/2 flex h-10 w-10 shrink-0 -translate-y-1/2 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-white">
                    <img
                      src={faviconUrl}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                  </div>

                  <div className="w-full px-14 text-center">
                    <span className="text-[15px] font-bold text-slate-700">
                      {link.title}
                    </span>
                  </div>
                </Card>
              </a>
            );
          })}
        </main>

        <footer className="mt-20 pb-10 text-[11px] font-medium uppercase tracking-widest text-slate-400">
          © 2024 {userData.name}. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </div>
  );
}

export default ProfilePage;
