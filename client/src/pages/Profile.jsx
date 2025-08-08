import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Profile = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    const fetchData = async () => {
      const mockData = {
        leonard: {
          name: 'Leonard Phokane',
          role: 'Tech Founder',
          projects: ['Zulutech Chat', 'Modular Portfolio'],
        },
        guest: {
          name: 'Guest User',
          role: 'Visitor',
          projects: [],
        },
      };
      setProfileData(mockData[id] || mockData['guest']);
    };

    fetchData();
  }, [id]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Profile: {id}</h2>
      {profileData ? (
        <>
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Role:</strong> {profileData.role}</p>
          <p><strong>Projects:</strong> {profileData.projects.join(', ') || 'None yet'}</p>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
