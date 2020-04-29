export class Photo {
    public name : string;
    public url : string;
    public description : string;

    constructor(name: string, description: string, url: string) {
        this.name = name;
        this.description = description;
        this.url = url;
    }
}