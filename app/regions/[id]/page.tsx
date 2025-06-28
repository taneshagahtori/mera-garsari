import { RegionDetailScreen } from "@/components/region-detail-screen"

export default function RegionDetailPage({ params }: { params: { id: string } }) {
  return <RegionDetailScreen regionId={params.id} />
}
