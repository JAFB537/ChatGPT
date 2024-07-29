import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, MessageComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() inputMessage = '';
  i = 1;

  messages = [
    {
      id: 1,
      sender: 'BOT',
      content: 'Hello, I am Bot'
    }
  ];

  send() {
    if (this.inputMessage.trim().length > 0) {
      this.i++;
      this.messages.push({
        id: this.i,
        sender: 'YOU',
        content: this.inputMessage
      });
      this.inputMessage = '';
    }
  }
}
