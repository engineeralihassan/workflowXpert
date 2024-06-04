import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import {
  faBars,
  faCartShopping,
  faClose,
  faCog,
  faCoffee,
  faCross,
  faDashboard,
  faSignal,
  faUser,
  faList,
  faTachometer,
  faProjectDiagram,
  faTasks, faTools
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule,CommonModule,RouterLinkActive,RouterLink,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  showSidebar = true;
  faCoffee = [faCoffee, faClose, faBars];
  itemIcons = [faTachometer,faProjectDiagram,faTasks,faTools,faList, faDashboard, faCog, faSignal, faCartShopping];
  isLoadingMenu=false;
  data:any;
  
  constructor(){

  }
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  ngOnInit() {
  }
  sidebarItems = [
    {
      title: 'DashBoard',
      badge: { type: 'warning', text: 'New' },
      isActive: false,
      link:'/dashboard'
    },
    {
      title: 'Projects',
      badge: { type: 'danger', text: '3' },
      isActive: false,
      link:'/dashboard/projects'
    },
    {
      title: 'My Work',
      badge: { type: 'warning', text: 'New' },
      isActive: false,
    },
    {
      title: 'Tools',
      badge: { type: 'danger', text: '3' },
      isActive: false,
    },
  ];

  toggleDropdown(item: any) {
    if (!item.submenuItems) {
      return; 
    }
  
    this.sidebarItems.forEach((sidebarItem) => {
      if (sidebarItem !== item) {
        sidebarItem.isActive = false;
      }
    });
  
    
    item.isActive = !item.isActive;
  
    if (item.isActive) {
     // this.loadEntities(); 
    }
  }
  

  // loadEntities() {
  //   console.log("calls goes");
  //   this.isLoadingMenu=true;
  //   this.dashboardService.getEntities().subscribe((entities: any[]) => {
  //     this.sidebarItems[0].submenuItems = entities.map(entity => entity);
  //     this.isLoadingMenu=false;
  //   });
  // }
  // makeData(name:any){
  //   this.dashboardService.getEntityData(name).subscribe((data)=>{
  //     this.data=data;
  //   })
  // }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
