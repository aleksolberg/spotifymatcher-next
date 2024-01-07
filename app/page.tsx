import SpotifyLoginButton from "./spotifyLoginButton";


export default function Home(props: { params: {}, searchParams: { compareWithUsername: string } }) {
  const { compareWithUsername } = props.searchParams
  console.log(compareWithUsername)

  return (
    <>
      <h1>Spotify Matcher</h1>
      <SpotifyLoginButton compareWithUsername={compareWithUsername} />
    </>
  );
}
