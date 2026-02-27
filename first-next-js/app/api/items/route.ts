type Item = {
  id: number;
  name: string;
  category: string;
};
export async function GET(req: Request) {
  const items: Item[] = [
    { id: 1, name: "Iphone", category: "Electronics" },
    { id: 2, name: "Item 2", category: "Other" },
    { id: 3, name: "Item 3", category: "Other" },
    { id: 4, name: "Item 4", category: "Electronics" },
  ];
  const type = req.nextUrl.searchParams;
  const {id, category} = Object.fromEntries(type.entries());
  console.log(id, category)

//   const filteredItems = type ? items.filter(item => item.category.toLowerCase() === type.toLowerCase()) : items;
  return Response.json({
    items: "filteredItems",
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return Response.json({ body: body });
}
