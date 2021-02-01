// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  var counter = 0;

  const props = {
    zIndex: 1, //备注是否不可被遮挡，是1否0
    fontSize: 0.5, //备注字体相对于14px的倍数
    marginTop: 3, //备注与上方头像的距离，单位px
  };

  const addRemark = () => {
    let marker = JSON.parse(window.localStorage.getItem('githubMarker'));
    if (marker === null) {
      marker = {};
      // window.localStorage.setItem('marker', marker);
    }
    console.log(marker);
    let people = document.querySelectorAll('.avatar-user');
    console.log(people);
    people.forEach((item) => {
      if (item.alt !== people[0].alt && item.alt) {
        if (item.alt === 'Avatar') {
          item.alt = '@' + location.href.split('/').pop();
        }
        counter++;
        item.parentElement.parentElement.style =
          'display:flex !important;flex-direction:column;justify-content:space-around;align-items:center;';
        let div = document.createElement('div');
        div.style = `margin-top:${props.marginTop}px;font-size:${props.fontSize}rem;word-break:keep-all;z-index:${props.zIndex};`;
        div.classList.add('gray');
        if (marker[item.alt]) {
          div.innerHTML = marker[item.alt];
        } else {
          div.innerHTML = 'unset';
        }
        div.addEventListener('click', () => {
          let input = document.createElement('input');
          input.placeholder = 'Remark and press Enter';
          div.parentElement.append(input);
          input.focus();
          input.onkeydown = (e) => {
            if (e.key === 'Enter') {
              marker[item.alt] = input.value;
              window.localStorage.setItem(
                'githubMarker',
                JSON.stringify(marker)
              );
              div.innerHTML = input.value;
              div.parentElement.removeChild(input);
            }
          };
        });
        item.parentElement.parentElement.append(div);
      }
    });
  };

  const addNavItem = () => {
    const navItem = document.createElement('span');
    navItem.innerHTML = 'Remarks';
    navItem.style = 'cursor:pointer;';
    navItem.onclick = () => {
      if (counter === 0) {
        addRemark();
      }
    };
    document.getElementsByTagName('nav')[0].append(navItem);
  };

  addNavItem();
  addRemark();
})();
