import TopNav from "@/app/components/TopNav";

/**
 * Layout для основного сайта: главная страница + каталог /projects.
 * TopNav показывается только здесь — на странице-просмотрщике (группа showcase) его нет,
 * чтобы он не наслаивался на полноэкранный iframe.
 */
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav/>
      {children}
    </>
  );
}
