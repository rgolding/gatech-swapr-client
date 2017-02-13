# swapr-client

The SWAPR front-end thin client.

*Does not work with node7; use node6*

Need the following installed before the following directions:
- homebrew
- bower
- ruby
- npm


## Installing node6 with homebrew
If you haven't installed node with homebrew before, just do

	brew install node@6

If you already have node installed with homebrew, do

	brew unlink node
	brew install node@6

To check what version of node you have installed, do

	node -v

You want to see v6.x.x

## Building the client
If you don't have npm, do

	brew install npm

Navigate to the project directory and do

	npm install
	bower install
	npm install grunt-cli
	grunt dev
	
This builds `./dist/index.html`, which is the client page.
