# Note: This is not meant for any kind of self botting. 
If you self-bot, there's also a chance you will be banned. This is just for Discord bots!

**IF you decide to DM me on Discord, please just send a message with your issue & Don't ask to ask, don't send a friend request, I won't accept those**
# Please read this :D

# This project is no longer actively maintained.
this does not mean it doesn't work! It works perfectly fine!

If you want to change your botghost status without buying premium or just want to change the status of bot. You can use this repl. You can also use this as template to start coding your own bot!

Botghost is a bot maker like scratch where you can make Discord bots. The only downside is that you can't change your bot's status. Thats where this program is made for! Put in the needed variables, run it, and you can have a custom status!!

Also its totally safe no token log stuff. Over **3100**+ users use it! If you don't trust it, go and take a look at the code. Its **opensource!**

Also I recommend after some time going back to https://replit.com/@Raadsel/Discord-Status-bot?v=1. because I frequently update this program. And its smart to do so since there probably are loads or new features!

Anyway, go and read the How to use it section! 
# How to use it 
(Read this step by step tutorial and see!)

## **Step 1**: 
> Fork this replit

## **Step 2**: 
> Go to secrets.![secrets](https://i.imgur.com/DpoO3ag.png) And make a variable called `TOKEN`. Put in your bot token as value.

## **step 3**: 
> Start this replit, it will ask for a status. You can type what status you want. OR, you can go to line 4 of index.js, change that to 1 and make a secret called `STATUS`  (just like you did with the token). Put in the status you want the bot to have as value. Then you will not have to type the status in again when the program restarts on purpose, or not on purpose (If not it keeps the status:)

## **Step 4**: 
> It will load. Now you discord bot should have a different status

**Optional**:

## **Step 5**: 
> If you also want to set the bot status via a discord command. Go to the second line of the index.js file (it should look like this: `const ownid = 'PasteYourIDHhere'`) ![Example](https://i.imgur.com/mnDXX1K.png). Change PasteYourIDHhere to your own discord ID. If you dont know how to get your ID [click here](https://www.remote.tools/remote-work/how-to-find-discord-id).

**Now the bot is online and it works. Since V2 you can also use -set + the status you want the bot to have to change the bot status. If it doesn't work, make sure you have debug mode activated so you can see where it is going wrong. Also if you do decide to DM me on Discord don't just send me a friendrequest but also send a message.**

If you want to get this program 24/7 online, follow the next steps. Its also possible, if you have hacker plan or enough cycles to enable always on. That way you dont have to setup a pinger thing. That works way better and then you have 100% uptime and no problems! You can also earn cycles by answering question in the community tab.

Sidenote, if you save a new command, restart your bot or change anything on botghost, botghost gets priority on the status. This is for a maximum of 10 minutes or so. Then the status will change back to yours!

## **Step 6**: 
> Go to https://up.rdsl.ga/. Press login, and authenticate via Replit. This is completely safe btw.
> ![login button](https://cdn.rdsl.ga/T18t59.png )

## **Step 7**:
> Now as URL (or IP) you have to fill in the website url of this replit. Default it is `https://Discord-Status-bot.yourreplname.repl.co`. ![link](https://i.imgur.com/B4nXU3O.png) Just copy the link and paste it in there.

## **Step 8**:
> Now press `ping`. If you get a alert that says it has been succesfully added, your good. Note: When using any pinger I recommend using statusmode 1, go to line 4 of `index.js` and change the `0` to a `1`. And create a secret, put as name `STATUS` and as value the status you want the bot to have. If you use statusmode 0 you have a chance it will restart and ask for your status again. When your not online you can't fix this:(
> ![ping button](https://cdn.rdsl.ga/vq3pOH.png )
 
## **OR**: 
> You can just run this command in the Shell: `curl https://up.rdsl.ga/api/cli -X POST -F "add=https://${REPL_SLUG}.${REPL_OWNER}.repl.co"`
If its responds with a 200 code, your also good. If it says that you have already added it, it is already pinging it and your still good.
> ![shell command](https://cdn.rdsl.ga/9htPdv.png )


**Congrats**, this replit should be online 24/7. **BUT** This will only really work if you used statusmode 1


## Optional, but really, really recommended thing to do:
The reason it is really recommended is because if you use statusmode 0 you have a chance it will restart and ask for your status again. When your not online you can't fix this, and that means the program will stay offline...
<br>**How to fix it:**<br><br>**Step 9**:
> Go to line 4 of `index.js`, and change the `0` to a `1` ![Image](https://cdn.rdsl.ga/UGbsGx.png)

**step 10**:
> Create a new secret by going to the Secrets tab ![Secrets tab](https://cdn.rdsl.ga/5aQ9lJ.png ) and creating a new secret with your status. The key has to be `STATUS`, and the value can the status you want your bot to have! ![secret](https://cdn.rdsl.ga/uaOA7M.png )

## Now your actually done! 
**You have had all the vital information, the rest of the readme.md file is a FAQ + more info + more random info + version history!**

**REMEMBER** 
> This program will take priority on the discord bot status. So if you use this on another bot. This status will show up most of the time! It doesn't change the status. It **overwrites** the pre-existing one!

# **BUILT IN COMMANDS** 

`-online` You can run this command if you are not sure if the replit is still online

`-set` You can use `-set <your status>` you want the bot to  change the bot status.

You can also set the ID of a bot like dyno. And then set a automated message timer for 1 hour that says:  `-set test`. I made it that bots also can trigger this command!

`-defaultstatus` You also can do -defaultstatus to set the status you entered in the console when starting this project

`-credits` There's also a command to credit me (Raadsel). Called !credits. Probably no one will ever type this command so it is useless to delete it. Its just for me to have some clout:) - Raadsel

If you have any suggestions make sure to type in the the comments of this replit! Also I'd like it if you follow me or like this project.

# Config features
- ownid (owner's ID)
> You can fill in your ID here. This is made so that only 1 person can use the `-set <status_` command, which changes the status. If you want to use this command you have to paste your ID there.
- statusmode
> The status mode has 2 modes. Mode **0**, is the default. On start it asks in the console what the status is you want the bot to have. Once you've filled in the status en pressed enter it starts. Because sometimes replit randomly restarts a repl, I made: Mode **1**. This is the new mode, and not default. For this mode to work you have to make a secret called STATUS and as value the status you want the bot to have. On start it automatically starts with the status etc. So if replit randomly restarts it it keeps the status and you dont have to worry!

I **highly** recommend setting statusmode to **1**!!
- debug
> If you set debug to 1 instead of the default 0 it activates debug mode. 60 seconds after you started it it will create a file with all the debug info. It will also update this file every 60 seconds. (handy for the uptime)
>

# Common errors
|Problem | Solution |
|-----|-----|
|I changed something and dont know how to put it back|You can just fork it again. + Changing this program is against the license it was published under|
| The bot doesn't start any more. It worked fine before but now it doesn't. **I didn't change anything** | Go to the shell and type 'kill 1', and refresh your browser |
| The status has changed to the botghost status | This is probably because you changed a command or just changed anything in general on https://botghost.com with your bot. The botghost host restarted your bot to make sure the commands work, and the status got priority above this program. To fix this just restart this program or type `-set <your status>` |
| I changed something in the code and now it has a error | I can't give a explanation & solution for every discord.js error, so you can just copy your token. And fork a second replit from me. Just put in your bot token in the secrets and your done!. [Click here](https://replit.com/@Raadsel/Discord-Status-bot?v=1) to go to the page where you can fork it again! I will give a explanation & solution for the most common errors you get when changing something if you don't want to this for thr 2nd time.
| I get a reference error | I use the status bot variable for the status of the bot. You get this error probably because you either deleted or changed the input in the console where I get the value.
| Replit randomly restarted this program | Replit unfortunately automaticly reboots replit in X time. There is nothing to combat this :(
| My problem isn't described here | I suggest going to [This discord](https://discord.gg/7WFk2rW7Mw) (not mine) to get help. If you just forked this repl, didn't change anything and it has a error. Please read all of this file again
|Why are there random messages in the console? | If someone who has permission triggers the !set command. It gets logged in the console. Also when the bot is ready, it shows a random tip|
|There is a intent error?| Try enabling all your intents in the discord developer portal. If your bot doesn't have the message intent, ALL of the command from this program won't work. If your bot is verified, it may not be possible to get the message intent. So these commands won't work.|

That was it. Have fun with programming or with your new status for your bot!

Also, I would really appreciate it if you follow me on replit :D



# Credits:

**Raadsel** for making this entire project

**coolman273#3031** for helping me (Raadsel) see an issue where botghost gets priority. This helped me making V3. Also helped me give feedback about the bot's prefix. Also he suggested a feature what made me made V3.5

**Hybird#6521** for helping me (raadsel) see an issue where botghost gets priority. This issue was before coolman's issue. This gave me the idea to add the !set command

The botghost team for giving me (raadsel) this idea lmao.

# Todo list for Raadsel <!--All not happening soon since I no longer actively maintain this project-->

- Make all the built in commands slash commands <!--not happening soon-->
- Add a log channel mode.
- Make it more user friendly
- Add more todo ideas

**If you have any suggestions for this project, contact Raadsel on replit or type the suggestion in the comments! (Also do this when you have found a bug.)**


# Current version: V3.5.6


# Versions.
|Version|info|
|----|-----|
|V3.5.8|Fixed error with getting the status priority|
|V3.5.7|Added a simple option to see if an user is using statusmode 1. Also changed the webserver text because it was somehow flagged as phising by google lol|
|V3.5.6|Used my new npm package to smallify things and added some other things|
|V3.5.5|Documentation updates! Improved readability, and added more info to the readme.md file<!--And some self promo for my pinger:) up.rdsl.ga--> The reason this update happend is because of a new project called https://up.rdsl.ga/!|
|V3.5.4|Added some disclaimers because this is actually **totally** not made for self-botting! Its just made for botghost. Also from now: I am not maintaining this project any longer. Thanks for 500 forks!|
|V3.5.3|Small improvements and I started to use "Version control" from Replit <!--Basically git-->, so people can use previous versions from V3.5.2!|
|V3.5.2|Small bugfixes, grammer fixes, updated the markdown file, added a LICENSE file and changed license from MIT to GPL. Also I got 400 forks!! :tada:| <!--woah GPL-->
|V3.5.1|Updated the readme.md file. Fixed grammer mistakes, typos and added 2 extra catogories.|
|**V3.5.0**|didnt feel like V4 so it is V3.5. ***NEW***: If you have any problems that this program randomly restarts and you have to put the status in again, you can enable statusmode 1 on line 4 of index.js. And make a secret called `STATUS`. As value, make it the status you want the bot to have. Now when the program restarts it won't ask you for your status. But instead just take the status from the secrets and go online (with that status!). thanks again <!--Its again because he helped me in the past with debugging etc-->*coolman273#3031*, for suggesting this feature.|
|V3.4.2|preparing for a new big update by adding some more values etc.
|V3.4.1|Small readme.md changes + ninja update: & small index.js changes & now status resets every 7 minutes imstead of 5. Also shows the version on starting & in debug file|
|V3.4.0|The -online command also shows for how long this repl has been online now! Also thinkig about adding all these comabds as slash commands. Also updated some small errors with the debug mode & added keywords for this project|
|V3.3.1|Added new debug interface text|
|V3.3.0|Added debug mode. If you have issues DM me on discord with your repl name & debug mode on|
|V3.2.1|Fixed grammer mistakes (english isnt my first language so its a bit hard to see mistakes:)|
|V3.2.0|The images in readme.md now go via imgur. So the anoyying images in the file derictory are now gone! I was able to to this on my phone lmao.|
|V3.1.4|Updated readme.md: updated FAQ, updated some topics & more. Also changed the name of the variables for the random tips. **version 3.1.3 is reversed**.|
|V3.1.3|Update reversed. Got too much errors to fix on my phone cuz im on vacation| <!--Some people still have this version :(-->
|V3.1.2| Added some more tips:). Also I'm going on vacation so there won't be any updates soon.|
|V3.1.1| Updated readme.md for 3.0.4|
|V3.1.0|the status gets set every 5 minutes since this version|
|V3.0.7|Lukeprojects on replit forked this repl while I was editting readme.md. So now it says that they have V3.0.7 :O. This is a bug. (they actually have V3.1.4)|
|V3.0.3|The prefix for the bot is now `-` instead of `!`.
|V3.0.2|The credits from readme.md are now the same as the -credits command|
|V3.0.1|Added credits at the end of readme.md, added all the commands this project has and some more tips|
|**V3.0**|every ~~15~~ 5 minutes the status for the bot is reset so that botghost does not get priority. You still change it by doing `-set <your status>`. Than the status will be set to that status every ~~15~~ 5 minutes. This way, The max time the bot's status will be botghost's. Is ~~15~~ 5 minutes. This is a more backend update.|
|V2.2.1|Added a no perm message for the -defaultstatus command|
|V2.2.0|Updated readme.md with more FAQ answers. You also can do !defaultstatus to get the status you entered in the console when starting this project. Also fixed some grammer mistakes. Thinking about automatically changing the status after some time just to make sure the botghost status isn't there anymore. Cia|
|V2.1.4|Added another tip. (help)|
|V2.1.3|Added 1 last tip|
|V2.1.2|Added some random tips that make 0 sence|
|V2.1.1|Added more tips|
|V2.1|Added random tips in the console when everything is ready. (idk now there's more random console logs lol). Rip V2.0.4.|
|V2.0.4| deleted some console logs since it was really overwhelming.|
|V2.0.3| changed the scale of he image... it still sucks|
|V2.0.2| Updated the cover page image. Before this it sucked. Now it still sucks, but less|
|V2.0.1| index.js has been cleaned up and just looks better now. Also did some changes to readme.md because it was outdated since 2.0 |
|**V2.0**| As I got 100 forks I decided to update this repl to V2! Now you can use the command !set to set the command. This is useful if the botghost status got priority. Now you can just do it via discord and you dont have to restart the entire replit!|
|V1.1.2| Minor improvements & updated readme.md|
|V1.1.1| Some minor bugfixes & improvements. Fixed a error The } was before the ) Began working on a new way to choose the status. Next update! Stay tuned!|
|V1.1.0 | Made it so you can choose the status via the console |
|V1.0.1|Updated the cover page|
|**V1.0**| Published this replit |
|Béta | Versions before 1.0 were béta versions and probably haven't been saved. V
|V.0.3.1|Final changes before publishing it. (Also I went on vacation so 1.0 didn't went public for some time)
|V.0.3| Added comments via // so people can understand whats going on and maybe use this as discord bot template??|
|V0.2.2 | Made the readme.md file look nicer |
|V0.2.1 | Grammer changes & cleaned up some code in the index.js file
|V0.2 | Wrote index.js and made the readme.md file and wrote in it (omg) |
|V0.1.1 | Made this project  |
|V0.1| Made another project with this idea but deleted it |

Cool people <!-- Dont know what happend to the 100th, 300th and 800th forker lol-->
- Bolitadepan7 -- 900th forker
- Essensverkaeufe -- 800th forker
- InimeneM -- 600th forker
- PABLORAYEN -- 500th forker
- A395382 -- 400th forker
- Siriz -- 200th forker
- Coolman273 -- Helped with suggesting some featurs and reporting some errors.

**What do the version numbers say?**

So a whole number (V1, V2, V3) means a big update. If after that whole number is a dot and a number (V1.1, V1.2, V2.1) it is a small update. And if after that number there's a dot and another number (V2.1.1, V1.1.1, V2.1.2 etc.) It means its a small bugfix/improvement to the small update

If you want to see old versions you can click on the number of forks this project has and scroll down. Its easy to find people who haven't updated yet. -- UPDATE: You can also use Replit's version control to see previous versions!



Thats it, hope you like my project and thanks for the 550+ forks!
# End of readme.md