# Rendu-API
Ce dépôt contient les notes du cours d'API, la présentation d'une API, la présentation d'une API REST, la présentation du style REST ainsi qu'une API REST.

## API vs API REST

**API (Application Programming Interface)** :
Une API est comme une porte d'entrée qui permet à différentes applications informatiques de communiquer entre elles. C'est un ensemble de règles et de protocoles qui définissent comment les applications peuvent échanger des informations et accéder aux fonctionnalités les unes des autres. Une API peut fonctionner de différentes manières, utilisant divers protocoles de communication.

**API REST (Representational State Transfer)** :
L'API REST est un type spécifique d'API qui suit les principes d'architecture du style REST. Elle utilise le protocole HTTP pour effectuer des opérations sur les ressources. Chaque ressource est identifiée par une URL unique, appelée "endpoint", et les méthodes HTTP standard comme `GET` (pour obtenir des données) et `POST` (pour créer de nouvelles données) sont utilisées pour interagir avec les ressources.

**Les principales différences** :

1. **Style architectural** : Une API est un terme générique pour toute interface de programmation, tandis qu'une API REST suit les principes du style REST.

2. **Protocole de communication** : Les API peuvent utiliser différents protocoles (comme HTTP, SOAP, etc.), alors qu'une API REST utilise spécifiquement le protocole HTTP.

3. **Méthodes d'interaction** : Les API peuvent utiliser diverses méthodes d'interaction, tandis qu'une API REST se base principalement sur les méthodes HTTP standard (comme `GET` et `POST`).

4. **Endpoints** : Les API peuvent avoir leurs propres conventions pour identifier les ressources, tandis qu'une API REST utilise des URL (endpoints) pour identifier chaque ressource de manière unique.

5. **Niveau de complexité** : Les API peuvent être plus ou moins complexes en fonction de leur conception, tandis que les API REST sont conçues pour être simples et faciles à comprendre grâce à l'utilisation des méthodes HTTP standard.

## Le style REST

**Le style REST (Representational State Transfer)** :

Le style REST est une approche architecturale simple et efficace pour concevoir des systèmes web et des API. Dans cette approche, chaque donnée ou objet est considéré comme une ressource, telle qu'un utilisateur, une photo ou un article de blog, et est identifié par une URL unique, appelée "endpoint".

Les interactions entre les clients et les serveurs se font à l'aide du protocole HTTP, en utilisant des méthodes standard telles que `GET` (pour obtenir des données) et `POST` (pour créer de nouvelles données). Chaque demande du client doit contenir toutes les informations nécessaires pour que le serveur comprenne la requête, rendant chaque requête indépendante des précédentes.

Les réponses du serveur dans une API REST sont généralement formatées de manière uniforme, facilitant le traitement des réponses par les clients. Le style REST offre des avantages tels que la simplicité, la scalabilité, l'indépendance du client et du serveur, ainsi que la facilité de mise en cache des données.

En résumé, le style REST est une approche simple et efficace pour concevoir des systèmes web et des API. En utilisant les principes d'identification des ressources, d'interactions basées sur HTTP et d'état de représentation, il permet de créer des services web bien structurés, évolutifs et faciles à utiliser.


## Comprendre une API REST

Une API REST (Representational State Transfer) est un moyen pour différentes applications ou services informatiques de communiquer entre eux de manière organisée et standardisée. Dans cette approche, chaque application (appelée le client) peut demander des informations ou effectuer des actions sur une autre application (appelée le serveur) de manière simple et structurée.

*Imaginez un restaurant où un client souhaite commander un hamburger.* Au lieu de se rendre directement en cuisine pour le préparer, le client peut passer sa commande au serveur, qui relayera cette demande au chef en cuisine. Dans une API REST, le rôle du serveur est joué par l'API, qui agit comme un intermédiaire facilitant les interactions entre les différentes applications.

Dans ce contexte, chaque donnée ou objet (comme un utilisateur, une photo ou un article de blog) est considéré comme une ressource. Chaque ressource possède une adresse spéciale appelée "endpoint", qui est essentiellement une URL unique permettant de l'identifier.

Lorsqu'un client souhaite interagir avec une ressource, il utilise des méthodes HTTP pour indiquer l'action qu'il souhaite effectuer. Par exemple, la méthode `GET` est utilisée pour demander des informations sur une ressource existante, tandis que la méthode `POST` est utilisée pour créer une nouvelle ressource.

Après avoir reçu une demande, le serveur (ou l'API) répond en conséquence, fournissant soit les informations demandées (dans le cas d'une méthode `GET`), soit une confirmation de l'action effectuée avec succès (dans le cas d'une méthode `POST`).

En résumé, une API REST est un moyen pour différentes applications de communiquer de manière standardisée et structurée, en utilisant les méthodes HTTP pour interagir avec les ressources disponibles sur le serveur (ou l'API). Cela facilite l'échange d'informations et la réalisation d'actions entre les différentes applications informatiques.