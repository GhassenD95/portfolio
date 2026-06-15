interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="grain-overlay" />
      <main className="max-w-container mx-auto px-4 md:px-6 pt-24 pb-12 min-h-screen">
        {children}
      </main>
    </>
  );
}
