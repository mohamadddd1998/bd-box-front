const Tabs = ({ children }: { children: React.ReactNode }) => (
  <ul className="overflow-auto w-full flex gap-2 pb-2">{children}</ul>
);
export default Tabs;
