const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <header className="bg-[#c7053d] p-4 text-2xl font-bold text-[#8cc04b]">
        Raspberry Pi Cams
      </header>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
