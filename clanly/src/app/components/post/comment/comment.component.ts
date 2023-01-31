import { Component, Input, OnChanges } from '@angular/core';
import { PostComponent } from '../post.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnChanges {
  @Input() comment: any;
  isOwner: boolean = false;

  constructor(private post: PostComponent) { }

  ngOnChanges(changes: any) {
    this.comment = changes['comment'].currentValue;
    if (this.comment.user.id == sessionStorage.getItem('user_id')) {
      this.isOwner = true;
    }
  }

  deleteComment() {
    this.post.deleteComment(this.comment.id);
  }
}
