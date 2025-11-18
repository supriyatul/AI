import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { AuthService } from '../../auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ongoing-project',
  imports: [RouterModule],
  templateUrl: './ongoing-project.component.html',
  styleUrl: './ongoing-project.component.scss'
})
export class OngoingProjectComponent {
userobject
old_project
   constructor(private _shared_service: SharedService,private _authService:AuthService) {
  
    }
    ngOnInit(): void {
this.userobject = this._authService.getUser('loggedin user data');
console.log("userobject", this.userobject)
this._shared_service.getProjectsList({
  email:this.userobject.email,
  id: this.userobject.id,
  list_type:"on_going_projects"
}).subscribe((res)=>{
console.log("on_going_projects src",res)
this.old_project = res
})
}
}
