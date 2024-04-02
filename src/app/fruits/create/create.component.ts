import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
 
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };

  // Id:number | undefined;
  // Name:string |undefined;
  // Price:number | undefined;
  // Quantity:number | undefined;

  constructor(private fruitService:FruitsService,private router:Router){}
  ngOnInit(): void {}

  create(){
    this.fruitService.create(this.fruitForm).subscribe({
      next:(data) => {
       
        this.router.navigate(["/fruits/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
