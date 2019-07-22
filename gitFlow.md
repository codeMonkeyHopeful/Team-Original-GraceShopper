KEEP BRANCHES SMALL!!!!!!
MAKE SURE WE ALL KNOW WHAT EVERYONE IS WORKING ON SO WE DONT WORK ON THE SAME FILES!!

#make a new branch everytime you work on something. Never work directly on the dev branch:
git checkout -b <branch name>

#commit your branch often to your local and forked repo:

git add <files>
git commit -m 'your message'

#when you are ready to merge in to the upstream dev branch,
#make sure that the dev branch is up to date with upstream dev:

git checkout dev
git pull upstream dev

#switch back to your working branch:

git checkout <branch name>

#rebase the latest dev branch under the head of your working branch:

git rebase dev

IF THERE IS A MERGE CONFLICT TALK WITH THE GROUP BEFORE CHANGING ANYTHING

#push branch to your forked repo.
#do a pull request of your branch to the upstream dev.

#once pull request is approved update your local dev branch

rinse and repeat
