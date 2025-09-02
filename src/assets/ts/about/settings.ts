import { Image } from "../image";
import { settings } from '../../json/about/settings.json';

export class Settings {
    public readonly verificationBadge: Image;
    public readonly closeButtonIcon: Image;

    constructor() {
        this.verificationBadge = new Image(settings.verificationBadge);
        this.closeButtonIcon = new Image(settings.closeButtonIcon);
    }
}