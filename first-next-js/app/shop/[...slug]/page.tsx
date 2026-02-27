type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      {slug.map((part, index) => (
        <span key={index}> {part}</span>
      ))}
    </div>
  );
}
