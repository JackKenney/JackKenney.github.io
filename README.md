# CS-Women-Web-Resume-Template

## About 

This is a simple online resume template build with Bootstrap 4. This template is geared for college students who want to build a web portfolio that briefly showcases their skillset and expertise. Below is what the template looks like. The rest of this README contains more detailed information on how to go about editing and changing the code. 

Here is a live preview of what the template looks like: http://www.supriyakankure.com/CS-Women-Web-Resume-Template/

![screenshot](https://cloud.githubusercontent.com/assets/8978764/24691841/eb8b7c3e-19a3-11e7-9b16-87046c1e47ac.png)


## Instructions for Workshop 

Refer to our website for a complete list of steps and resources: https://sites.google.com/umass.edu/undergraduatecswomen

### Step 0: Install Git
Install Git, and a text editor of your choice. We reccomend Atom or Sublime. 

### Step 1: Create a Repository 
In your GitHub profile, create a new repository and name it username.github.io where username is your GitHub username. Initialize with a README and gitignore. 

### Step 2: Clone the Repostiory to your Desktop
Go to the main page of your repository.  In the top right, there should be a green button called “clone or download.” Click on this. A box with a URL should show up. Copy this URL. On your computer create a folder on your desktop titled my-website. Now open your terminal or command prompt. First, locate which directory you are in. You can use the command `pwd`(print working directory) to see where you are. The `ls` command ( or `dir` in windows) lists all the files in the given directory you are in. The `cd` command changes the directory, by going down one level.  `cd..` jumps up one level. Type the following commands (it maybe slightly different depending on which directory your terminal is in):

```
cd Desktop 
cd my-website 
```
Now we are going to clone the repository from our GitHub acount to the my-website folder on our desktop. Once you are in the my-website folder, type the following command replacing the URL from the url we copied above. 

```
git clone [URL]
```
### Step 3: Download Template Code 
Navigate to our repository, and follow the same steps in step 3, but DOWNLOAD the zip of our code. Then, move the index.html and myStyle.css from our repository (CS-Women-Web-Resume-Template) into your repository (username.github.io) on your desktop

Your directory on your desktop should look like the following:

```
__/Desktop
  __/My-website 
    __/username.github.io
	index.html
	myStyle.css
	README
```

### Step 4: Edit Index and CSS files 
Change the files to reflect how you would want your website to look like. Use a text-editor such as sublime or atom to edit the files. Notepad works fine as well. Save the changes once you are done. 

### Step 5: Commit and Push Changes 
In your terminal, make sure you are in your username.github.io folder. Type in the commands below. These commands add the new files to your repository. Each time you make a change and want to push it to GitHub, you must add a message that describes this change. In the example below, our commit message is “this is my first commit.” Once you do that, you can push the changes to GitHub. 

```
git add
git commit -am “this is my first commit” 
git push -u origin master 

```
### Step 7: Verify Commits Have Been Pushed 
Go to your GitHub repository on github.com. Click on the commits and check to see if your commit is there. If it is, then you have correctly pushed your code. For the above example, you should see two commits, one that reads “initial commit” and a second commit that says “this is my first commit". 


### Step 8: Verify username.github.io 
Type in your website’s url (username.github.io) to see if your website is being correctly hosted. See the following website to troubleshoot issues. Additionally, this video goes into greater detail including how to add a custom domain (however we recommend to use GoDaddy). It may take upto 30 minutes before you see your website.


## Understanding the Code 
To understand the code, we have detailed page that describes what to change and how to change the HTML/CSS 
:https://docs.google.com/document/d/1R65wu8l8FvqforOcAEZJYUJ8ilo0VMsJFMyMf8SqXhs/edit

The code that you will be working with has been slightly modified than what is in the document above, but the idea is the same.



