import contactImage from '../assets/contact.png'

export function LogosSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 flex justify-center">
        <img src={contactImage} alt="" />
      </div>
    </section>
  )
}

