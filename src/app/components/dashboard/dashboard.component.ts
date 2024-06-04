import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
  faSignOut,
  
} from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlertModelComponent } from '../alert-model/alert-model.component';
import { ProjectsComponent } from '../projects/projects.component';
import { DashboardService } from '../../services/dashboard.service';
import { MainLoaderComponent } from '../main-loader/main-loader.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, SidebarComponent ,RouterLink, RouterOutlet,CommonModule,AlertModelComponent,ProjectsComponent,MainLoaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  isLoadingmain:any;
  showSidebar = true;
  faCoffee = [faCoffee, faClose, faBars];
  itemIcons = [faList, faDashboard, faCog, faSignal, faCartShopping,faAdd,faUser,faSignOut];
  isLoadingMenu=false;
  data:any;
  topHeading="G'Day Ali Hassan"
  projects:any[]=[{
    name:'project 1',
    img:'../..//../assets/Images/project-logo-1.png'  
  },
  {
    img:'../..//../assets/Images/project-logo-2.jpeg',
    name: 'project 2'
  },
  {
    name:'project 3',
    img:'../..//../assets/Images/brand-logo-4.avif'
  },
  {
    name:'project 4',
    img:'../..//../assets/Images/brand-logo-3.avif'
  }

]
  
  constructor(private dashboardService:DashboardService){
    this.isLoadingmain=true;
  }
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  ngOnInit() {
    this.isLoadingmain=true;
    this.dashboardService.data$.subscribe(value => {
      this.topHeading = value;
    });
    setTimeout(()=>{
      this.isLoadingmain=false;
    },3000)
  }
  sidebarItems = [
    {
      title: 'Entities',
      badge: { type: 'warning', text: 'New' },
      isActive: false,
      submenuItems: ['Dashboard 1', 'Dashboard 2', 'Dashboard 3'],
    },
    {
      title: 'Dashboard',
      badge: { type: 'danger', text: '3' },
      isActive: false,
      submenuItems: ['Products', 'Orders', 'Credit card'],
    },
    {
      title: 'Configrations',
      badge: { type: 'warning', text: 'New' },
      isActive: false,
      submenuItems: ['Dashboard 1', 'Dashboard 2', 'Dashboard 3'],
    },
    {
      title: 'E-commerce',
      badge: { type: 'danger', text: '3' },
      isActive: false,
      submenuItems: ['Products', 'Orders', 'Credit card'],
    },

    // Add more sidebar items as needed
  ];

  toggleDropdown(item: any) {
    if (!item.submenuItems) {
      return; // If it's a submenu item, return
    }
  
    // Close all other dropdowns
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
  //   this.dashboardService.getEntityData(name).subscribe((data:any)=>{
  //     this.data=data;
  //   })
  // }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
