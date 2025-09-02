const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
        {/* give me raspberry pi colors */}
      <header className="bg-[#900] text-white p-4">Raspberry Pi Cams</header>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
