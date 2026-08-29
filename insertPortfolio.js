const fs = require('fs');

const pageContent = fs.readFileSync('src/app/[lang]/portfolio/page.tsx', 'utf8');

const nflBlock = `
          {/* NFL Project */}
          <div className="flex flex-col lg:flex-row gap-12 items-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-full lg:w-1/3 sticky top-28">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#F3E8FF] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{p.projects.nfl.title}</h2>
                <h3 className="text-lg font-medium text-[#9333EA] mb-6">{p.projects.nfl.subtitle}</h3>
                <div className="h-1 w-12 bg-[#9333EA] rounded"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Executive Overview</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{p.projects.nfl.overview}</p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.projects.nfl.methodologyTitle}</h4>
                <ul className="space-y-4">
                  {p.projects.nfl.methodologyList.map((item: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center mt-1">✓</span>
                      <span className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class="text-gray-900">$1</strong>') }}></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#9333EA] to-[#6B21A8] p-8 rounded-2xl shadow-lg text-white">
                  <h4 className="text-xl font-bold mb-4">{p.projects.nfl.techStackTitle}</h4>
                  <p className="text-gray-100 leading-relaxed">{p.projects.nfl.techStack}</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#9333EA]/20">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{p.projects.nfl.impactTitle}</h4>
                  <p className="text-gray-600 leading-relaxed">{p.projects.nfl.impact}</p>
                </div>
              </div>
            </div>
          </div>
`;

const cocaColaBlock = `
          {/* Coca Cola Project */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-full lg:w-1/3 sticky top-28">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-[#FEE2E2] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{p.projects.cocaCola.title}</h2>
                <h3 className="text-lg font-medium text-[#DC2626] mb-6">{p.projects.cocaCola.subtitle}</h3>
                <div className="h-1 w-12 bg-[#DC2626] rounded"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">Executive Overview</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{p.projects.cocaCola.overview}</p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">{p.projects.cocaCola.methodologyTitle}</h4>
                <ul className="space-y-4">
                  {p.projects.cocaCola.methodologyList.map((item: string, index: number) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center mt-1">✓</span>
                      <span className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class="text-gray-900">$1</strong>') }}></span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#DC2626] to-[#991B1B] p-8 rounded-2xl shadow-lg text-white">
                  <h4 className="text-xl font-bold mb-4">{p.projects.cocaCola.techStackTitle}</h4>
                  <p className="text-gray-100 leading-relaxed">{p.projects.cocaCola.techStack}</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#DC2626]/20">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{p.projects.cocaCola.impactTitle}</h4>
                  <p className="text-gray-600 leading-relaxed">{p.projects.cocaCola.impact}</p>
                </div>
              </div>
            </div>
          </div>
`;

let newPageContent = pageContent.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
  "</div>\n</div>\n" + nflBlock + "\n" + cocaColaBlock + "\n</div>\n</section>"
);

fs.writeFileSync('src/app/[lang]/portfolio/page.tsx', newPageContent, 'utf8');
console.log('Done!');
