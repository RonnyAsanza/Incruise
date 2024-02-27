import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor() { }

    getImages(): Promise<any[]> {
        return Promise.resolve([
            {
                itemImageSrc: "./../../assets/elizabeth/foto1.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto1.jpg",
                alt: "Description for Image 1",
                title: "Title 1"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto2.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto3.jpg",
                alt: "Description for Image 2",
                title: "Title 2"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto4.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto4.jpg",
                alt: "Description for Image 3",
                title: "Title 3"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto5.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto5.jpg",
                alt: "Description for Image 1",
                title: "Title 5"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto6.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto6.jpg",
                alt: "Description for Image 2",
                title: "Title 6"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto7.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto7.jpg",
                alt: "Description for Image 3",
                title: "Title 7"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto8.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto8.jpg",
                alt: "Description for Image 3",
                title: "Title 8"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto9.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto9.jpg",
                alt: "Description for Image 2",
                title: "Title 9"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto10.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto10.jpg",
                alt: "Description for Image 3",
                title: "Title 10"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto11.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto11.jpg",
                alt: "Description for Image 3",
                title: "Title 11"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto12.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto12.jpg",
                alt: "Description for Image 3",
                title: "Title 12"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto13.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto13.jpg",
                alt: "Description for Image 3",
                title: "Title 13"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto14.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto14.jpg",
                alt: "Description for Image 3",
                title: "Title 14"
            },
            {
                itemImageSrc: "./../../assets/elizabeth/foto15.jpg",
                thumbnailImageSrc: "./../../assets/elizabeth/foto15.jpg",
                alt: "Description for Image 3",
                title: "Title 15"
            },
        ]);
    }
}
