import Link from "next/link"
import Image from "next/image"

export default function Blog() {
  const blogPosts = [
    {
      title: "My Journey to Becoming British National Champion",
      date: "2023-04-15",
      excerpt:
        "In this post, I reflect on the challenges and triumphs that led to my victory at the British National Championships.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Training Techniques for Aspiring Sabre Fencers",
      date: "2023-03-01",
      excerpt:
        "I share some of my favorite training techniques that have helped me improve my skills as a sabre fencer.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Importance of Mental Preparation in Fencing",
      date: "2023-02-14",
      excerpt: "Exploring the often overlooked aspect of mental preparation and its crucial role in fencing success.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <h1 className="font-raleway text-2xl sm:text-3xl font-bold mb-6">Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="border-b pb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full"
            />
            <h2 className="font-raleway text-xl sm:text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2 text-sm">{post.date}</p>
            <p className="mb-4 text-sm sm:text-base">{post.excerpt}</p>
            <Link href="#" className="text-blue-600 hover:underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}