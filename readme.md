# Furlon

## Summary
Furlon is an e-commerce selling furniture to customers on behalf of furniture stores.
The general flow of the business is the following:
1. Stores either directly (future feature) or via us upload content onto their website. This content includes their store details, list of products with details.
2. Customers are then able to view these products and make a purchase.
3. Furlon handles the payment and sends the order details to the store at which point the store is responsible for the delivery.

The website is built using a Python backend using the [Django](https://www.djangoproject.com/) framework following the REST methodology. Data is stored in a relational database.

Django has been the chosen to be the framework for the backend as it is highly opinionated and comes packed with free code which would speed up development. The highly opinionated nature encourages more consistency and that certain things are build correctly and completely which could otherwise pose a potential security threat.

Django handles the models and so the table structure is controlled via the framework. This brings two main advantages: direct interaction with the database is limited and a better consistency is encouraged between the database structure and what Django knows the structure to be.

The front end uses [typeScript](https://www.typescriptlang.org/) as supposed to traditional JavaScript to encourage more careful coding and to reduce the number of bugs. The settings prevent typeScript to compile unless all errors are resolved. TypeScript will compile to ES5 to allow better compatibility. This allow allows for better scaling as when new features added and the javaScript bundle size increase, typeScript can be set to compile to ES6 or later which will reduce file size.

All javaScript is bundled together and loaded when the user loads the homepage to allow the script to be cached and thus improve load speeds in the following pages. TypeScript therefore is useful in this setting as it encourages to consider null objects when selecting elements in the DOM. The key motivation behind this method is to enhance user experience by reducing load time.

## Quick Start (Development)
This will assume the file structure

```
Furlon
│
└─── venv
|   │   
│   └─── (virtual environment files)
|
└─── furlon-website
    │
    └─── (website files)
```
## Quick Start (Development)
1. Create a working directory and move into that folder. `mkdir Furlon && cd Furlon`
2. Create virtual environment `python -m venv venv`.
3. Clone the Furlon repository and move into the repository root directory `cd furlon-webiste`.
4. Install Python dependencies `pip install requirements.txt`.
5. Install nodeJs packages `npm install`.
6. Run batch files to start watch moves for running the Django server on the localhost and watching for changes on SASS and TypeScript files `start_workspace.bat`.  Failing this, run each of following commands in their own shell sessions: `python manage.py livereload`, `python manage.py runserver`, `npm run watch:sass`, `npm run webpack`.

## Production
### Compile SASS and TypeScript
Run all processes from Quick Start (Development) except step 6. Instead, run `npm run build`. 

This will compile the SASS files to CSS files and will similarly compile TypeScript files to JavaScript files.

### Regenerate Staticfiles
If running on the live server and not the local host, the server will rely on static files existing within ./furlon-website/static/.

To collect all assets and move them into the directory, run `python manage.py collectstatic`. There will be an prompt to check if you would want overwrite existing files, press "y" then the return key.

## Software
### Technologies
| Front End | Back End |
| -------- | ---------|
| HTML5 | Python |
| CSS3 | PostgreSQL |
| SASS | Django |
| TypeScript | |

### Database
The database is handled through the backend framework Django.