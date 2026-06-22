import SubscribersData from "@/shared/components/dashboard/data/subscribers.data";

const Page = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="animate-fade-in-down">
        <h1 className="text-3xl font-bold text-[#0A1628]">
          Subscribers
        </h1>
        <p className="text-gray-500 mt-1">
          View and manage your subscribers
        </p>
      </div>

      <div className="animate-fade-in-up delay-100">
        <SubscribersData />
      </div>
    </div>
  );
};

export default Page;
