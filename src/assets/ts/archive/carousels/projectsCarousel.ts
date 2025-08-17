import { InfoCard } from "../infoCard";
import { CarouselSlide } from "./carouselSlide";
import { CarouselTransition } from "./carouselTransition";
import { ObservableCarousel } from "./observableCarousel";
import { ObservableCarouselSlide } from "./observableCarouselSlide";
import { CarouselSlideBottomUp } from "./carouselSlideBottomUp";
import { CarouselSlideTopDown } from "./carouselSlideTopDown";
import { CarouselSlideTransition } from "./carouselSlideTransition";
import { projects } from '../../files/json/projects.json';
import { Image } from "../../image"

export class ProjectsCarousel extends ObservableCarousel {
    constructor() {
        const projectCards: InfoCard[] = new Array<InfoCard>(projects.length);

        projects.forEach((project, index)  => {
            const gallery: Image[] = new Array<Image>(project.images.length);

            project.images.forEach((imagePath, index) => {
                gallery[index] = new Image(imagePath)
            });

            projectCards[index] = new InfoCard(project.title, project.text, gallery);
        });

        const projectSlides: CarouselSlide[] = [];

        projectCards.forEach((projectCard, orderNumber) => {
            projectSlides.push(new CarouselSlide(orderNumber, projectCard));
        });

        const carouselTransition = new CarouselTransition(
            new CarouselSlideBottomUp(),
            new CarouselSlideTopDown(),
            projectSlides.length
        );

        const observableSlides = Array<ObservableCarouselSlide>();

        projectSlides.forEach(slide => {
            observableSlides.push(new ObservableCarouselSlide(
                slide.order,
                slide.content,
                new CarouselSlideTransition(carouselTransition),
                slide.order == 0));
        });

        super("projects-carousel", observableSlides, carouselTransition);
    }
}