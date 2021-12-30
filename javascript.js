"use strict";
// Первое домашнее задание

const personalMovieBD =  {
        count: +prompt("Сколько фильмов вы уже посмотрели ?", ""),
        movies: {},
        actors: [],
        genres: [],
        privat: false
};

const a = prompt("Один из последних просмотренных фильмов", "");
const b = prompt("На сколько оцените его","");
const c = prompt("Один из последних просмотренных фильмов", "");
const d = prompt("На сколько оцените его","");

personalMovieBD.movies[a]=b;
personalMovieBD.movies[c]=d;
console.log(personalMovieBD);