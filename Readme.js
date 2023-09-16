//! Начинаем. У меня папка с проектом, которая называется git-is Зайдем в нее и напишем
//? git init
//*    Ответ CLI: Initialized empty Git repository in D:/Dima/Начальное-обучение/git-is/.git/
//* Это значит, что git инициализирован и дает возможность использовать в ней git. Так видим, что в
//* этой папке появилась папка .git, где собственно и находятся все файлы гита этого проекта.
//*     Можем перейти в эту папку:
//? cd .git
//*     и посмотреть её содержимое:
//? ls
//*     Выйдем из папки
//? cd ..
//*    Проверим состояние git:
//? git status
//*     Ответ CLI:
//* On branch master
//* Initial commit
//* nothing to commit...
//! Создадим новый файл, write in CLI или вручную:
//? touch newfile.js
//* И теперь, если проверим состояние git, то уже увидим изменения:
//? git status
//*      Ответ CLI: Untracked files:
//* (use "git add <file>..." to include in what will be committed)
//! newfile.js
//*  Красный, значит, появился новый файл, гит его не отслеживает. Добавим его для отслеживания гитом. Если мы будем делать изменения в этом файле, гит нам покажет
//? git add <newfile> (для именно этого файла) или 
//? git add .  (Точка в конце! для вообще всех новых )
//* И теперь, если проверим состояние git, то уже увидим изменения:
//? git status
//*     Ответ CLI:   On branch master
//*  No commits yet
//* Changes to be committed: (use "git rm --cached <file>..." to unstage)
//* new file: newfile.js   (уже будет зеленый)
//!  Теперь для окончания работы с файлом нужно сделать commit. 
//* Закоммитить - значит зафиксировать изменения в памяти гита
//? git commit -m 'Start project'
//* закоммитить с message о том или ином изменении
//*     Ответ CLI: (кратко, т.к. файл был просто пустой)
//* [master (root-commit) 048f8c7] Start project
//* 1 files changed, 29 insertions(+)
//* create mode 100644 newfile.js
//! Посмотреть список коммитов можно командой
//? git log
//*     Ответ CLI: commit f8c74024b4293cf53a2bb8d5ee40bdb4bc8e8 (HEAD -> master)
//* Author: Vital-pro <Vital-pro@yandex.ru>
//* Date:   Sat Sep 16 14:53:55 2023 +0300
//*  Start project

//! Следующий этап. Сделаем изменения в файле (-ах)
function( a, b) {
  return a * b;
}
//* И теперь, если проверим состояние git, то уже увидим изменения:
//? git status
//!  modified:   newfile.js
//todo Пасмотрим, как гит видит наши изменения
//? git diff newfile.js

