import type { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="p-8">{children}</div>;
};

export default PageContainer;
