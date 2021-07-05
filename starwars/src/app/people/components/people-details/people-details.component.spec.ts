import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedMockData } from '../../../core/mock/shared-mock-data';

import { PeopleDetailsComponent } from './people-details.component';

describe('PeopleDetailsComponent', () => {
  let component: PeopleDetailsComponent;
  let fixture: ComponentFixture<PeopleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [ 
        PeopleDetailsComponent 
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: SharedMockData.getPeopleDatasMock() },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
