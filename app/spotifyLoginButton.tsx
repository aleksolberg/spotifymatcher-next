'use client'
import { redirectToAuthCodeFlow } from '@/lib/spotifyHelpers';

export default function SpotifyLoginButton({ compareWithUsername } : {compareWithUsername: string}) {

    const handleAuth = () => {
        redirectToAuthCodeFlow(compareWithUsername);
      };

    return (
    <button
        onClick={handleAuth}
        style={{
          background: "lightgreen",
          color: "darkgreen",
        }}
      >
        Logg inn med Spotify
      </button>
      )
}