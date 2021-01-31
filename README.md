# todofinder
An application to list all the files which contain a word 'todo'

# Application Object
This is a very small application written in Node.js to figure out the `TODO`s in project code. It's very common practice for developer to add `TODO`s in our file where / which we want to inhance in coming future.

# Directory structure example
Given the following directory structure, where files can be in the immediate directory, or a sub-directory (or a sub-directory of the sub-directory, ad infinitum).:

```
/path/to/your/dir
  - somedir
    - somemodule
      - somefile.js
      - someotherfile.js
  - somedir2
    - anotherdir
      - yet_another_dir
        - index.js
      - index.js
    - index.js
  - somedir3
    - another_file.js
```

Assuming your application runs at `/path/to/your/dir`, and assuming all of the files contains the text string `"TODO"`, the application should output something similar to:

```
/path/to/your/dir/somedir/somemodule/somefile.js
/path/to/your/dir/somedir/somemodule/someotherfile.js
/path/to/your/dir/somedir2/anotherdir/yet_another_dir/index.js
/path/to/your/dir/somedir2/anotherdir/index.js
/path/to/your/dir/somedir2/index.js
/path/to/your/dir/somedir3/another_file.js
```
# How to set run this application
1) Install node.js in your computer.
2) Chechk out this application in computer.
3) Navigate to folder 'todofinder', which is a root directory for this application.
4) Run the command 'npm start'.
