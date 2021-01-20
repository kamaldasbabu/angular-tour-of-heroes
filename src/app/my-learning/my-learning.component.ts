import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.css']
})
export class MyLearningComponent implements OnInit {
  myHeroess: string;
  details: any;
  constructor() {
    this.myHeroess = 'Hey My Heros';
    this.details = [
      {
        name: 'Gangadhar Ruidas',
        gender: 'm',
        age: 54,
        role: 'My dad is a real hero'
      },
      {
        name: 'Lakshmi Ruidas',
        gender: 'f',
        age: 48,
        role: 'My mom is a real hero'
      }
    ]
   }

  ngOnInit(): void {
  }

}
