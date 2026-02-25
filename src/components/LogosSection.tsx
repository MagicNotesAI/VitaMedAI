export function LogosSection() {
  const logos = [{ name: 'Vitamed AI', id: 1 }]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50"></div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Trusted by Industry Leaders
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Partnering with Leading Healthcare Institutions
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center text-gray-400 font-bold text-2xl tracking-tight opacity-60 hover:opacity-100 transition-all hover:scale-105 cursor-pointer"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}