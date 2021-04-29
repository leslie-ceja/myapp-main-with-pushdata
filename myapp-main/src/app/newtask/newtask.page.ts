import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core'
import { Task } from '../listview/task.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.page.html',
  styleUrls: ['./newtask.page.scss'],
})
export class NewtaskPage implements OnInit {
  title= '';
  date = '';//NOT SURE IF THIS WORKS?
  name = '';
  myDate: String = new Date().toISOString();
  remindertext='';
  remindervalue= 0;


  constructor(private pickerCtrl:PickerController, private dataService:DataService) { }

  async showPicker(){
    let options:PickerOptions ={
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {name: 'reminder',
        options: [
          {text: 'None', value: '0'},
          {text: '15 minutes before', value: '15'},
          {text: '30 minutes before', value: '30'},
          {text: '45 minutes before', value: '45'},
          {text: '1 hour before', value: '1'},
          {text: '2 hours before', value: '2'},
          {text: '3 hours before', value: '3'}
        ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(options);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('reminder');
      console.log('col:', col);
      this.remindervalue = col.options[col.selectedIndex].value;//can grab text or value
      this.remindertext = col.options[col.selectedIndex].text;
    });
  }
  gotoListView(){
    this.title = this.dataService.getData(2);
    let newtask: Task = {
      id: this.title,//need to get id
      name: this.name,
      date: this.date,
      reminder: this.remindervalue ,
      isChecked: false,
    }
    console.log(newtask);
  }
  ngOnInit() {
    //console.log(this.myDate);
  }

}
