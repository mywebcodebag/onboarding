var SCROLLING_SPEED = 700;
var fromIndex = 1;
// fullpage customization
$('#fullpage').fullpage({
    sectionsColor: [],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    responsiveWidth: 767,
    slidesNavigation: true,
    controlArrows: false,
    slidesNavPosition: 'bottom',
    
    anchors: ['welcome','quick_facts','leadership','human_capital','hr_policies','employee_benefits',//'employee_portal',
    'connecto_app','mpin','employee_portal2','employee_portal_dashboard','hrms_portal','mis_login','update_skills','update_profile','attendance','daily_summary','t4tracker_portal','t4tracker_login','daily_report','engagement','employee_engagement','neosoftians','happy_clients','global_presence'],
    
navigationTooltips: ['Welcome','Quick Facts', 'Leadership', 'Human Capital','HR Policies','Employee Benefits',//'Employee Portal',
'Connecto App','mPIN','Employee Portal','Employee Portal Dashboard','MIS Portal','MIS Login','Update Skills','Update Profile', 'Attendance', 'Daily Summary', 'T4Tracker Portal', 'T4Tracker Login', 'Daily Report', 'Engagement', 'Employee Engagement', 'NeoSOFTians', 'Happy Clients', 'Global Presence'],
    
    menu: '#menu',
    scrollingSpeed: SCROLLING_SPEED,
    fitToSection: true,
    verticalCentered: false,
    lazyLoading: true,
  
    afterLoad: function(anchorLink, index) {},
  
    onLeave: function(index, nextIndex, direction) {},

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(!fromIndex){
        $('.fp-section').find('.fp-slidesContainer').fadeIn(0);
        $.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
      }
    },
  
    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      fromIndex = slideIndex;
      if(!slideIndex){
          $.fn.fullpage.setScrollingSpeed(0);
          $('.fp-section').find('.fp-slidesContainer').hide();
        }
    },

  }); 

