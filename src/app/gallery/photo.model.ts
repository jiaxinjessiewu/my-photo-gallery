export class Photo {
    public title : string;
    public url : string;
    public description : string;

    constructor(name: string, description: string, url: string) {
        this.title = name;
        this.description = description;
        this.url = url;
    }
}