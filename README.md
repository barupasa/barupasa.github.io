# WAPH - Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student 

**Name** : Sai Krishna Barupai

**Email** : barupasa@mail.uc.edu

**Profile Pic** : 
![SK_ProfilePic](/assets/headshot.jpeg) 



## Repository information for Project 1

## Repository 
*Repository URL*: [https://github.com/barupasa/barupasa.github.io](https://github.com/barupasa/barupasa.github.io).

### INDIVIDUAL PROJECT 1 : PERSONAL WEBSITE
## Overview
In the project 1 ,I have developed a personal portfolio which has all my details such as Name ,profile pic ,experience ,education ,resume and skills .The portfolio is linked with  a waph.html page to showcase all my work which i learnt in WAPH course.
The portfolio is integrated with analog ,digital clock ,show your email.The portfolio is also integrated with two public API's Joke and weather . Javascript Cookies is introduced to remember the user and a random greeting message is also displayed when the portfolio is opened .

Techstack used : HTML,CSS,JQuery,Java script ,React and Bootstarp.
*** 

### Task 1 : General requirements (30 pts)
## Create and deploy Personal website
I have built personal portfolio by using a predefined bootstrap template which I got at startbootstrap.com .I have updated all my details in the portfolio as mentioned in the requirements such as Name ,profile pic ,experience ,education ,resume and skills .

![homepage1](/assets/homepage1.png)
![homepage2](/assets/homepage2.png)
![homepage3](/assets/homepage3.png)
![homepage4](/assets/homepage4.png)
![homepage5](/assets/homepage5.png)

## Link to  "Web Application Programming and Hacking" course

I have  updated the portfolio with a new page to showcase my work done as part of WAPH course.

![WAPH page](/assets/waph.png)

## Integrated Google Analytics Page tracker 


```
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q84ZVQPSLS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q84ZVQPSLS');
</script>
```

![Google Analytics Tracker Results ](/assets/Analytics.png)


### TASK 2: Technical requirements

## integrated functionalities learnt in Lab2

I have included a digital clock, analog clock, show/hide your email from lab2 and other functionality I have added greetings message in the portfolio to make it more interesting. For greetings I have added few messages and wrote the script such that it will display a random greeting every time when the portfolio is used.
attached snapshots for the same .

```
                <div id="email" style="color:blue;" onclick="showOrHideEmail()">Display my Email</div>
                <script type="text/javascript" src="js/email.js"></script>
                <div id="digital-clock" style="color:blue;"></div>
            
                <canvas id="analog-clock" width="150" height="150" style="background-color:#999"></canvas>

                  <!-- Analog clock script -->
                 <script src="https://waph-uc.github.io/clock.js"></script>
                    <script type=text/javascript>
                    var  canvas=document.getElementById("analog-clock");
                    var ctx=canvas.getContext("2d");
                    var radius=canvas.height/2 ;
                    ctx.translate(radius,radius);
                    radius=radius * 0.90 ;
                    setInterval(drawClock,1000); 
                    function drawClock(){
                    drawFace(ctx,radius);
                    drawNumbers(ctx,radius); 
                    drawTime(ctx,radius);
                    }
                </script>

            <!-- Digital clock script -->
                 <script type=text/javascript>
                    function displayTime() { 
                        document.getElementById('digital-clock').innerHTML=" The current Time is : "+ Date();
                     }
                        setInterval(displayTime,500);
            </script>

            var isVisible = false;
            function showOrHideEmail() {
            if (isVisible) {
                 document.getElementById('email').innerHTML = " Show my Email"; visible = false;
            }
            else {
             var myEmail = "<a href='mailto:barupasa" + "@" + "mail.uc.edu'>barupasa" + "@" + "mail.uc.edu</a>";
                document.getElementById('email').innerHTML = myEmail; visible = true;
    }
}



```

![Digital,Analog ,show or hide email](/assets/homepage5.png)


## Joke API

I have integrated joke API which i learnt in lab2.

```
 <div id="joke" style="color:green;"></div>

   <!-- Joke API script -->
            <script src="https://code.jquery.com/jquery-3.7.1.min.js"
                integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
            <script>
                $.get("https://v2.jokeapi.dev/joke/Programming?type=single",
                    function (result) {
                        console.log("from joke API: " + JSON.stringify(result));
                        $("#joke").html("Programming joke of the day: " + result.joke);
                    });
            </script>

 ```

![Random Joke](/assets/homepage5.png)

## Public API with graphics

I have integradted a public API which has graphics .

```
  <!-- Weather widget script -->
                <a class="weatherwidget-io" href="https://forecast7.com/en/40d42n82d91/ohio/?unit=us" data-label_1="OHIO"
                    data-label_2="WEATHER" data-theme="original">OHIO WEATHER</a>
                <script>
                    !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');
                </script>
```

![weather widget](/assets/homepage5.png)



# Greeting Message
To make the portfolio better, I have added gretting message using react which is a JS library ,In which I have added few greeting messages and wrote the script such that it will display a random greeting every time when the portfolio is used.


```
const Greeting = () => {
    const greetings = [
      'Hello!',
      'Hi there!',
      'Welcome!',
      'Greetings!',
      'Nice to see you!',
    ];
  
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const randomGreeting = greetings[randomIndex];
  
    return React.createElement('h2', null, randomGreeting);
  };
  
  ReactDOM.render(React.createElement(Greeting, null), document.getElementById('greeting'));
```

![Random greeting message](/assets/greeting.png)


# Cookie 

I have integrated portfolio with Javascript cookies to remember the user .I gave customized message based on the cookie .below is the code i have utilized .

```
 <!-- Cookie script -->
            <script>
                function setCookie(name, value, expiryDays) {
                    const expirationDate = new Date();
                    expirationDate.setDate(expirationDate.getDate() + expiryDays);
                    document.cookie = `${name}=${value};expires=${expirationDate.toUTCString()};path=/`;
                }

                function getCookie(name) {
                    const cookieValue = document.cookie.split('; ')
                        .find(cookie => cookie.startsWith(name + '='))
                        ?.split('=')[1];
                    return cookieValue ? decodeURIComponent(cookieValue) : '';
                }

                function welcomeUser() {
                    const lastVisit = getCookie('lastVisit');
                    const greetingElement = document.getElementById("welcomecookie");

                    if (lastVisit) {
                        greetingElement.innerHTML = `Welcome back! Your last visit was on ${lastVisit}.`;
                    } else {
                        greetingElement.innerHTML = 'Welcome to Sai Krishna portfolio!';
                    }

                    setCookie('lastVisit', new Date().toLocaleString(), 365);
                }

                welcomeUser();

            </script>
```

![First time user](/assets/cookie1.png)

![Revisted user](/assets/cookie2.png)


















