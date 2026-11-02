import ArticleShell from "@/components/ArticleShell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ArticleShell back={{ href: "/work", label: "All work" }}>{children}</ArticleShell>;
}
