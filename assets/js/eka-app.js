var EKA_BASE = typeof window.EKA_BASE !== 'undefined' ? window.EKA_BASE : './';
var EKA_ACTIVE = typeof window.EKA_ACTIVE !== 'undefined' ? window.EKA_ACTIVE : '';

(function(){var l=document.createElement('link');l.rel='icon';l.type='image/x-icon';l.href=EKA_BASE+'favicon.ico';document.head.appendChild(l);})();

var ekaMenuData = [
  {heading:'MAIN'},
  {title:'Dashboards',icon:'fas fa-th-large',badge:'5',children:[
    {title:'Main Dashboard',url:'dashboards/index.html'},
    {title:'Analytics',url:'dashboards/analytics.html'},
    {title:'CRM',url:'dashboards/crm.html'},
    {title:'Sales',url:'dashboards/sales.html'},
    {title:'Projects',url:'dashboards/projects.html'}
  ]},
  {heading:'APPS'},
  {title:'Calendar',icon:'fas fa-calendar-alt',url:'apps/calendar.html'},
  {title:'Chat',icon:'fas fa-comments',url:'apps/chat.html'},
  {title:'Email',icon:'fas fa-envelope',children:[
    {title:'Inbox',url:'apps/email-inbox.html'},
    {title:'Read',url:'apps/email-read.html'},
    {title:'Compose',url:'apps/email-compose.html'}
  ]},
  {title:'Kanban Board',icon:'fas fa-columns',url:'apps/kanban.html'},
  {title:'File Manager',icon:'fas fa-folder-open',url:'apps/file-manager.html'},
  {title:'Notes',icon:'fas fa-sticky-note',url:'apps/notes.html'},
  {title:'Tasks',icon:'fas fa-tasks',url:'apps/tasks.html'},
  {title:'Contacts',icon:'fas fa-address-book',url:'apps/contacts.html'},
  {title:'Tickets',icon:'fas fa-headset',url:'apps/tickets.html'},
  {title:'Social Feed',icon:'fas fa-share-alt',url:'apps/social.html'},
  {title:'Todo',icon:'fas fa-check-circle',url:'apps/todo.html'},
  {title:'Crypto',icon:'fas fa-coins',url:'apps/crypto.html'},
  {title:'Projects',icon:'fas fa-project-diagram',url:'apps/projects.html'},
  {title:'Blog',icon:'fas fa-newspaper',children:[
    {title:'Posts',url:'blog/list.html'},
    {title:'Details',url:'blog/details.html'},
    {title:'Create Post',url:'blog/create.html'}
  ]},
  {heading:'PAGES'},
  {title:'Ecommerce',icon:'fas fa-shopping-bag',children:[
    {title:'Overview',url:'ecommerce/overview.html'},
    {title:'Products',url:'ecommerce/products.html'},
    {title:'Product Grid',url:'ecommerce/product-grid.html'},
    {title:'Product Details',url:'ecommerce/product-details.html'},
    {title:'Orders',url:'ecommerce/orders.html'},
    {title:'Order Details',url:'ecommerce/order-details.html'},
    {title:'Customers',url:'ecommerce/customers.html'},
    {title:'Reviews',url:'ecommerce/reviews.html'},
    {title:'Coupons',url:'ecommerce/coupons.html'},
    {title:'Categories',url:'ecommerce/categories.html'},
    {title:'Sellers',url:'ecommerce/sellers.html'},
    {title:'Refunds',url:'ecommerce/refunds.html'},
    {title:'Add Product',url:'ecommerce/add-product.html'},
    {title:'Shipping',url:'ecommerce/shipping.html'},
    {title:'Cart',url:'ecommerce/cart.html'},
    {title:'Checkout',url:'ecommerce/checkout.html'}
  ]},
  {title:'Invoices',icon:'fas fa-file-invoice-dollar',children:[
    {title:'List',url:'invoices/list.html'},
    {title:'Details',url:'invoices/details.html'},
    {title:'Create',url:'invoices/create.html'}
  ]},
  {title:'Authentication',icon:'fas fa-shield-alt',children:[
    {title:'Login',url:'auth/login.html'},
    {title:'Register',url:'auth/register.html'},
    {title:'Forgot Password',url:'auth/forgot-password.html'},
    {title:'Reset Password',url:'auth/reset-password.html'},
    {title:'Lock Screen',url:'auth/lock-screen.html'},
    {title:'Two Step Verification',url:'auth/two-step-verification.html'}
  ]},
  {title:'Utility',icon:'fas fa-layer-group',children:[
    {title:'Starter Page',url:'pages/starter.html'},
    {title:'FAQ',url:'pages/faq.html'},
    {title:'Pricing',url:'pages/pricing.html'},
    {title:'Testimonials',url:'pages/testimonials.html'},
    {title:'Search Results',url:'pages/search-results.html'},
    {title:'Coming Soon',url:'pages/coming-soon.html'},
    {title:'Maintenance',url:'pages/maintenance.html'},
    {title:'Error 404',url:'pages/404.html'},
    {title:'Error 500',url:'pages/500.html'},
    {title:'Blank Page',url:'pages/blank.html'},
    {title:'Gallery',url:'pages/gallery.html'},
    {title:'Documentation',url:'pages/documentation.html'},
    {title:'Changelog',url:'pages/changelog.html'},
    {title:'Maps',url:'pages/maps.html'},
    {title:'Terms of Service',url:'pages/terms.html'},
    {title:'Privacy Policy',url:'pages/privacy.html'},
    {title:'UI Kit',url:'pages/ui-kit.html'},
    {title:'Code Snippets',url:'pages/snippets.html'},
    {title:'API Docs',url:'pages/api-docs.html'},
    {title:'Landing Page',url:'pages/landing.html'}
  ]},
  {heading:'MANAGEMENT'},
  {title:'Users',icon:'fas fa-users',url:'management/users.html'},
  {title:'Profile',icon:'fas fa-user-circle',url:'management/profile.html'},
  {title:'Roles & Permissions',icon:'fas fa-user-shield',url:'management/roles.html'},
  {title:'Teams',icon:'fas fa-people-arrows',url:'management/teams.html'},
  {title:'Departments',icon:'fas fa-sitemap',url:'management/departments.html'},
  {title:'Settings',icon:'fas fa-cog',url:'management/settings.html'},
  {title:'API Keys',icon:'fas fa-key',url:'management/api-keys.html'},
  {title:'Notifications',icon:'fas fa-bell',url:'management/notifications.html'},
  {title:'Announcements',icon:'fas fa-bullhorn',url:'management/announcements.html'},
  {title:'Activity Feed',icon:'fas fa-history',url:'management/activity.html'},
  {title:'Audit Log',icon:'fas fa-clipboard-list',url:'management/audit-log.html'},
  {title:'Billing',icon:'fas fa-money-bill-wave',url:'management/billing.html'},
  {title:'Integrations',icon:'fas fa-puzzle-piece',url:'management/integrations.html'},
  {title:'Subscriptions',icon:'fas fa-credit-card',url:'management/subscriptions.html'},
  {title:'Backups',icon:'fas fa-database',url:'management/backups.html'},
  {title:'Webhooks',icon:'fas fa-link',url:'management/webhooks.html'},
  {title:'Email Templates',icon:'fas fa-envelope-open-text',url:'management/email-templates.html'},
  {title:'System Logs',icon:'fas fa-terminal',url:'management/logs.html'},
  {heading:'UI ELEMENTS'},
  {title:'Components',icon:'fas fa-cube',children:[
    {title:'Buttons',url:'components/buttons.html'},
    {title:'Cards',url:'components/cards.html'},
    {title:'Alerts',url:'components/alerts.html'},
    {title:'Modals',url:'components/modals.html'},
    {title:'Tabs & Accordions',url:'components/tabs.html'},
    {title:'Avatars',url:'components/avatars.html'},
    {title:'Badges',url:'components/badges.html'},
    {title:'Progress',url:'components/progress.html'},
    {title:'Timeline',url:'components/timeline.html'},
    {title:'Widgets',url:'components/widgets.html'},
    {title:'Grid System',url:'components/grid.html'},
    {title:'Icons',url:'components/icons.html'},
    {title:'Animated Icons',url:'components/animated-icons.html'},
    {title:'Dropdowns',url:'components/dropdowns.html'},
    {title:'Tooltips & Popovers',url:'components/tooltips.html'},
    {title:'Loaders & Spinners',url:'components/loaders.html'},
    {title:'Toasts',url:'components/toasts.html'},
    {title:'List Groups',url:'components/lists.html'},
    {title:'Breadcrumbs',url:'components/breadcrumbs.html'},
    {title:'Typography',url:'components/typography.html'},
    {title:'Colors',url:'components/colors.html'}
  ]},
  {title:'Forms',icon:'fas fa-edit',children:[
    {title:'Basic Forms',url:'forms/basic.html'},
    {title:'Advanced Forms',url:'forms/advanced.html'},
    {title:'Form Validation',url:'forms/validation.html'},
    {title:'Form Layouts',url:'forms/layouts.html'},
    {title:'Form Wizard',url:'forms/wizard.html'},
    {title:'Rich Text Editor',url:'forms/editor.html'},
    {title:'File Upload',url:'forms/file-upload.html'},
    {title:'Input Groups',url:'forms/input-groups.html'},
    {title:'Select & Checkboxes',url:'forms/selects.html'}
  ]},
  {title:'Tables',icon:'fas fa-table',children:[
    {title:'Basic Tables',url:'tables/basic.html'},
    {title:'Advanced Tables',url:'tables/advanced.html'},
    {title:'Responsive Tables',url:'tables/responsive.html'},
    {title:'Data Tables',url:'tables/data-tables.html'}
  ]},
  {title:'Charts',icon:'fas fa-chart-pie',children:[
    {title:'Line Charts',url:'charts/line.html'},
    {title:'Area Charts',url:'charts/area.html'},
    {title:'Bar Charts',url:'charts/bar.html'},
    {title:'Pie & Donut',url:'charts/pie.html'},
    {title:'Mixed Charts',url:'charts/mixed.html'},
    {title:'Radial Charts',url:'charts/radial.html'},
    {title:'Heatmap',url:'charts/heatmap.html'},
    {title:'Scatter',url:'charts/scatter.html'}
  ]}
];

function ekaIsActive(url) {
  if (!url || !EKA_ACTIVE) return false;
  return EKA_ACTIVE === url;
}

function ekaHasActiveChild(children) {
  if (!children) return false;
  return children.some(function(c) { return ekaIsActive(c.url); });
}

function ekaBuildSidebar() {
  var sb = document.getElementById('ekaSidebar');
  if (!sb) return;
  var html = '<div class="eka-sidebar-logo"><a href="' + EKA_BASE + 'dashboards/index.html">';
  html += '<span class="eka-logo-icon">EA</span>';
  html += '<span class="eka-logo-text">EkaAdmin</span></a></div>';
  html += '<nav class="eka-sidebar-menu">';
  ekaMenuData.forEach(function(item) {
    if (item.heading) {
      html += '<div class="eka-menu-heading">' + item.heading + '</div>';
      return;
    }
    var hasChildren = item.children && item.children.length > 0;
    var isActive = hasChildren ? ekaHasActiveChild(item.children) : ekaIsActive(item.url);
    var isOpen = hasChildren && isActive;
    var cls = 'eka-menu-item' + (isActive ? ' eka-active' : '') + (isOpen ? ' eka-open' : '');
    html += '<div class="' + cls + '">';
    var href = hasChildren ? 'javascript:void(0)' : (EKA_BASE + item.url);
    html += '<a href="' + href + '">';
    html += '<span class="eka-menu-icon"><i class="' + item.icon + '"></i></span>';
    html += '<span class="eka-menu-text">' + item.title + '</span>';
    if (item.badge) html += '<span class="eka-menu-badge">' + item.badge + '</span>';
    if (hasChildren) html += '<i class="fas fa-chevron-right eka-menu-arrow"></i>';
    html += '</a>';
    if (hasChildren) {
      html += '<div class="eka-submenu">';
      item.children.forEach(function(child) {
        var cActive = ekaIsActive(child.url);
        html += '<div class="eka-menu-item' + (cActive ? ' eka-active' : '') + '">';
        html += '<a href="' + EKA_BASE + child.url + '"><span class="eka-menu-text">' + child.title + '</span></a>';
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div>';
  });
  html += '</nav>';
  sb.innerHTML = html;
}

function ekaBuildTopbar() {
  var tb = document.getElementById('ekaTopbar');
  if (!tb) return;
  var html = '<button class="eka-topbar-toggle" id="ekaSidebarToggle"><i class="fas fa-bars"></i></button>';
  html += '<div class="eka-topbar-search"><i class="fas fa-search"></i><input type="text" placeholder="Search..." id="ekaSearchInput"><kbd>Ctrl+K</kbd></div>';
  html += '<div class="eka-topbar-right">';
  html += '<div class="eka-topbar-btn" id="ekaThemeToggle" title="Toggle Theme"><i class="fas fa-moon"></i></div>';
  html += '<div class="eka-topbar-btn" id="ekaFullscreen" title="Fullscreen"><i class="fas fa-expand"></i></div>';
  html += '<div class="eka-topbar-btn" id="ekaNotifBtn" style="position:relative"><i class="fas fa-bell"></i><span class="eka-badge-dot"></span>';
  html += '<div class="eka-dropdown-menu eka-notification-dropdown" id="ekaNotifDrop">';
  html += '<div class="eka-dropdown-header"><h6 class="mb-0 fs-14">Notifications</h6><span class="eka-badge eka-badge-soft-danger">4 New</span></div>';
  html += '<div class="eka-notify-scroll">';
  html += ekaNotifItem('bg-soft-primary','fas fa-comment','New message received','Sarah sent you a message','2 min ago');
  html += ekaNotifItem('bg-soft-success','fas fa-check-circle','Order completed','Order #2456 has been delivered','15 min ago');
  html += ekaNotifItem('bg-soft-warning','fas fa-exclamation-triangle','Server alert','CPU usage above 85%','1 hour ago');
  html += ekaNotifItem('bg-soft-info','fas fa-user-plus','New user registered','John Doe created an account','3 hours ago');
  html += '</div>';
  html += '<div class="eka-dropdown-footer text-center"><a href="' + EKA_BASE + 'management/notifications.html" class="fs-13 text-primary fw-medium">View All Notifications</a></div>';
  html += '</div></div>';
  html += '<div class="eka-topbar-user" id="ekaProfileBtn">';
  html += '<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="Admin">';
  html += '<div class="eka-topbar-user-info d-md-none d-lg-block"><div class="eka-topbar-user-name">Richard Davis</div><div class="eka-topbar-user-role">Administrator</div></div>';
  html += '<div class="eka-dropdown-menu" id="ekaProfileDrop">';
  html += '<div class="eka-dropdown-header"><h6 class="fs-14 mb-0">Richard Davis</h6><p class="fs-12 text-muted mb-0">admin@ekadmin.com</p></div>';
  html += '<a href="' + EKA_BASE + 'management/profile.html" class="eka-dropdown-item"><i class="fas fa-user"></i> My Profile</a>';
  html += '<a href="' + EKA_BASE + 'apps/chat.html" class="eka-dropdown-item"><i class="fas fa-comments"></i> Messages</a>';
  html += '<a href="' + EKA_BASE + 'management/settings.html" class="eka-dropdown-item"><i class="fas fa-cog"></i> Settings</a>';
  html += '<div class="eka-dropdown-divider"></div>';
  html += '<a href="' + EKA_BASE + 'auth/lock-screen.html" class="eka-dropdown-item"><i class="fas fa-lock"></i> Lock Screen</a>';
  html += '<a href="' + EKA_BASE + 'auth/login.html" class="eka-dropdown-item text-danger"><i class="fas fa-sign-out-alt"></i> Logout</a>';
  html += '</div></div></div>';
  tb.innerHTML = html;
}

function ekaNotifItem(bg, icon, title, text, time) {
  return '<div class="eka-notify-item"><div class="eka-notify-icon ' + bg + '"><i class="' + icon + '"></i></div><div class="eka-notify-content"><div class="eka-notify-title">' + title + '</div><div class="eka-notify-text">' + text + '</div><div class="eka-notify-time"><i class="fas fa-clock me-1"></i>' + time + '</div></div></div>';
}

function ekaBuildFooter() {
  var ft = document.getElementById('ekaFooter');
  if (!ft) return;
  ft.innerHTML = '<span>&copy; ' + new Date().getFullYear() + ' EkaAdmin. Crafted by Eka Yazilim</span><span>Version 1.0.0</span>';
}

function ekaBuildThemePanel() {
  var tp = document.getElementById('ekaThemePanel');
  if (!tp) return;
  var html = '<div class="eka-theme-panel-header"><h6><i class="fas fa-palette me-2"></i>Theme Settings</h6><button id="ekaThemePanelClose" style="font-size:1.25rem;color:var(--eka-gray-500)"><i class="fas fa-times"></i></button></div>';
  html += '<div class="eka-theme-panel-body">';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Theme Color Mode</div><div class="eka-theme-toggle-group"><button class="eka-theme-toggle-btn eka-active" data-scheme="light"><i class="fas fa-sun me-1"></i>Light</button><button class="eka-theme-toggle-btn" data-scheme="dark"><i class="fas fa-moon me-1"></i>Dark</button></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Layout Width</div><div class="eka-theme-toggle-group"><button class="eka-theme-toggle-btn eka-active" data-layout-width="full"><i class="fas fa-arrows-alt-h me-1"></i>Full Width</button><button class="eka-theme-toggle-btn" data-layout-width="boxed"><i class="fas fa-compress-alt me-1"></i>Boxed</button></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Menu Style</div><div class="eka-theme-toggle-group" style="flex-wrap:wrap"><button class="eka-theme-toggle-btn eka-active" data-menu-style="default" style="flex:1 0 45%"><i class="fas fa-bars me-1"></i>Default</button><button class="eka-theme-toggle-btn" data-menu-style="horizontal" style="flex:1 0 45%"><i class="fas fa-grip-lines me-1"></i>Horizontal</button><button class="eka-theme-toggle-btn" data-menu-style="icon-hover" style="flex:1 0 45%"><i class="fas fa-mouse-pointer me-1"></i>Icon Hover</button><button class="eka-theme-toggle-btn" data-menu-style="icon-default" style="flex:1 0 45%"><i class="fas fa-th-large me-1"></i>Icon Only</button></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Menu Position</div><div class="eka-theme-toggle-group"><button class="eka-theme-toggle-btn eka-active" data-menu-pos="fixed"><i class="fas fa-thumbtack me-1"></i>Fixed</button><button class="eka-theme-toggle-btn" data-menu-pos="scrollable"><i class="fas fa-scroll me-1"></i>Scrollable</button></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Header Position</div><div class="eka-theme-toggle-group"><button class="eka-theme-toggle-btn eka-active" data-header-pos="fixed"><i class="fas fa-thumbtack me-1"></i>Fixed</button><button class="eka-theme-toggle-btn" data-header-pos="scrollable"><i class="fas fa-scroll me-1"></i>Scrollable</button></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Sidebar Size</div><div class="eka-theme-toggle-group"><button class="eka-theme-toggle-btn eka-active" data-sidebar-size="default">Default</button><button class="eka-theme-toggle-btn" data-sidebar-size="compact">Compact</button></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Menu Background Color</div><div class="eka-theme-option-subtitle">Pick a color or choose from presets</div><div class="eka-theme-colors">';
  var sColors = [['#405189','default'],['#1a1d21','dark'],['#0ab39c','green'],['#3577f1','blue'],['#f06548','red'],['#212529','charcoal'],['#7c3aed','purple'],['#6c757d','gray']];
  sColors.forEach(function(c) { html += '<div class="eka-theme-color-btn' + (c[1]==='default'?' eka-active':'') + '" style="background:' + c[0] + '" data-sidebar-color="' + c[0] + '"></div>'; });
  html += '</div><div class="eka-theme-color-input"><input type="color" id="ekaSidebarColorPicker" value="#405189"><span>Custom color</span></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Header Background Color</div><div class="eka-theme-option-subtitle">Customize header background dynamically</div><div class="eka-theme-colors">';
  var hColors = [['#ffffff','default'],['#405189','primary'],['#1a1d21','dark'],['#0ab39c','success'],['#3577f1','info']];
  hColors.forEach(function(c) { html += '<div class="eka-theme-color-btn' + (c[1]==='default'?' eka-active':'') + '" style="background:' + c[0] + (c[1]==='default'?';border:2px solid #e9ebec':'') + '" data-header-color="' + c[0] + '"></div>'; });
  html += '</div><div class="eka-theme-color-input"><input type="color" id="ekaHeaderColorPicker" value="#ffffff"><span>Custom color</span></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Theme Primary Color</div><div class="eka-theme-option-subtitle">Changes buttons, links, and accents globally</div><div class="eka-theme-colors">';
  var pColors = [['#405189','indigo'],['#3577f1','blue'],['#0ab39c','teal'],['#f06548','red'],['#f7b84b','amber'],['#7c3aed','violet'],['#e91e63','pink'],['#299cdb','cyan']];
  pColors.forEach(function(c) { html += '<div class="eka-theme-color-btn' + (c[1]==='indigo'?' eka-active':'') + '" style="background:' + c[0] + '" data-primary-color="' + c[0] + '"></div>'; });
  html += '</div><div class="eka-theme-color-input"><input type="color" id="ekaPrimaryColorPicker" value="#405189"><span>Custom primary</span></div></div>';

  html += '<div class="eka-theme-option"><div class="eka-theme-option-title">Background Pattern</div><div class="eka-theme-image-options">';
  var bgPatterns = ['none','linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%)','linear-gradient(135deg,#667eea 0%,#764ba2 100%)','linear-gradient(135deg,#f093fb 0%,#f5576c 100%)','linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)','linear-gradient(135deg,#43e97b 0%,#38f9d7 100%)','linear-gradient(135deg,#fa709a 0%,#fee140 100%)','linear-gradient(135deg,#a18cd1 0%,#fbc2eb 100%)'];
  bgPatterns.forEach(function(bg,i) { html += '<div class="eka-theme-image-btn' + (i===0?' eka-active':'') + '" style="background:' + (bg==='none'?'var(--eka-body-bg)':bg) + '" data-bg-pattern="' + bg + '"></div>'; });
  html += '</div></div>';

  html += '</div>';
  html += '<div class="eka-theme-panel-footer"><button class="eka-btn eka-btn-soft-danger eka-btn-sm" id="ekaThemeReset"><i class="fas fa-undo me-1"></i>Reset</button><button class="eka-btn eka-btn-primary eka-btn-sm" id="ekaThemePanelClose2"><i class="fas fa-check me-1"></i>Apply & Close</button></div>';
  tp.innerHTML = html;
}

function ekaInitSidebar() {
  document.querySelectorAll('.eka-menu-item > a').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var parent = a.parentElement;
      var sub = parent.querySelector('.eka-submenu');
      if (!sub) return;
      e.preventDefault();
      var wasOpen = parent.classList.contains('eka-open');
      parent.closest('.eka-sidebar-menu').querySelectorAll('.eka-menu-item.eka-open').forEach(function(item) {
        if (item !== parent) item.classList.remove('eka-open');
      });
      parent.classList.toggle('eka-open', !wasOpen);
    });
  });
}

function ekaInitTopbar() {
  var toggle = document.getElementById('ekaSidebarToggle');
  var overlay = document.getElementById('ekaOverlay');
  if (toggle) {
    toggle.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        document.getElementById('ekaSidebar').classList.toggle('eka-mobile-show');
        if (overlay) overlay.classList.toggle('eka-show');
      } else {
        document.getElementById('ekaApp').classList.toggle('eka-sidebar-collapsed');
        localStorage.setItem('eka-sidebar-collapsed', document.getElementById('ekaApp').classList.contains('eka-sidebar-collapsed'));
      }
    });
  }
  if (overlay) overlay.addEventListener('click', function() {
    document.getElementById('ekaSidebar').classList.remove('eka-mobile-show');
    overlay.classList.remove('eka-show');
  });

  var notifBtn = document.getElementById('ekaNotifBtn');
  var notifDrop = document.getElementById('ekaNotifDrop');
  if (notifBtn && notifDrop) {
    notifBtn.addEventListener('click', function(e) { e.stopPropagation(); notifDrop.classList.toggle('eka-show'); closeOtherDropdowns(notifDrop); });
  }
  var profileBtn = document.getElementById('ekaProfileBtn');
  var profileDrop = document.getElementById('ekaProfileDrop');
  if (profileBtn && profileDrop) {
    profileBtn.addEventListener('click', function(e) { e.stopPropagation(); profileDrop.classList.toggle('eka-show'); closeOtherDropdowns(profileDrop); });
  }
  document.addEventListener('click', function() { document.querySelectorAll('.eka-dropdown-menu.eka-show').forEach(function(d) { d.classList.remove('eka-show'); }); });

  var themeToggle = document.getElementById('ekaThemeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      var html = document.documentElement;
      var isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      themeToggle.querySelector('i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
      localStorage.setItem('eka-theme', isDark ? 'light' : 'dark');
      updateThemePanelBtns();
    });
  }

  var fsBtn = document.getElementById('ekaFullscreen');
  if (fsBtn) {
    fsBtn.addEventListener('click', function() {
      if (!document.fullscreenElement) { document.documentElement.requestFullscreen(); fsBtn.querySelector('i').className = 'fas fa-compress'; }
      else { document.exitFullscreen(); fsBtn.querySelector('i').className = 'fas fa-expand'; }
    });
  }

  var searchInput = document.getElementById('ekaSearchInput');
  if (searchInput) {
    document.addEventListener('keydown', function(e) { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); searchInput.focus(); } });
  }
}

function closeOtherDropdowns(except) {
  document.querySelectorAll('.eka-dropdown-menu.eka-show').forEach(function(d) { if (d !== except) d.classList.remove('eka-show'); });
}

function ekaInitThemePanel() {
  var trigger = document.getElementById('ekaThemePanelTrigger');
  var panel = document.getElementById('ekaThemePanel');
  var close = document.getElementById('ekaThemePanelClose');
  var close2 = document.getElementById('ekaThemePanelClose2');
  if (trigger && panel) trigger.addEventListener('click', function() { panel.classList.toggle('eka-show'); });
  if (close && panel) close.addEventListener('click', function() { panel.classList.remove('eka-show'); });
  if (close2 && panel) close2.addEventListener('click', function() { panel.classList.remove('eka-show'); });

  document.querySelectorAll('[data-scheme]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var scheme = btn.getAttribute('data-scheme');
      document.documentElement.setAttribute('data-theme', scheme);
      localStorage.setItem('eka-theme', scheme);
      var ti = document.querySelector('#ekaThemeToggle i');
      if (ti) ti.className = scheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      updateThemePanelBtns();
    });
  });

  document.querySelectorAll('[data-layout-width]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var w = btn.getAttribute('data-layout-width');
      var app = document.getElementById('ekaApp');
      app.classList.toggle('eka-boxed', w === 'boxed');
      document.querySelectorAll('[data-layout-width]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-layout-width', w);
    });
  });

  document.querySelectorAll('[data-menu-style]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var style = btn.getAttribute('data-menu-style');
      var app = document.getElementById('ekaApp');
      app.classList.remove('eka-horizontal', 'eka-icon-hover', 'eka-icon-default', 'eka-sidebar-collapsed');
      if (style === 'horizontal') app.classList.add('eka-horizontal');
      else if (style === 'icon-hover') app.classList.add('eka-icon-hover');
      else if (style === 'icon-default') app.classList.add('eka-icon-default');
      document.querySelectorAll('[data-menu-style]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-menu-style', style);
    });
  });

  document.querySelectorAll('[data-menu-pos]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var pos = btn.getAttribute('data-menu-pos');
      var app = document.getElementById('ekaApp');
      app.classList.toggle('eka-scrollable-menu', pos === 'scrollable');
      document.querySelectorAll('[data-menu-pos]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-menu-pos', pos);
    });
  });

  document.querySelectorAll('[data-header-pos]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var pos = btn.getAttribute('data-header-pos');
      var app = document.getElementById('ekaApp');
      app.classList.toggle('eka-scrollable-header', pos === 'scrollable');
      document.querySelectorAll('[data-header-pos]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-header-pos', pos);
    });
  });

  document.querySelectorAll('[data-sidebar-color]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var color = btn.getAttribute('data-sidebar-color');
      document.getElementById('ekaSidebar').style.background = color;
      document.querySelectorAll('[data-sidebar-color]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-sidebar-color', color);
      var picker = document.getElementById('ekaSidebarColorPicker');
      if (picker) picker.value = color;
    });
  });

  var sbPicker = document.getElementById('ekaSidebarColorPicker');
  if (sbPicker) {
    sbPicker.addEventListener('input', function() {
      document.getElementById('ekaSidebar').style.background = sbPicker.value;
      document.querySelectorAll('[data-sidebar-color]').forEach(function(b) { b.classList.remove('eka-active'); });
      localStorage.setItem('eka-sidebar-color', sbPicker.value);
    });
  }

  document.querySelectorAll('[data-header-color]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var color = btn.getAttribute('data-header-color');
      var tb = document.getElementById('ekaTopbar');
      if (tb) { tb.style.background = color; tb.style.borderBottomColor = color === '#ffffff' ? '' : 'transparent'; }
      var isDark = ekaIsColorDark(color);
      if (tb && isDark) { tb.style.color = '#fff'; tb.classList.add('eka-topbar-dark'); } else if (tb) { tb.style.color = ''; tb.classList.remove('eka-topbar-dark'); }
      document.querySelectorAll('[data-header-color]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-header-color', color);
      var picker = document.getElementById('ekaHeaderColorPicker');
      if (picker) picker.value = color;
    });
  });

  var hPicker = document.getElementById('ekaHeaderColorPicker');
  if (hPicker) {
    hPicker.addEventListener('input', function() {
      var tb = document.getElementById('ekaTopbar');
      if (tb) { tb.style.background = hPicker.value; }
      var isDark = ekaIsColorDark(hPicker.value);
      if (tb && isDark) { tb.classList.add('eka-topbar-dark'); } else if (tb) { tb.classList.remove('eka-topbar-dark'); }
      document.querySelectorAll('[data-header-color]').forEach(function(b) { b.classList.remove('eka-active'); });
      localStorage.setItem('eka-header-color', hPicker.value);
    });
  }

  document.querySelectorAll('[data-primary-color]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var color = btn.getAttribute('data-primary-color');
      document.documentElement.style.setProperty('--eka-primary', color);
      document.querySelectorAll('[data-primary-color]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-primary-color', color);
      var picker = document.getElementById('ekaPrimaryColorPicker');
      if (picker) picker.value = color;
    });
  });

  var pPicker = document.getElementById('ekaPrimaryColorPicker');
  if (pPicker) {
    pPicker.addEventListener('input', function() {
      document.documentElement.style.setProperty('--eka-primary', pPicker.value);
      document.querySelectorAll('[data-primary-color]').forEach(function(b) { b.classList.remove('eka-active'); });
      localStorage.setItem('eka-primary-color', pPicker.value);
    });
  }

  document.querySelectorAll('[data-bg-pattern]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var bg = btn.getAttribute('data-bg-pattern');
      var content = document.querySelector('.eka-content');
      if (content) content.style.background = bg === 'none' ? '' : bg;
      document.querySelectorAll('[data-bg-pattern]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-bg-pattern', bg);
    });
  });

  document.querySelectorAll('[data-sidebar-size]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var size = btn.getAttribute('data-sidebar-size');
      var app = document.getElementById('ekaApp');
      if (size === 'compact') app.classList.add('eka-sidebar-collapsed');
      else app.classList.remove('eka-sidebar-collapsed');
      document.querySelectorAll('[data-sidebar-size]').forEach(function(b) { b.classList.remove('eka-active'); });
      btn.classList.add('eka-active');
      localStorage.setItem('eka-sidebar-collapsed', size === 'compact');
    });
  });

  var resetBtn = document.getElementById('ekaThemeReset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      var keys = ['eka-theme','eka-sidebar-color','eka-sidebar-collapsed','eka-layout-width','eka-menu-style','eka-menu-pos','eka-header-pos','eka-header-color','eka-primary-color','eka-bg-pattern'];
      keys.forEach(function(k) { localStorage.removeItem(k); });
      location.reload();
    });
  }
}

function ekaIsColorDark(color) {
  var hex = color.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  var brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

function updateThemePanelBtns() {
  var current = document.documentElement.getAttribute('data-theme') || 'light';
  document.querySelectorAll('[data-scheme]').forEach(function(b) {
    b.classList.toggle('eka-active', b.getAttribute('data-scheme') === current);
  });
}

function ekaLoadSettings() {
  var theme = localStorage.getItem('eka-theme');
  if (theme) document.documentElement.setAttribute('data-theme', theme);

  var collapsed = localStorage.getItem('eka-sidebar-collapsed');
  if (collapsed === 'true' && window.innerWidth >= 992) document.getElementById('ekaApp').classList.add('eka-sidebar-collapsed');

  var sColor = localStorage.getItem('eka-sidebar-color');
  if (sColor) { var sb = document.getElementById('ekaSidebar'); if (sb) sb.style.background = sColor; }

  var menuStyle = localStorage.getItem('eka-menu-style');
  if (menuStyle && menuStyle !== 'default') {
    var app = document.getElementById('ekaApp');
    if (menuStyle === 'horizontal') app.classList.add('eka-horizontal');
    else if (menuStyle === 'icon-hover') app.classList.add('eka-icon-hover');
    else if (menuStyle === 'icon-default') app.classList.add('eka-icon-default');
  }

  var layoutW = localStorage.getItem('eka-layout-width');
  if (layoutW === 'boxed') document.getElementById('ekaApp').classList.add('eka-boxed');

  var menuPos = localStorage.getItem('eka-menu-pos');
  if (menuPos === 'scrollable') document.getElementById('ekaApp').classList.add('eka-scrollable-menu');

  var headerPos = localStorage.getItem('eka-header-pos');
  if (headerPos === 'scrollable') document.getElementById('ekaApp').classList.add('eka-scrollable-header');

  var hColor = localStorage.getItem('eka-header-color');
  if (hColor) {
    var tb = document.getElementById('ekaTopbar');
    if (tb) { tb.style.background = hColor; if (ekaIsColorDark(hColor)) tb.classList.add('eka-topbar-dark'); }
  }

  var pColor = localStorage.getItem('eka-primary-color');
  if (pColor) document.documentElement.style.setProperty('--eka-primary', pColor);

  var bgP = localStorage.getItem('eka-bg-pattern');
  if (bgP && bgP !== 'none') { var ct = document.querySelector('.eka-content'); if (ct) ct.style.background = bgP; }
}

function ekaInit() {
  ekaBuildSidebar();
  ekaBuildTopbar();
  ekaBuildFooter();
  ekaBuildThemePanel();
  ekaLoadSettings();
  ekaInitSidebar();
  ekaInitTopbar();
  ekaInitThemePanel();
  var ti = document.querySelector('#ekaThemeToggle i');
  if (ti && document.documentElement.getAttribute('data-theme') === 'dark') ti.className = 'fas fa-sun';
}

document.addEventListener('DOMContentLoaded', ekaInit);
