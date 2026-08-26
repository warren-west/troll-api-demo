# Docker Cheatsheet
Here are the main Docker commands we use. A typical workflow is:
1. Developing your source code.
2. Adding a Dockerfile to your project root folder.
3. Executing a `docker build` command to build an image from the Dockerfile.
4. Executing a `docker run` command to run an instance of the app in a container.
5. Testing that the running instance of the app works.
6. Executing a `docker push` command to push the image to the DockerHub registry.

## 1. Docker BUILD
Syntax:
```bash
docker build <tagname for the image> .
```
Example:
```bash
docker build -t warrenwest/my-api .
```
The convention for a tagname is <docker account name>/<project name>, e.g., `warrenwest/my-api`. 

## 2. Docker RUN
Syntax:
```bash
docker run -d -p <outer port> : <inner container port> -e <if you want to set an environment variable> <name of the container you want to run with these settings>
```
Example:
```bash
docker run -d -p 3000:3000 -e PORT=3000 -e SECRET=potatoes warrenwest/my-api
```

## 3. Docker AI
Docker has an AI agent called Gordon, who can help you troubleshoot issues, or run commands.
Syntax:
```bash
docker ai "<prompt>"
```

Example:
```bash
docker ai "help me fix this container error"
```

## 4. Docker PUSH
Syntax:
```bash
docker push <tagname>
```

Example:
```bash
docker push warrenwest/my-api
```

## 5. Docker TAG
Use to change the tagname for an image.
Syntax:
```bash
docker tag <current tagname> <new tagname>
```

Example:
```bash
docker tag my-api warrenwest/my-api
```

## 6. Docker login
A command to log in via the terminal.
Syntax:
```bash
docker login
```

## 7. List all containers
```bash
docker ps
```

## 8. List all images
```bash
docker images
```
