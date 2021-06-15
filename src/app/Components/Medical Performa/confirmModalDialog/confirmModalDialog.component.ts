import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmModalDialog',
  templateUrl: './confirmModalDialog.component.html',
  styleUrls: ['./confirmModalDialog.component.css']
})
export class ConfirmModalDialogComponent implements OnInit {
  public onClose: Subject<string>;
  reason:string;
  constructor(private _bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  public onConfirm(): void {
    this.onClose.next(this.reason);
    this._bsModalRef.hide();
  }

  public onCancel(): void {
    this.onClose.next(this.reason);
    this._bsModalRef.hide();
  }
}
