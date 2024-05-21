import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddEditDialogComponent } from './book-add-edit-dialog.component';

describe('BookAddEditDialogComponent', () => {
  let component: BookAddEditDialogComponent;
  let fixture: ComponentFixture<BookAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAddEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
