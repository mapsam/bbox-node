# bbox-node

Node webservice for getting the bounding box of a set of geometry

## Deploy to Heroku

Requres the [heroku toolbelt](https://toolbelt.heroku.com/) and a `Procfile`.

**Create a new instance on heroku**

```
heroku create <name>
git push heroku master
```

**Update on remote**

```
git push origin master
git push heroku master
```

**Push different branch** - this does not deploy since it is not master

```
git checkout <branch_name>
git push heroku <branch_name>
```

**Load different branch into master deploy**

```
git checkout <branch_name>
git push -f heroku <branch_name>:master
```
