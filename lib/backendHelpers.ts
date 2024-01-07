type ProfileData = {
  spotifyUserId: string;
  name: string;
  email: string;
  accessToken: string;
};

// TODO: Get types from Spotify SDK
type TopArtists = {
  name: string;
}[];

const backendUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`

const headers = {
  "Content-Type": "application/json",
};

export const saveProfileData = async (profileData: ProfileData) => {
  return await fetch(backendUrl + "/user", {
    method: "POST",
    headers,
    body: JSON.stringify(profileData),
  });
};

export const saveTopArtists = async (
  userId: string,
  topArtists: TopArtists
) => {
  return await fetch(`${backendUrl}/user/${userId}/artist`, {
    method: "POST",
    headers,
    body: JSON.stringify(topArtists),
  });
};

export const compareArtists = async (userA: string, userB: string) => {
  return await fetch(`${backendUrl}/compare?user_a=${userA}&user_b=${userB}`, {
    method: "GET",
    headers,
  });
};
