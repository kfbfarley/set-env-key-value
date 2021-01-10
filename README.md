<h1 align="center">
      <br>A full JavaScript Node.js compatible environment variables editor
  <br/>
</h1>

A quick and useful JavaScript application for environment variables edition.

> [Environment variables](http://en.wikipedia.org/wiki/Environment_variable) are a set of dynamic named values that can affect the way running processes will behave on a computer.

## 📋 Requirements

You may use Windows, macOS, or Linux as your development operating system and the following tools:

-  [Node.js](https://nodejs.org/en/download/) 

## 🚀 Technologies

This project was built using the following technologies:

-  [Node.js fs](https://nodejs.org/api/fs.html)
-  [Node.js os](https://nodejs.org/api/os.html)

## 💻 Installation

To add this package to your project, simply execute the following command:

> Remind: You must be on your project root directory

```
$ npm install @kfbfarley/set-env-key-value@1.0.15
```

## 🔎 Usage

```
$ const env = require("set-env-key-value");
```

> Tip: Place your mouse poiter over the env variable and you will have access to JSDocs

### Methods
* view
> The view(key) method returns an String of a given object's own enumerable string-keyed property. The value must exist in your .env file
* eview
> The view(key) method returns an String of a given object's own enumerable string-keyed property from your process environment variables
* edit
> The edit(key, value, environment) method returns a Boolean indicating whether the value of the given enumerable string-keyed property has been changed. 
* remove
> The remove(key, recursive, environment) method returns a Boolean indicating whether the value or both value and key of the given enumerable string-keyed property has been removed. 
* list
> The list() method returns an Array containing string-keyed properties and it's value inside an array for each key. 
* keys
> The keys() method returns an Array containing all keys defined on your .env file. 
* values
> The values() method returns an Array containing all key values defined on your .env file.

## 📏 Example

If you want to get the value of the PROJECT_SECRET_KEY_VALUE key you must use the view(given key) method.

> Remind: You must have the following line on your .env file

```
$ PROJECT_SECRET_KEY_VALUE=sfaIN2HMAy
```

```
$ env.view("PROJECT_SECRET_KEY_VALUE")
```
### Output
The output in this case will be `sfaIN2HMAy`

## 👍 Contributing

Contributions are what make this platform an amazing place to learn, inspire, and create. Please feel free to visit the [open issues](https://github.com/kfbfarley/set-env-key-value/issues) section to propose or create a related issue.

## 📄 Licensing

This repository is MIT licensed, as found in the [LICENSE][l] file.

[set-env-key-value](https://github.com/kfbfarley/set-env-key-value) has no documentation, just this repo.

[l]: https://github.com/kfbfarley/set-env-key-value/blob/master/LICENSE