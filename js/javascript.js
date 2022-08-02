window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      let transition_el = document.querySelector('.transition');
    //   transition_el.classList.add('is-active');
    //   window.location.reload();
    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);
    }
  });



// $(window).on('load', function() {
console.log("I am the first log");

let introFinished = false;

const timer = ms => new Promise(res => setTimeout(res, ms));

let helloList = ["Hello","Bonjour", "你好", "नमस्ते", "مرحبا", "Hola"];

let firstTimeLoad = true;

async function load() {

    if(document.URL.includes("contact") || document.URL.includes("thank")) {
        
        (function(){
            // 3d Rotating Navigation - by CodyHouse.co
            var threeDNav = document.getElementsByClassName('js-cd-3d-nav');
            if(threeDNav.length > 0) {
                var header = document.getElementsByClassName('cd-header')[0],
                    main = document.getElementsByClassName('cd-main')[0],
                    marker = document.getElementsByClassName('cd-3d-nav__marker')[0],
                    navTrigger = document.getElementsByClassName('cd-header__nav-trigger')[0],
                    navItems = threeDNav[0].getElementsByTagName('li');
          
                //set marker width
                updateMarkerWidth();
          
                navTrigger.addEventListener('click', function(event){ // open/close navigation
                    // event.preventDefault();
                      toggle3dBlock(!Util.hasClass(header, 'cd-header--is-translated'));
                });
          
                  threeDNav[0].addEventListener('click', function(event){
                      var selectedItem = event.target.closest('li');
                      if(!selectedItem) return;
                    //   event.preventDefault();
                      if(!Util.hasClass(selectedItem, 'cd-3d-nav__item--selected')) {
                          Util.removeClass(threeDNav[0].getElementsByClassName('cd-3d-nav__item--selected')[0], 'cd-3d-nav__item--selected');
                          Util.addClass(selectedItem.closest('li'), 'cd-3d-nav__item--selected');
                          updateSelectedNav('close');
                      }
                  });
          
                  window.addEventListener('resize', function(){ // reset marker position on resize
                      window.requestAnimationFrame(updateSelectedNav);
                  });
          
                function toggle3dBlock(addOrRemove) {
                      if(typeof(addOrRemove) === 'undefined') addOrRemove = true;	
                      Util.toggleClass(header, 'cd-header--is-translated', addOrRemove);
                      Util.toggleClass(threeDNav[0], 'cd-3d-nav--is-visible', addOrRemove);
                      Util.toggleClass(main, 'cd-main--is-translated', addOrRemove);
                      main.addEventListener('transitionend', function cb(){
                          //fix marker position when opening the menu (after a window resize)
                          addOrRemove && updateSelectedNav();
                          main.removeEventListener('transitionend', cb);
                      });
                  };
          
                  function updateSelectedNav(type) { // update the marker position
                      var selectedItem = threeDNav[0].getElementsByClassName('cd-3d-nav__item--selected')[0],
                          selectedItemPosition = Util.getIndexInArray(navItems, selectedItem) + 1, 
                          leftPosition = selectedItem.getBoundingClientRect().left;
          
                      removeClassPrefix(marker, 'cd-3d-nav__marker--col')
                      Util.addClass(marker, 'cd-3d-nav__marker--col-'+ selectedItemPosition);
                      marker.style.left = leftPosition+'px';
                      updateMarkerWidth();
                      if( type == 'close') {
                          marker.addEventListener('transitionend', function cb(){
                              marker.removeEventListener('transitionend', cb);
                              toggle3dBlock(false);
                          });
                      }
                  };
          
                  function updateMarkerWidth() { // update the marker width
                      marker.style.width = window.getComputedStyle(navItems[0]).getPropertyValue('width');
                  };
          
                  function removeClassPrefix(el, prefix) {
                      var classes = el.className.split(" ").filter(function(c) {
                          return c.lastIndexOf(prefix, 0) !== 0;
                });
                el.className = classes.join(" ").trim();
                  };
            }
          })();
        //   async function navVisibility() {
        //       await timer(500);
        //       let hiddenNav = document.getElementById("header-id");
        //       let backgroundColor = document.querySelector(".container-home-screen");
        //       hiddenNav.style.visibility = "visible";
        //       backgroundColor.style.visibility = "visible";
        //   }
        //   navVisibility();
//---------------------------------------------------------------------------------------------------------
        // window.onbeforeunload = function (evt) {
        //     if (document.URL.includes("contact.html")) {
        //         console.log("inside!");
        //         firstTimeLoad = false;
        //         var message = 'Are you sure you want to leave?';
        //         if (typeof evt == 'undefined') {
        //           console.log("pressed back 1");
        //           evt = window.event;
        //         }
        //         if (evt) {
        //             console.log("pressed back 2")
        //             evt.returnValue = message;
        //         }
        //         console.log("pressed back 3")
        //         return message;
        //     }
        //   }
        } else {
            
        if (!sessionStorage.getItem('shown-model')) {
            if (firstTimeLoad == true) {
                for (let i = 0; i < helloList.length; i++) {
                        console.log("I am the third log after 5 seconds");
                        document.querySelector(".hello").innerHTML = helloList[i];
                        await timer(400);
                        if (i == helloList.length - 1) {
                            introFinished = true;
                        }
                }
            }
        
            if(introFinished == true && firstTimeLoad == true) {
                console.log("THIS IS TRUE!!!!");
                document.querySelector(".hello").innerHTML = "";
                const transition_el = document.querySelector('.transition');
                transition_el.classList.remove('is-active');
        
            }

            sessionStorage.setItem('shown-model', 'true');
        }
            console.log("above remove transition");
            let transition_el = document.querySelector('.transition');
            transition_el.classList.remove('is-active');
            console.log("above remove transition");
            //nav bar code:

            // let pageTransition = document.getElementById("intro-page-transition");
            // pageTransition.remove()

    
            (function(){
                // 3d Rotating Navigation - by CodyHouse.co
                var threeDNav = document.getElementsByClassName('js-cd-3d-nav');
                if(threeDNav.length > 0) {
                    var header = document.getElementsByClassName('cd-header')[0],
                        main = document.getElementsByClassName('cd-main')[0],
                        marker = document.getElementsByClassName('cd-3d-nav__marker')[0],
                        navTrigger = document.getElementsByClassName('cd-header__nav-trigger')[0],
                        navItems = threeDNav[0].getElementsByTagName('li');
              
                    //set marker width
                    updateMarkerWidth();
              
                    navTrigger.addEventListener('click', function(event){ // open/close navigation
                        event.preventDefault();
                          toggle3dBlock(!Util.hasClass(header, 'cd-header--is-translated'));
                    });
              
                      threeDNav[0].addEventListener('click', function(event){
                          var selectedItem = event.target.closest('li');
                          if(!selectedItem) return;
                        //   event.preventDefault();
                          if(!Util.hasClass(selectedItem, 'cd-3d-nav__item--selected')) {
                              Util.removeClass(threeDNav[0].getElementsByClassName('cd-3d-nav__item--selected')[0], 'cd-3d-nav__item--selected');
                              Util.addClass(selectedItem.closest('li'), 'cd-3d-nav__item--selected');
                              updateSelectedNav('close');
                          }
                      });
              
                      window.addEventListener('resize', function(){ // reset marker position on resize
                          window.requestAnimationFrame(updateSelectedNav);
                      });
              
                    function toggle3dBlock(addOrRemove) {
                          if(typeof(addOrRemove) === 'undefined') addOrRemove = true;	
                          Util.toggleClass(header, 'cd-header--is-translated', addOrRemove);
                          Util.toggleClass(threeDNav[0], 'cd-3d-nav--is-visible', addOrRemove);
                          Util.toggleClass(main, 'cd-main--is-translated', addOrRemove);
                          main.addEventListener('transitionend', function cb(){
                              //fix marker position when opening the menu (after a window resize)
                              addOrRemove && updateSelectedNav();
                              main.removeEventListener('transitionend', cb);
                          });
                      };
              
                      function updateSelectedNav(type) { // update the marker position
                          var selectedItem = threeDNav[0].getElementsByClassName('cd-3d-nav__item--selected')[0],
                              selectedItemPosition = Util.getIndexInArray(navItems, selectedItem) + 1, 
                              leftPosition = selectedItem.getBoundingClientRect().left;
              
                          removeClassPrefix(marker, 'cd-3d-nav__marker--col')
                          Util.addClass(marker, 'cd-3d-nav__marker--col-'+ selectedItemPosition);
                          marker.style.left = leftPosition+'px';
                          updateMarkerWidth();
                          if( type == 'close') {
                              marker.addEventListener('transitionend', function cb(){
                                  marker.removeEventListener('transitionend', cb);
                                  toggle3dBlock(false);
                              });
                          }
                      };
              
                      function updateMarkerWidth() { // update the marker width
                          marker.style.width = window.getComputedStyle(navItems[0]).getPropertyValue('width');
                      };
              
                      function removeClassPrefix(el, prefix) {
                          var classes = el.className.split(" ").filter(function(c) {
                              return c.lastIndexOf(prefix, 0) !== 0;
                    });
                    el.className = classes.join(" ").trim();
                      };
                }
              })();
            //   async function navVisibility() {
            //       await timer(500);
            //       let hiddenNav = document.getElementById("header-id");
            //       let backgroundColor = document.querySelector(".container-home-screen");
            //       hiddenNav.style.visibility = "visible";
            //       backgroundColor.style.visibility = "visible";
            //   }
            //   navVisibility();






    }

    setTimeout(() => {
        let transition_el = document.querySelector('.transition');
        transition_el.classList.remove('is-active');
    }, 400);

    // document.getElementsByClassName("contact-href").addEventListener("click", myFunction);

    // function myFunction() {
    //     console.log("ANCHOR CLICKED!!!!!!!");
    // }


}


load();

// console.log("introFinished = " + introFinished);

// console.log("I am the second log");

// introMessage.innerHTML = "HIIIIII";


// window.onload = () => {
//     const transition_el = document.querySelector('transition');
//     const anchors = document.querySelectorAll('a');

//     setTimeout(() => {
//         transition_el.classList.remove('is-active');
//     }, 500);

//     for (let i = 0; i < anchors.length; i++) {
//         const anchor = anchors[i];

//         anchor.addEventListener('click', e => {
//             e.preventDefault();
//             let target = e.target.href;
//             transition_el.classList.add('is-active');

//             setTimeout(() => {
//                 window.location.href = target;
//             }, 500);
//         })
//     }
// }

// })

// window.onload = (event) => {

// }

// function myFunction() {
//     alert('It was clicked');
// }

window.onload = function () {
    // if (document.URL.includes("contact")) {
    //     let anchor = document.getElementById('contact-href');
    //     console.log(anchor);
    //     anchor.addEventListener('click', e => {
    //         e.preventDefault();
    //         transition_el.classList.add('is-active');
    //     })
    // }

    let transition_el = document.querySelector('.transition');

    if(document.URL.includes("contact")) {

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);
}
    if(document.URL.includes("contact")) {
        // document.getElementById('contact-href').addEventListener('click', myFunction, false);
        let anchor = document.getElementById('index-href');
        console.log(anchor);
        if (anchor) {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                target = e.target.href;
    
                transition_el.classList.add('is-active');
    
                setTimeout(() => {
                    window.location.href = target;
                }, 700);
            })
        }

        let items = document.querySelectorAll("input");

        console.log("all items:");
        console.log(items);

        for (let i = 0; i< items.length - 1; i++) {
            items[i].addEventListener("input", checkTextField);
        }

    } else if (document.URL.includes("thank")) {
        console.log("thank you");
        setTimeout(() => {
            transition_el.classList.remove('is-active');
        }, 500);

        let backHomeButton = document.getElementById("thankyou-btn");
        
            backHomeButton.addEventListener('click', e => {
                e.preventDefault();
                // let target = e.target.href;
                transition_el.classList.add('is-active');
    
                setTimeout(() => {
                    window.location.href = "https://www.aabdou.com";
                }, 700);
    
            })



    } else {
        // document.getElementById('contact-href').addEventListener('click', myFunction, false);
        let anchor = document.getElementById('contact-href');
        console.log(anchor);
        anchor.addEventListener('click', e => {
            e.preventDefault();
            target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 700);
        })
    }

}

let requiredFields = false

function checkTextField(event) {

    // let element = event.target;

    let items = document.querySelectorAll("input");

    // if (element.id == "firstname" || element.id == "lastname" || element.id == "email") {
    //     element.classList.add("valid");
    // }


    let numFilled = 0;

    for (let i = 0; i< 3; i++) {
        if (items[i].value.length > 0) {
            if (items[i].id == "email") {
                if (items[i].value.includes("@")) {
                    console.log("can I get a HOOYAAAA");
                    numFilled++;
                    items[i].style.border = "solid 2px transparent";
                    document.getElementById("email-span").style.visibility = 'hidden';
                }
                continue;
            }
            numFilled++;
            items[i].style.border = "solid 2px transparent";
            if (items[i].id == "firstname") {
                document.getElementById("firstname-span").style.visibility = 'hidden';
            } else if (items[i].id == "lastname") {
                document.getElementById("lastname-span").style.visibility = 'hidden';
            }
        }

        console.log(items[i].value);
    }
    console.log("numFilled = " + numFilled);
    // let firstname = document.getElementById("firstname");
    // let lastname = document.getElementById("lastname");
    // let email = document.getElementById("email");

    // console.log("firstname = " + firstname.value.length);

    // if (firstname.value.length > 0) {

    // }

    if (numFilled == 3) {
        requiredFields = true;
    } else if (numFilled != 3) {
        requiredFields = false;
    }
}


function send_call() {
    let transition_el = document.querySelector('.transition');
    let anchor = document.getElementById('contact-href');
    console.log(anchor);

    let items = document.querySelectorAll("input");

    anchor.addEventListener('click', e => {
        if (requiredFields == true) {
            e.preventDefault();
            transition_el.classList.add('is-active');
            setTimeout(() => {
                window.location.href = "thankyou";
            }, 700);
        } else {
            for (let i = 0; i< 3; i++) {
                if (items[i].value.length == 0) {
                    items[i].style.border = "solid 2px red";
                    if (items[i].id == "firstname") {
                        document.getElementById("firstname-span").style.visibility = 'visible';
                    } else if (items[i].id == "lastname") {
                        document.getElementById("lastname-span").style.visibility = 'visible';
                    } else if (items[i].id == "email") {
                        document.getElementById("email-span").style.visibility = 'visible';
                    }
                }
            }
        }
    })
}



