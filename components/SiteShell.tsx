import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <Nav />
      </div>
      <div aria-hidden className="site-header-spacer" />
      {children}
      <Footer />
    </>
  );
}
