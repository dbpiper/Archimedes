# Archimedes

Archimedes is a website to provide a news feed for developers. Specifically,
it provides information about software releases in a similar manner to a
news site like [BBC](http://bbc.com/) or [The Verge/tech](https://www.theverge.com/tech).

## Motivation

I personally find myself constantly the releases of all sorts of software
projects very often. For example, each day before I start working I will get
a notification from my development OS: Manjaro, that I have package updates.
Then I will have to go read up on them to see what changed, to see if it will
potentially break anything and if there were any new features added that I
might want to use.

This process is essentially the same for things like my "Update Monday", where
I go through and update all of my packages each Monday on whatever my main
active project is. Doing so requires carefully reading the release notes
of each of the packages that I am using. In other words, Archimedes is my
solution to this problem: providing all of this information in one place
so that there is no need to manually navigate to a ton of Github projects
to read release notes.

**[Contributing](docs/CONTRIBUTING.md)**

**[Development Configuration](docs/development-configuration.md)**

## Steps to run

See [Development Configuration](docs/development-configuration.md) for
information on what is needed to work on the project. Especially see, the
[CI script](https://github.com/dbpiper/Archimedes/.travis.yml) as it provides
consistent up-to-date information on exactly what is needed.

**Essentially you need to:**

1. Get permission to access the project as we use [`git-crypt`](https://github.com/AGWA/git-crypt)
to encrypt sensitive files. Then we have to add your GPG key to the project.
2. Clone the repository and unlock the encrypted files with `git-crypt unlock`.
3. run `npm run installStandard` to install the packages, or `npm run installFromLock`
if you want to use the `package-lock.json` files instead.
4. Setup the docker containers as detailed in the files above.
5. Pull the data into the server by running the following inside
the `src/server` directory: `npm run download-data`.
6. Then run `npm run start` from inside both the client and server directories.
7. The site will be running on `localhost:5000`.
