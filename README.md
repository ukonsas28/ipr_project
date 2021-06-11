# IPR project

### Stack frontend

- Next JS
- React JS
- TypeScript

### Stack backend

- Hapi JS
- Postgres
- TypeScript

### Для инициализации проекта (выполняется только один раз при установке) выполнить следующие команды:

- make initial - создание сети docker и сборка образов приложений + загрузка образов postgres
- make install_dep - установка зависимостей

### Для запуска проекта выполнить следующие команды:

- make up - запуск контейнеров приложения
- make start_front - запуск фронтовой части
- make start_back - запуск серверной части

### Для остановки проекта выполнить следующие команды:

- make down - остановка контейнеров
