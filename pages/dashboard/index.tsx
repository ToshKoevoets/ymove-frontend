import Card from "@/components/home/card";
import DashboardLayout from "@/components/dashboard";
import Overview from "@/components/overview";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1>Users</h1>
      
      <Overview
        resource="user"
        results="20"
      />
    </DashboardLayout>
  );
}
