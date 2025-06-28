import { FamilyDetailScreen } from "@/components/family-detail-screen"

export default function FamilyDetailPage({ params }: { params: { id: string } }) {
  return <FamilyDetailScreen familyId={params.id} />
}
