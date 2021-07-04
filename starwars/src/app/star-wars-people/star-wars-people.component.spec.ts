import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StarWarsPeopleComponent } from './star-wars-people.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedMockData } from '../interface/shared-mock-data';
import { By } from '@angular/platform-browser';

describe('StarWarsPeopleComponent', () => {
  let component: StarWarsPeopleComponent;
  let fixture: ComponentFixture<StarWarsPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        StarWarsPeopleComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set and transform the searchPeople data', () => {
    component.setResult(SharedMockData.getSearchPeopleDatasMock());
    expect(component.previous).toEqual(0);
    expect(component.next).toEqual(2);
  });

  it('should call searchPeople method', fakeAsync(() => {
    spyOn(component, 'searchPeople');
    component.form.controls['search'].setValue('Luke');
    let button = fixture.debugElement.query(By.css('.search-button')).nativeElement;
    fixture.detectChanges();
    button.click();
    tick();
    expect(component.searchPeople).toHaveBeenCalledWith('Luke');
  }));

  it('should call getPeople method', fakeAsync(() => {
    spyOn(component, 'getPeople');
    component.form.controls['search'].setValue('');
    let button = fixture.debugElement.query(By.css('.search-button')).nativeElement;
    fixture.detectChanges();
    button.click();
    tick();
    expect(component.getPeople).toHaveBeenCalledWith();
  }));

});
