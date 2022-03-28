import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from'@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post} from '../models/post.mode';
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  post = {} as Post;
  message : string;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore

  ) {}

  ngOnInit() {}
  display()
  {
    this.message = 'Thank You!';
    alert (this.message);
  }
  helpButton(){
    console.log('button is clicked');
}

volunteerButton(){
  console.log('button is clicked');
}

async createPost(post: Post){
  if(this.formValidation()){
    //show loader
    // eslint-disable-next-line prefer-const
    let loader = this.loadingCtrl.create({
      message: 'Please wait...'
  });
  (await loader).present();

  try{
    await this.firestore.collection('help').add(post);
  } catch (e){
    this.showToast(e);
}
//dismiss loader
(await loader).dismiss();

//redirect to help page
this.navCtrl.navigateRoot('home');
  }
 }

 formValidation(){
   if(!this.post.name){
     this.showToast('Enter name');
     return false;
   }

   if(!this.post.email){
     this.showToast('Enter phone');
     return false;
   }

   if(!this.post.message){
     this.showToast('Enter message');
     return false;
   }

   return true;
 }

 showToast(message: string){
   this.toastCtrl.create({
     message,
     duration: 3000
   })
   .then(toastData => toastData.present());
 }
}