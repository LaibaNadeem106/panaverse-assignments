function makeAlbum(artist:string,title:string,tracks?:number){
    let album:any={
        "artist":artist,
        "title":title
    }

    if(tracks){
        album.tracks=tracks;
    }
    return album;
}
let album1=makeAlbum("Laiba","Making Memories");
let album2=makeAlbum("Sumera","Our family story");
let album3=makeAlbum("Atika","By Year 2023");

console.log(album1);
console.log(album2);
console.log(album3);