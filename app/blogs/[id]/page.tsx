import { BlogDetailScreen } from "@/components/blog-detail-screen"

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return <BlogDetailScreen blogId={params.id} />
}
