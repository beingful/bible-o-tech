import { InfoCard } from "../infoCard";
import { CarouselSlide } from "./carouselSlide";
import { CarouselTransition } from "./carouselTransition";
import { ObservableCarousel } from "./observableCarousel";
import { ObservableCarouselSlide } from "./observableCarouselSlide";
import { CarouselSlideBottomUp } from "./carouselSlideBottomUp";
import { CarouselSlideTopDown } from "./carouselSlideTopDown";
import { CarouselSlideTransition } from "./carouselSlideTransition";

export class ProjectsCarousel extends ObservableCarousel {
    constructor() {
        const projects: InfoCard[] = [
            new InfoCard("Title 1", "Text 1"),
            new InfoCard("Title 2", "Text 2"),
            new InfoCard("Title 3", "Text 3"),
            new InfoCard("Title 4", "Text 4"),
            new InfoCard("Title 5", "Text 5")
        ];

        const projectSlides: CarouselSlide[] = [];

        projects.forEach((project, orderNumber) => {
            projectSlides.push(new CarouselSlide(orderNumber, project));
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