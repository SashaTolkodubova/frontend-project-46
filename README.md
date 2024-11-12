### Hexlet tests and linter status:
[![Actions Status](https://github.com/SashaTolkodubova/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/SashaTolkodubova/frontend-project-46/actions)

[![Node CI](https://github.com/SashaTolkodubova/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/SashaTolkodubova/frontend-project-46/actions)

[![Test Coverage](https://api.codeclimate.com/v1/badges/d6b0c8c4db52f5c5b31d/test_coverage)](https://codeclimate.com/github/SashaTolkodubova/frontend-project-46/test_coverage)

# Difference calculator

This program finds differences between two files in json and yaml format.  
By default, the result of the comparison is displayed in a convenient format

## Installation

Run next commands:
```sh
git clone git@github.com:SashaTolkodubova/frontend-project-46.git
```
```sh
cd frontend-project-46/
```
```sh
make install
```
```sh
sudo npm link
```

## Helper
```sh
gendiff -h
```

## Start program
Default format
```sh
gendiff <name of file1> <name of file2> 
```

Plain format
```sh
gendiff --format plain <name of file1> <name of file2>
```

JSON format
```sh
gendiff --format json <name of file1> <name of file2>
```

## Demonstration

Compare flat json-files in defaul format:
<a href="https://asciinema.org/a/682286" target="_blank"><img src="https://asciinema.org/a/682286.svg" /></a>

Compare flat yaml-files in defaul format:
<a href="https://asciinema.org/a/BnJfrAzJ6yFVFGnDkKqEJRtVX" target="_blank"><img src="https://asciinema.org/a/BnJfrAzJ6yFVFGnDkKqEJRtVX.svg" /></a>

Compare nested files json and yaml in default format:
<a href="https://asciinema.org/a/odkvdZqoEZpS17TZUtirASoO5" target="_blank"><img src="https://asciinema.org/a/odkvdZqoEZpS17TZUtirASoO5.svg" /></a>
Compare nested files json and yaml in palin format:
<a href="https://asciinema.org/a/buvOp8tUE80oA5scRYKslkVqk" target="_blank"><img src="https://asciinema.org/a/buvOp8tUE80oA5scRYKslkVqk.svg" /></a>
Compare nested files json and yaml in json format:
<a href="https://asciinema.org/a/sXk6WA2N0uSPZqKJwty1NL0e2" target="_blank"><img src="https://asciinema.org/a/sXk6WA2N0uSPZqKJwty1NL0e2.svg" /></a>