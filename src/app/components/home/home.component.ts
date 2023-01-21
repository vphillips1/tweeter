import { Component, OnInit } from '@angular/core';
import { TweeterService } from 'src/app/services/tweeter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sideNavLinks = [
    {
      name: 'Home',
      route: '/home/feed',
      icon: 'fas fa-home',
    },
    {
      name: 'Explore',
      route: '/home/explore',
      icon: 'fab fa-slack-hash',
    },
    {
      name: 'Notifications',
      route: '/home/notifcations',
      icon: 'fas fa-bell',
    },
    {
      name: 'Messages',
      route: '/home/messages',
      icon: 'fas fa-envelope',
    },
    {
      name: 'Bookmarks',
      route: '/home/bookmarks',
      icon: 'fas fa-bookmark',
    },
    {
      name: 'Profile',
      route: '/home/profile',
      icon: 'fas fa-user',
    },
    {
      name: 'More',
      route: '/home/more',
      icon: 'fas fa-comment-dots',
    },
  ];

  public feeds: any[] = [];
  public userProfileImg = '';
  public userProfileName = '';
  public userProfileHandler = '';
  public showFeed = false;

  constructor(private tweeterService: TweeterService) {}

  ngOnInit(): void {
  
    this.tweeterService.getMockMessage().subscribe((data: any) => {
      console.log('Message Data', data);
    });
    this.tweeterService.getTweeterData().subscribe((res: any) => {
      console.log('data', res.data);
      this.feeds = res.data;
      this.showFeed = true;
      this.userProfileName = res.data[0].username;
      this.userProfileImg = res.data[0].profileihttpmg;
      this.userProfileHandler = res.data[0].handler;
      this.tweeterService.$tweeterData.next({
        feeds: res.data,
        userProfileImg: res.data[0].profileimg,
        showFeed: true,
      });
    });
  }
}
