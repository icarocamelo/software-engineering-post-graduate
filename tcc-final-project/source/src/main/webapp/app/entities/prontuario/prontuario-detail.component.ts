import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProntuario } from 'app/shared/model/prontuario.model';

@Component({
  selector: 'jhi-prontuario-detail',
  templateUrl: './prontuario-detail.component.html',
})
export class ProntuarioDetailComponent implements OnInit {
  prontuario: IProntuario | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ prontuario }) => (this.prontuario = prontuario));
  }

  previousState(): void {
    window.history.back();
  }
}
