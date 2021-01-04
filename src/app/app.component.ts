import {Component, OnInit} from '@angular/core';

export class PhotoInfo {

  url: string;
  name: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'photo-jamessiuda-com';

  photos: PhotoInfo[] = [];

  ngOnInit(): void {

    this.photos.push({
      url: '/assets/img/echo1.jpg',
      name: 'Echo Blanket #1',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-1.jpg',
      name: 'Lake House Fireworks #1',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-2.jpg',
      name: 'Lake House Fireworks #2',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-3.jpg',
      name: 'Lake House Fireworks #3',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-4.jpg',
      name: 'Lake House Fireworks #4',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-5.jpg',
      name: 'Lake House Fireworks #5',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-6.jpg',
      name: 'Lake House Fireworks #6',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-7.jpg',
      name: 'Lake House Fireworks #7',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-8.jpg',
      name: 'Lake House Fireworks #8',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-9.jpg',
      name: 'Lake House Fireworks #9',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-10.jpg',
      name: 'Lake House Fireworks #10',
    });

    this.photos.push({
      url: '/assets/img/lakehouse-fireworks-11.jpg',
      name: 'Lake House Fireworks #11',
    });

  }

}
