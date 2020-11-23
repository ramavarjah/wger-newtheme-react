import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class UserProfile extends Component {
    render() {
        return (
            <div>
            <div class="row" style={{width: 853, position:"relative", top: 31, left: 184, float: "right"}}>
              <div class="col-lg-4">
            
                <div class="card card-body mb-3 mb-lg-5">
                  <h5>Complete your profile</h5>

                
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="progress flex-grow-1">
                      <div class="progress-bar bg-primary" role="progressbar" style={{width: 82}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span class="ml-4">82%</span>
                  </div>
                  
                </div>
       
                
                <div id="accountSidebarNav"></div>

             
                <div class="js-sticky-block card mb-3 mb-lg-5"
                     data-hs-sticky-block-options='{
                       "parentSelector": "#accountSidebarNav",
                       "breakpoint": "lg",
                       "startPoint": "#accountSidebarNav",
                       "endPoint": "#stickyBlockEndPoint",
                       "stickyOffsetTop": 20
                     }'>
                 
                  <div class="card-header">
                    <h5 class="card-header-title">Profile</h5>
                  </div>
                

                  
                  <div class="card-body">
                    <ul class="list-unstyled list-unstyled-py-3 text-dark mb-3">
                      <li class="py-0">
                        <small class="card-subtitle">About</small>
                      </li>

                      <li>
                        <i class="tio-user-outlined nav-icon"></i>
                        Ella Lauda
                      </li>
                      <li>
                        <i class="tio-briefcase-outlined nav-icon"></i>
                        No department
                      </li>
                      <li>
                        <i class="tio-city nav-icon"></i>
                        Htmlstream
                      </li>

                      <li class="pt-2 pb-0">
                        <small class="card-subtitle">Contacts</small>
                      </li>

                      <li>
                        <i class="tio-online nav-icon"></i>
                        ella@example.com
                      </li>
                      <li>
                        <i class="tio-android-phone-vs nav-icon"></i>
                        +1 (609) 972-22-22
                      </li>

                      <li class="pt-2 pb-0">
                        <small class="card-subtitle">Dashboard</small>
                      </li>

                      <li>
                        <i class="tio-group-equal nav-icon"></i>
                        Member of 7 teams
                      </li>
                      <li>
                        <i class="tio-briefcase-outlined nav-icon"></i>
                        Working on 8 projects
                      </li>
                    </ul>
                  </div> 
            </div>
            </div>
            </div>
            </div>

            )
        
        
    }
}
