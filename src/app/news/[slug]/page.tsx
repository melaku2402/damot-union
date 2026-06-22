import { useParams } from "next/navigation";

export default function NewsSlug() {
  const params = useParams();
  return <div>News: {params?.slug}</div>;
}
