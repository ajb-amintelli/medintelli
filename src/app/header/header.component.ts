import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentPage: string = 'Dashboard';  // Set this dynamically if required
  notificationCount: number = 5;  // Example notification count
  notifications: any[] = [
    { message: 'New notification 1' },
    { message: 'New notification 2' },
    { message: 'New notification 3' }
  ];  // Example notifications
  userProfilePicture: string = '';  // Set profile picture URL or empty for default

  constructor() { }

  // Methods to handle various actions
  toggleSidenav() {
    // This will handle sidenav toggle (for future use)
    console.log('Toggling sidenav');
  }

  viewNotification(notification: any) {
    // Handle the notification click (maybe route to a details page)
    console.log('Viewing notification:', notification);
  }

  editProfile() {
    // Navigate to profile edit page
    console.log('Editing profile');
  }

  resetPassword() {
    // Handle password reset functionality
    console.log('Resetting password');
  }

  logout() {
    // Handle logout functionality
    console.log('Logging out');
  }
}
