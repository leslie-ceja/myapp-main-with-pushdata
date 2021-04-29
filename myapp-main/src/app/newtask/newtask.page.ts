import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core'

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.page.html',
  styleUrls: ['./newtask.page.scss'],
})
export class NewtaskPage implements OnInit {

  myDate: String = new Date().toISOString();
  reminder='';
  constructor(private pickerCtrl:PickerController) { }

  async showPicker(){
    let options :PickerOptions ={
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
          {text: '15 minutes before', value: '15'},
          {text: '30 minutes before', value: '30'},
          {text: '45 minutes before', value: '45'},
          {text: '1 hour before', value: '1'},
          {text: '2 hours before', value: '2'},
          {text: '3 hours before', value: '3'}
        ]
        }
      ],
    };
    let picker = await this.pickerCtrl.create(options);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('Reminder Time');
      console.log('col:', col);
      this.reminder = col.options[col.selectedIndex].text;
    });
  }

  ngOnInit() {
    console.log(this.myDate);
  }

}
