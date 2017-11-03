# Github team update process 

## OVERVIEW
1. Master is locked
2. Dev is where we all pull / merge and push to
3. We're using branches from Dev to our own branch called dev-myname
4. Once our dev-myname is updated we merge with dev
5. once dev is working with all submitted changes from all users we push to master

### STEPS
Each team member will follow these steps to maintain a code update lifecycle

#### PREWORK:  clone the repo to your local pc/folder/sandbox (Done only once)
```
git clone git@github.com:TangJames/Code-Scratch.git
git checkout -b dev-jesse  (this makes the branch) skip to step 2
```


#### Step 1: Get the latest working code from DEV to begin making changes
```
git pull origin dev
```

#### Step 2: branch off from the dev clone into your own clone, then make your changes.

#### Step 3:  review files you have changed, add them to git stage and commit
```
git status
git add -A (or git add .)
git commit -m "my comments here"
```


#### Step 4: push to your branch on github
```
git push origin dev-jesse
```

#### Step 5: go to github and fix merge conflicts
1. Compare pull reqeuest button


#### Step 6: Once any conflicts are resolved merge to 'Dev' branch.
1. Change 'Master' to 'Dev';  Compare 'Dev' to 'Dev-Myname'
2. Merge pull request
3. Confirm merge
