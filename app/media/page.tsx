import Image from "next/image"

export default function Media() {
  const photos = [
    { src: "/placeholder.svg?height=200&width=300", alt: "William competing at World Championships" },
    { src: "/placeholder.svg?height=200&width=300", alt: "Medal ceremony at Commonwealth Games" },
    { src: "/placeholder.svg?height=200&width=300", alt: "Training session" },
    { src: "/placeholder.svg?height=200&width=300", alt: "Interview after winning British Nationals" },
    { src: "/placeholder.svg?height=200&width=300", alt: "With teammates at European Championships" },
    { src: "/placeholder.svg?height=200&width=300", alt: "Fencing demonstration at local school" },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-raleway text-3xl font-bold mb-6">Media</h1>
      <section className="mb-12">
        <h2 className="font-raleway text-2xl font-bold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div key={index}>
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <p className="mt-2 text-sm text-gray-600">{photo.alt}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="font-raleway text-2xl font-bold mb-4">Videos</h2>
        <div className="space-y-6">
          <div>
            <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">Video Placeholder</div>
            <p className="mt-2">Highlights from British National Championships 2023</p>
          </div>
          <div>
            <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">Video Placeholder</div>
            <p className="mt-2">Interview: Road to the Olympics</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-raleway text-2xl font-bold mb-4">Press Mentions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>"Rising Star in British Fencing" - The Guardian, 2022</li>
          <li>"William Deary: The Future of Sabre Fencing" - BBC Sport, 2021</li>
          <li>"Commonwealth Champion Sets Sights on Olympic Gold" - Fencing Today, 2023</li>
        </ul>
      </section>
    </div>
  )
}

