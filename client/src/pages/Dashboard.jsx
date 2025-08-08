const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome back, Leonard. Here's a snapshot of your current activity:</p>
      <ul className="mt-4 list-disc list-inside">
        <li>Active Projects: Zulutech Chat</li>
        <li>Modules Completed: Socket.io, PDF Export</li>
        <li>Next Milestone: Community Showcase</li>
      </ul>
    </div>
  );
};

export default Dashboard;
