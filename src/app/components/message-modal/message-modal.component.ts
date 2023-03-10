import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent {

  @Input() message :string = '';
  @Output() modalClose = new EventEmitter<boolean>();

  modalCloseClicked(){
    this.modalClose.emit(true);
  }
}
