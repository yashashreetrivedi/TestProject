import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { AuthComponent } from './auth.component';
import {HttpClientModule} from '@angular/common/http';


describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  // const testForm = <NgForm>{
  //   value: {
  //       code: "123456",
        
  //   }
  // };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [HttpClientModule],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  

  });

  // it('show show errorValue',() =>{
  //   expect(component.errorMessage).toBe(false);
  
  // })

  // it('show submit button',() =>{
  //   component.onSubmit(testForm);
  //   expect(component.submitCode).toBeTruthy;

  // })

  
  // it('show reset form',() =>{
  //   component.resetForm(testForm);
  //   expect(component.service.formData).toBeDefined;
  //   expect(component.errorMessage).toEqual('');
  // })
});
