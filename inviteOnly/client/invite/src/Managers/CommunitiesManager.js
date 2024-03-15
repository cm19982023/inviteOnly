const apiUrl = "https://localhost:5001";

export const GetCommunityById = () => {
  return fetch(`${apiUrl}/api/Communities/{communityId}`) 
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching communities:', error);
      throw error;
    });
};

export const GetAllCommunities = () => {
    return fetch(`${apiUrl}/api/Communities`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error fetching communities:', error);
        throw error;
      });
  };

