import useRouteMetadata from "@/hooks/useRouteMetadata";

export default function HomePage() {
  const { metadata } = useRouteMetadata();

  return (
    <>
      <p>Home</p>
    </>
  );
}
