
type SectionHeadingProps = {
    img?: string;
    title: string;
    description: string;
    }
const SectionHeading = ({
    img,
    title,
    description
    
}: SectionHeadingProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          {img ? <img src={img} alt={title} className="w-full h-full object-cover" /> :
          (<>
            <div className="absolute inset-0 bg-primary" />
            <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
            <div className="absolute bottom-10 left-20 w-60 h-60 border border-white rounded-full" />
          </>
          )
        }
          {img && <div className="absolute inset-0 bg-black/45" />}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4 pt-10" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {title}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            {description}
          </p>
        </div>
      </section>
  )
}

export default SectionHeading