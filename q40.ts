let make_album = (artist: string, title: string, tracks?: number) => {
  let musicAlbum = {
    artist,
    title,
    tracks,
  };
  if (tracks !== undefined) {
    tracks === tracks;
  }
  return musicAlbum;
};
console.log(make_album("Sajjad Ali", "Babiya", 20));

function make_album1(artist: string, title: string, tracks?: number) {
  let musicAlbum = {
    artist,
    title,
    tracks,
  };
  return musicAlbum;
}
console.log(make_album1("vital sign", "Rah"));
