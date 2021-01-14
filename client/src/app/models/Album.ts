export class Album {
  name: string = "";
  image: string = "";
  artist: string = "";
  isFavorite: boolean = false;
  numberOfLikes: number = 0;
  releaseDate: string = "adasasd"
  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt mauris nec enim rhoncus fringilla sit amet ac nisl. Mauris dapibus augue non elit vehicula, id viverra lorem elementum. Nam tempor augue nec dolor cursus, laoreet rhoncus risus molestie. Integer eleifend lorem ac lectus accumsan euismod."

  constructor(entry: any) {
    this.name = entry['im:name'].label;
    this.image = this.obtainImageUrl(entry['im:image']);
    this.artist = entry['im:artist'].label;
    this.releaseDate = entry['im:releaseDate'].attributes.label;
  }

  private obtainImageUrl(images: any[]): string {
    let imgUrl = images[0].label.slice(0, -11) + '600x600bb.png'
    return imgUrl;
  }
}


