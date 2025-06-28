import { SearchScreen } from "@/components/search-screen"

export default function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  return <SearchScreen query={searchParams.q || ""} />
}
