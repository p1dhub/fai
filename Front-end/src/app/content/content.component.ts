import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('postpictureprofile') postpicpro?: ElementRef;
  @ViewChild('postpic') postpic?: ElementRef;




  ngOnInit(): void {
    this.getpost();
  }
  constructor(private http: HttpClient) { }

  x = [5, 5];
  postname: string = "wedsd";
  posttime: string = "asdas";
  posttxt: string = "";
  postlikecount: number = 0;
  meepost: boolean = true;
  postlike: boolean = false;
  postdata: Array<any> = new Array;

  date = new Date;

  xxx() {
    if (this.postpicpro)
      this.postpicpro.nativeElement.src = "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/187374146_2881498205422397_3176921567837594606_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeFyeow_RpRrhuIvn2ansjB9RdqVlkinL4lF2pWWSKcviQJBoPtQTmnFQDKH6kNkpximgjtM48pbY37Mu-5Oc98Z&_nc_ohc=s_q43zWsv8IAX935AIe&_nc_ht=scontent.fbkk22-2.fna&oh=21bef68ddb9db2eb7663dc056da3e161&oe=6121957E"
    if (this.postpic)
      this.postpic.nativeElement.src = "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.6435-9/226318958_10208324434106494_5000518543063415152_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=cii7CuJi210AX9o1H-8&_nc_ht=scontent.fbkk5-6.fna&oh=8df5741d3f5385b91959dfa43932ac6a&oe=61289C4A"
  }

  pushlike(index: number) {
    console.log(index);




    if (this.postlike) {
      this.postdata[index].postlikecount--;
      this.postlike = false;
    }
    else {
      this.postdata[index].postlikecount++;
      this.postlike = true;
    }

  }

  getpost() {
    interface postobj {
      id?: number,
      name?: string,
      postpicpro?: string,
      posttime?: string,
      posttxt?: string,
      postpic?: string,
      postlikecount?: number

    }
    let datax: postobj;




    this.http.get<any>('http://localhost:3000/post/getpost').subscribe((response) => {
      for (let index = 0; index < response.length; index++) {

        datax = {
          id: index,
          name: response[index].name,
          postpicpro: response[index].pictureprofile,
          posttxt: response[index].textpost,
          postpic: response[index].picturepost,
          postlikecount: 0,
        }
        let istime: string = response[index].time
        var hour = this.date.getHours();
        var thistime = (hour - (7 + parseInt(istime.slice(11, 13))));
        if (thistime > 0)
          datax.posttime = thistime.toString() + " ชม";
        else {
          var minute = this.date.getMinutes();
          thistime = ((60 + parseInt(istime.slice(14, 16))) - minute)
          datax.posttime = thistime.toString() + " นาที";

        }
        console.log(datax);

        this.postdata[index] = datax;

      }


    })
  }
}
