export class Album {
  name?: String;
  image?: String;
  artist?: String;
  isFavorite:boolean = false;

  constructor(entry: any) {
    this.name = entry['im:name'].label;
    this.image = this.obtainImageUrl(entry['im:image']);
    this.artist = entry['im:artist'].label;
  }

  private obtainImageUrl(images: any[]):string {
    let imgUrl = images[0].label.slice(0, -11) + '600x600bb.png'
    return imgUrl;
  }
}
