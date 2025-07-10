class NavBar extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
           <nav
               class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
               id="layout-navbar" style="border: 2px solid rgba(0, 0, 0, 0.3); border-radius: 15px;">
               <div class="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none"
                  bis_skin_checked="1">
                  <a class="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
                     <i class="ri-menu-fill ri-24px"></i>
                  </a>
               </div>

               <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse" bis_skin_checked="1">
                  <!-- Search -->
                  <div class="navbar-nav align-items-center" bis_skin_checked="1">
                     <div class="nav-item navbar-search-wrapper mb-0" bis_skin_checked="1">
                        <a class="nav-item nav-link search-toggler fw-normal px-0" href="javascript:void(0);">
                           <i class="ri-search-line"></i>
                           <span class="d-none d-md-inline-block text-muted ms-1_5" style="padding-right: 950px;">Search
                              (Ctrl+/)</span>
                        </a>
                     </div>
                  </div>
                  <!-- /Search -->

                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                      <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown">
                        <span id="welcome-user" style="margin-right: 10px; display: inline-block"></span>
                      </li>
                      <li class="nav-item navbar-dropdown dropdown-user dropdown">
                        <a class="nav-link dropdown-toggle hide-arrow p-0" href="javascript:void(0);" data-bs-toggle="dropdown">
                           <div class="avatar avatar-online" bis_skin_checked="1">
                             <img class="user-avatar-img" src="" alt="" class="w-px-40 h-auto rounded-circle" style="width:40px;height:auto;border-radius:50%;" />
                           </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end mt-3 py-2">
                           <li>
                             <a class="dropdown-item waves-effect" href="#!">
                               <div class="d-flex align-items-center" bis_skin_checked="1">
                                 <div class="flex-shrink-0 me-2" bis_skin_checked="1">
                                    <div class="avatar avatar-online" bis_skin_checked="1">
                                      <img class="user-avatar-img" src="./assets/img/Dashboard/1.png" alt="" class="w-px-40 h-auto rounded-circle" style="width:40px;height:auto;border-radius:50%;" />
                                    </div>
                                 </div>
                                 <div class="flex-grow-1" bis_skin_checked="1">
                                    <h6 id="user-fullname" class="mb-0 small"></h6>
                                    <small id="user-role" class="text-muted"></small>
                                 </div>
                               </div>
                             </a>
                           </li>
                           <li>
                             <div class="dropdown-divider" bis_skin_checked="1"></div>
                           </li>
                           <li>
                             <a id="profile-link" class="dropdown-item waves-effect" href="./AccountInfo.html?userUid=&userAdminId=">
                               <i class="ri-user-3-line ri-22px me-2"></i>
                               <span class="align-middle">My Profile</span>
                             </a>
                           </li>
                           <li>
                             <a id="settings-link" class="dropdown-item waves-effect" href="./AccountSecurity.html?userAdminId=">
                               <i class="ri-settings-4-line ri-22px me-2"></i>
                               <span class="align-middle">Settings</span>
                             </a>
                           </li>
                           <li>
                             <div class="d-grid px-4 pt-2 pb-1" bis_skin_checked="1">
                               <a id="logout-link" class="btn btn-danger d-flex waves-effect waves-light" href="LoginAdmin.html?userAdminId="
                                 onclick="handleLogout(event)">
                                 <small class="align-middle">Logout</small>
                                 <i class="ri-logout-box-r-line ms-2 ri-16px"></i>
                               </a>
                             </div>
                           </li>
                           <script>
                             function showToast(message, isSuccess = false) {
                               const toast = document.createElement('div');
                               toast.style.minWidth = '200px';
                               toast.style.marginBottom = '10px';
                               toast.style.padding = '12px 20px';
                               toast.style.borderRadius = '6px';
                               toast.style.background = isSuccess ? '#28a745' : '#dc3545';
                               toast.style.color = '#fff';
                               toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                               toast.innerText = message;
                               document.getElementById('toast-container').appendChild(toast);
                               setTimeout(() => toast.remove(), 3000);
                             }

                             function handleLogout(e) {
                               e.preventDefault();
                               showToast('Logout success!', true);
                               setTimeout(function () {
                                 window.location.href = document.getElementById('logout-link').href;
                               }, 1200);
                             }
                           </script>
                        </ul>
                      </li>
                      <!--/ User -->
                    </ul>
               </div>
               <div id="toast-container" style="position: fixed; top: 24px; right: 24px; z-index: 9999;"></div>

               <!-- Search Small Screens -->
               <div class="navbar-search-wrapper search-input-wrapper d-none" bis_skin_checked="1">
                  <span class="twitter-typeahead" style="position: relative; display: inline-block"><input type="text"
                        class="form-control search-input container-xxl border-0 tt-input" placeholder="Search..."
                        aria-label="Search..." autocomplete="off" spellcheck="false" dir="auto"
                        style="position: relative; vertical-align: top" />
                     <pre aria-hidden="true" style="
                              position: absolute;
                              visibility: hidden;
                              white-space: pre;
                              font-family: Inter, -apple-system,
                                 BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu,
                                 Cantarell, 'Fira Sans', 'Droid Sans',
                                 'Helvetica Neue', sans-serif;
                              font-size: 15px;
                              font-style: normal;
                              font-variant: normal;
                              font-weight: 400;
                              word-spacing: 0px;
                              letter-spacing: 0px;
                              text-indent: 0px;
                              text-rendering: auto;
                              text-transform: none;
                           "></pre>
                     <div class="tt-menu navbar-search-suggestion ps" bis_skin_checked="1" style="
                              position: absolute;
                              top: 100%;
                              left: 0px;
                              z-index: 100;
                              display: none;
                           ">
                        <div class="tt-dataset tt-dataset-pages" bis_skin_checked="1"></div>
                        <div class="tt-dataset tt-dataset-files" bis_skin_checked="1"></div>
                        <div class="tt-dataset tt-dataset-members" bis_skin_checked="1"></div>
                        <div class="ps__rail-x" bis_skin_checked="1" style="left: 0px; bottom: 0px">
                           <div class="ps__thumb-x" tabindex="0" bis_skin_checked="1" style="left: 0px; width: 0px">
                           </div>
                        </div>
                        <div class="ps__rail-y" bis_skin_checked="1" style="top: 0px; right: 0px">
                           <div class="ps__thumb-y" tabindex="0" bis_skin_checked="1" style="top: 0px; height: 0px">
                           </div>
                        </div>
                     </div>
                  </span>
                  <i class="ri-close-fill search-toggler cursor-pointer"></i>
               </div>
            </nav>
         `;
      // Fetch user info and update navbar
      document.addEventListener('DOMContentLoaded', function () {
         const userAdminId = localStorage.getItem('userAdminId');
         if (!userAdminId) return;

         fetch(`http://localhost:8080/api/v1/user/uid/${userAdminId}`)
            .then(res => res.json())
            .then(json => {
               if (json.statusCode === 200 && json.data) {
                  const user = json.data;
                  // Update welcome text
                  const welcomeSpan = document.getElementById('welcome-user');
                  if (welcomeSpan) {
                     welcomeSpan.textContent = `Welcome, ${user.firstName || ''}!🎉`;
                  }
                  // Update avatar
                  const avatarImgs = document.querySelectorAll('.user-avatar-img');
                  avatarImgs.forEach(img => {
                     img.src = user.avatarUrl || './assets/img/Dashboard/1.png';
                     img.alt = user.firstName || 'Avatar';
                  });
                  // Update name and role
                  const userName = document.getElementById('user-fullname');
                  if (userName) userName.textContent = `${user.firstName || ''} ${user.lastName || ''}`;
                  const userRole = document.getElementById('user-role');
                  if (userRole) userRole.textContent = user.role || '';
                  // Update profile link
                  const profileLink = document.getElementById('profile-link');
                  if (profileLink) profileLink.href = `./AccountInfo.html?userUid=${user.uid}&userAdminId=${userAdminId}`;
                  // Update settings link
                  const settingsLink = document.getElementById('settings-link');
                  if (settingsLink) settingsLink.href = `./AccountSecurity.html?userAdminId=${userAdminId}`;
                  // Update logout link
                  const logoutLink = document.getElementById('logout-link');
                  if (logoutLink) logoutLink.href = `LoginAdmin.html?userAdminId=${userAdminId}`;
               }
            });
      });
   }
}
customElements.define("navbar-main", NavBar);
