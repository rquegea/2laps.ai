export default function EnterprisePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="text-left">
          <p
            className="text-xl md:text-2xl font-normal text-gray-500 mb-2 leading-tight"
            style={{ fontFamily: "'Switzer', sans-serif" }}
          >
            Enterprise
          </p>
          <h1
            className="text-3xl md:text-4xl font-normal text-foreground mb-6 leading-tight"
            style={{ fontFamily: "'Switzer', sans-serif" }}
          >
            Built for the world's leading organizations
          </h1>
          <button className="mt-6 px-6 py-3 text-sm bg-foreground text-background rounded-full hover:scale-105 transition-transform">
            Download for macOS ↓
          </button>
        </div>
      </div>

      {/* Visual section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg" style={{ minHeight: '500px' }}>
          <div className="w-full h-full flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 m-12 max-w-4xl w-full">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <p className="text-xs text-gray-500 font-medium">Cursor</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">IN PROGRESS 2</p>
                    <p className="text-gray-400 text-sm mb-2">Enterprise Security Audit...</p>
                    <p className="text-xs text-gray-400">Analyzing</p>
                  </div>
                </div>

                <div className="ml-9 space-y-2">
                  <h3 className="text-base font-semibold text-foreground">
                    Security & Compliance Review
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Comprehensive security audit and compliance verification for enterprise deployment across global teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
