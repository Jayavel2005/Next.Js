import React from "react";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="bg-amber-500 p-6 text-center">Vanakam da mapla</nav>
    <h1 className="text-center text-2xl font-bold bg-purple-500 p-6 text-white">Header</h1>
      {children}
    <footer className="bg-amber-500 p-6 text-center text-2xl font-bold">Footer</footer>
    </section>
  );
}
