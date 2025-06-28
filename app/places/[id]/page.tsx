import { PlaceDetailScreen } from "@/components/place-detail-screen"

export default function PlaceDetailPage({ params }: { params: { id: string } }) {
  return <PlaceDetailScreen placeId={params.id} />
}
