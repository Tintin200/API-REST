# API REST — Node.js + Express + Docker

Une API REST construite avec **Node.js**, **Express 5** et conteneurisée avec **Docker**. Elle inclut une base de données **PostgreSQL** et est conçue pour être facilement déployée via **Docker Compose**.

---

## Sommaire

- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancement](#lancement)
- [Structure du projet](#structure-du-projet)
- [Variables d'environnement](#variables-denvironnement)
- [Scripts disponibles](#scripts-disponibles)

---

## Technologies

| Technologie | Version |
|-------------|---------|
| Node.js     | 18      |
| Express     | ^5.2.1  |
| Helmet      | ^7.0.0  |
| CORS        | ^2.8.5  |
| PostgreSQL  | 15 (Alpine) |
| Docker      | —       |

---

## Prérequis

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/)

---

## Installation

Cloner le dépôt et installer les dépendances :

```bash
git clone https://github.com/Tintin200/API-REST.git
cd API-REST
npm install
```

---

## Lancement

### Avec Docker Compose (recommandé)

Lance l'API et la base de données PostgreSQL en une seule commande :

```bash
docker-compose up --build
```

L'API sera accessible sur **http://localhost:3000**.  
La base de données PostgreSQL sera accessible sur le port **5432**.

### Sans Docker (développement local)

```bash
npm start
```

L'API sera accessible sur **http://localhost:8080**.

---

## Structure du projet

```
API-REST/
├── src/
│   └── index.js          # Point d'entrée de l'application
├── tests/                # Tests
├── Dockerfile            # Image Docker de l'application
├── docker-compose.yml    # Orchestration Docker (API + PostgreSQL)
├── .dockerignore
├── .gitignore
└── package.json
```

---

## Variables d'environnement

Les variables suivantes sont définies dans le `docker-compose.yml` :

| Variable            | Valeur par défaut | Description                     |
|---------------------|-------------------|---------------------------------|
| `NODE_ENV`          | `development`     | Environnement Node.js           |
| `POSTGRES_DB`       | `todo_db`         | Nom de la base de données       |
| `POSTGRES_USER`     | `todo_user`       | Utilisateur PostgreSQL          |
| `POSTGRES_PASSWORD` | `todo_pass`       | Mot de passe PostgreSQL         |

> ⚠️ Pensez à modifier les identifiants PostgreSQL avant tout déploiement en production.

---

## Scripts disponibles

```bash
npm start   # Démarre l'application avec Node.js
```

---

## Licence

ISC
