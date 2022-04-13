import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, takeWhile } from 'rxjs';
import { User } from 'src/model/User';
import { MyRepositoryService } from 'src/services/my-repository.service';

@Component({
  selector: 'app-show-card-details',
  templateUrl: './show-card-details.component.html',
  styleUrls: ['./show-card-details.component.scss']
})
export class ShowCardDetailsComponent implements OnInit {
  isAlive = true;
  user!: User;

  constructor(private route: ActivatedRoute, private myrepo: MyRepositoryService,private router:Router) {
    // this.route.params.subscribe(data => {
    //   this.youtubeRepo.getUserById(data.id).subscribe(user => {
    //     console.log(user);
    //   });
    // });
    
  }
  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const user$ = this.route.params.pipe(map(data => data['id']),
      takeWhile(() => this.isAlive),
      switchMap((id) => {
        return this.myrepo.getUserById(id);
      }), filter(res => !!res));
    user$.subscribe(data => {
      this.user = data;
    });
  }
  backToListOfUsers(){
  this.router.navigate(['/users'])
  }

}
