import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'second-angular-app';
  users = DUMMY_USERS;
  selectedUserId?: string;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
