(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{40:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),s=n.n(o),c=(n(40),n(3)),i=n(7),u=n(5),l=n(4),h=n(66),d=n(0),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h2",{className:"eventSummary",children:t.summary}),Object(d.jsxs)("p",{className:"eventDate",children:[t.start.dateTime," ",t.start.timeZone]}),Object(d.jsxs)("p",{className:"eventLocation",children:["@",t.summary," | ",t.location]}),!1===this.state.show&&Object(d.jsx)(h.a,{variant:"primary",className:"showDetails",onClick:function(){return e.handleButton()},children:"Show Details"}),!0===this.state.show&&Object(d.jsxs)("div",{className:"EventDetails",children:[Object(d.jsx)("h3",{children:"About the event:"}),Object(d.jsx)("a",{href:t.htmlLink,rel:"noreferrer",target:"_blank",children:"See details on Google Calendar"}),Object(d.jsx)("p",{className:"eventDescription",children:t.description}),Object(d.jsx)(h.a,{variant:"primary",className:"hideDetails",onClick:function(){return e.handleButton()},children:"Hide Details"})]})]})}}]),n}(a.Component),p=f,m=n(64),v=n(65),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)(m.a,{className:"d-flex justify-content-center event-list-row",children:Object(d.jsx)(v.a,{md:10,sm:12,className:"event-list-wrapper",children:Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-12",children:Object(d.jsx)(p,{event:e})},e.id)}))})})})}}]),n}(a.Component),g=b,j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,height:a.height,marginTop:a.marginTop}},a.color=null,a.height=null,a.marginTop=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",children:Object(d.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a.height="33px",a.marginTop="0",a}return n}(j),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(j),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(j),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)(w,{text:this.state.infoText}),Object(d.jsxs)("label",{children:["Search for a city:",Object(d.jsx)("input",{type:"text",className:"city",placeholder:"e.g. 'Vancouver'",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}})]}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),k=y,S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:"",infoText:"Please enter a number between 1 and 32"}):e.setState({numberOfEvents:n,infoText:""}),e.props.updateNumberOfEvents(t.target.value)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"numberOfEvents",children:[Object(d.jsxs)("label",{children:["Number of events:",Object(d.jsx)("input",{type:"text",className:"eventsNumber",value:this.state.numberOfEvents,onChange:function(t){return e.handleInputChanged(t)}})]}),Object(d.jsx)(O,{className:"ErrorAlert",text:this.state.infoText})]})}}]),n}(a.Component),T=S,N=n(8),E=n.n(N),C=n(14),Z=n(34),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],A=n(21),I=n.n(A),L=n(15),q=n.n(L),D=function(e){var t=e.map((function(e){return e.location}));return Object(Z.a)(new Set(t))},B=function(){var e=Object(C.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(E.a.mark((function e(){var t,n,a,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return q.a.done(),e.abrupt("return",W);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),q.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,R();case 11:if(!(n=e.sent)){e.next=21;break}return J(),a="https://9ferqonw30.execute-api.ca-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,I.a.get(a);case 17:return(r=e.sent).data&&(o=D(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),q.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},U=function(){var e=Object(C.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://9ferqonw30.execute-api.ca-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(E.a.mark((function e(){var t,n,a,r,o,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,B(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,I.a.get("https://9ferqonw30.execute-api.ca-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&U(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=n.p+"static/media/logo.480a1581.png",z=(n(60),n(61),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32,infoText:""},e.updateEvents=function(t){M().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r)})}))},e.updateNumberOfEvents=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,M().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:D(t)}),navigator.onLine?e.setState({infoText:""}):e.setState({infoText:"Warning! No internet connection. The events displayed may not be up to date "})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("img",{src:F,className:"logo",alt:"Meet Logo"}),Object(d.jsx)("h2",{children:"Let's meet up!"}),Object(d.jsx)(x,{className:"WarningAlert",text:this.state.infoText}),Object(d.jsx)(k,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(T,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),Object(d.jsx)(g,{events:this.state.events})]})}}]),n}(a.Component)),H=z,_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(33).config("ec5d836b2d954d909417e81d599c9cdb").install(),s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(t,e)}))}}(),Y()}},[[63,1,2]]]);
//# sourceMappingURL=main.05a4f05f.chunk.js.map