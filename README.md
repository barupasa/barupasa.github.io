# WAPH - Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student 

**Name** : Sai Krishna Barupai

**Email** : barupasa@mail.uc.edu

**Profile Pic** : 
![SK_ProfilePic](/assets/SK_ProfilePic.jpeg) 



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

![WAPH page](/assets/homepage6_waph.png)

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

JavaScript cookies are utilized to remember the user . If they visit the website first time "welcome to my portfolio is displayed" otherwise "welcome back to my portfolioi and time" are displayed.

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









































## URL : http://waph-hackathon.eastus.cloudapp.azure.com/xss/level0/echo.php
attacking script :
<script>alert("Level 0 : hacked by Sai Krishna")</script>
![Level0](images/Level0.png) 

## Level 1
In level 1 ,The assault script is injected like pathvariable and appended it to the end of URL.
?input=<script>alert("Level 0 : hacked by Sai Krishna")</script>

![Level1](images/Level1.png) 

## Level 2
The HTTP request doesnt have input feild and it is also not accepting the path variable , so i used HTML form element to link to the url .Then the script is sent through this form.
Guess Code:
```
 if (isset($_POST['inputText’])) 
    $input= $_POST['inputText'];
else 
 echo "Error: 'input ' parameter is missing in the POST request.";

```

![Level2](images/Level2.png) 

## Level 3
In script tag is filtered in this level ,so i passed Script tag with combination of others.
Guess code:
 ```
  $output = preg_replace('/<script>|<\/script>/', ' ', $input);
 ```

![Level3](images/Level3.png) 



## Level 4
The script tag is rejected completely,I utilized the onerror() segment of the <img> tag to trigger an alert.
Guess code:
```
 <?php
$inputText = "$_GET['input'];
$stringPattern = "/\bscript\b/i";
$resultString = preg_replace($stringPattern, '', $inputText);
echo $resultString;
?>
```

![Level4](images/Level4.png) 


## Level 5
In level 5, both the `<script>` tag and the `alert()` methods are not allowed. so to get popup alert, I employed a combination of unicode encoding and the `onerror()` function within the `<img>` tag.
Guess code:
```
<?php
$data = $_REQUEST["inputText”];

if (str_contains($data, ["script", "alert"])) {
    echo "Both alerst and script tag not allowed";
} else {
    echo $data;
}
?>
```

![Level5](images/Level5.png) 



## Level 6
I tried for long time ,but i couldn't crack the logic here 
Guess code :
```
echo htmlentities($_REQUEST["data"])
```




### Task 2 : DEFENCE
## A Echo.php
I updated echo.php file from lab1. It now has code for checking input and defending against XSS. 
First it checks if input is empty ,if it is empty then thhis makes php files stop the execution .if not empty and input is valid ,htmlentities() is called to sanitize the input.
 This method converts special characters to their HTML equivalents, ensuring that the text is displayed as plain text on the webpage.

![Task2A](images/Task2A.png)

## B front-end prototype 
The code in html file which is created in lab2 underwent a comprehensive review, leading to thorough revisions. External input points within the code were pinpointed and subjected to validation, ensuring their integrity. Moreover, output texts are sanitized to increase the security aspects.

## 1 
The input data for both the HTTP GET and POST request forms now undergo validation.  inputValidation() function is added and below is the code snippet of it.                                       
![Task2B1](images/Task2B1.png)

## 2
inputValidation() method is written to valide the inputs from various elements ,an alert message is shown if the user enters empty string.I invoked this method in HTTPGET().HTTPPOST()
and i have also added necessary null check and prompted alert message for these calls as well Ajax echo ,Jquery Get ,Jquery Post,Guess Age.

![Task2B21](images/Task2B21.png)

![Task2B22](images/Task2B22.png)

## 3


I have added necessary NULL checks and empty checks before appending the results to the response object.

![Task2B31](images/Task2B31.png)

![Task2B32](images/Task2B32.png)



## 4

A encodeInput(), befoe adding to html body ,the function encodeInput makes sure that the data is entered as plain text only.
in this a div elememgt is created and content is added as innerText.it converts data as html ,ensuring its presentation as text and making it non-executable.


![Task2B41](images/Task2B41.png)

![Task2B42](images/Task2B42.png)

















