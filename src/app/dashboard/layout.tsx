import DashboardSideBar from "@/shared/widgets/dashboard/sidebar/dashboard.sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <div className="w-[280px] flex-shrink-0">
        <div className="fixed left-0 top-0 h-full w-[280px] z-40">
          <DashboardSideBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 overflow-auto">
        <div className="p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
